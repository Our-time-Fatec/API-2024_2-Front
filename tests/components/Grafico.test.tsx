import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DietaGrafico from '../../components/grafico';
import { DiasSemana } from '../../enums/diasSemana';
import { IDietaSemanal } from '../../interfaces/IGrafico';

// Mock da biblioteca de gráficos
jest.mock('react-native-gifted-charts', () => {
    const React = require('react');
    const { View, TouchableOpacity, Text } = require('react-native');
    return {
      BarChart: ({ data }: { data: any[] }) => (
        <View>
          {data.map((bar, index) => (
            <TouchableOpacity key={index} onPress={bar.onPress}>
              <Text>{bar.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ),
    };
  });

const mockDietaSemanal: IDietaSemanal = {
    [DiasSemana.Domingo]: {
        dia: DiasSemana.Sabado,
        alimentos: [],
        total: {
          valorEnergetico: 2000,
          proteinas: 50,
          carboidratos: 250,
          fibras: 30,
          lipidios: 70,
        },
      }
  // Adicione outros dias conforme necessário
};

describe('DietaGrafico', () => {
  it('deve renderizar corretamente com os dados fornecidos', () => {
    const { getByText } = render(
      <DietaGrafico
        dietaSemanal={mockDietaSemanal}
        isVisible={true}
        onClose={jest.fn()}
        meta={2000}
      />
    );

    expect(getByText('D')).toBeTruthy();
    // expect(getByText('S')).toBeTruthy();
    // expect(getByText('T')).toBeTruthy();
    // expect(getByText('Q')).toBeTruthy();
    // expect(getByText('Q')).toBeTruthy();
    // expect(getByText('S')).toBeTruthy();
    // expect(getByText('S')).toBeTruthy();
  });

  it('deve abrir o modal de detalhes do dia ao clicar em uma barra', () => {
    const { getByText } = render(
      <DietaGrafico
        dietaSemanal={mockDietaSemanal}
        isVisible={true}
        onClose={jest.fn()}
        meta={2000}
      />
    );

    fireEvent.press(getByText('D'));
    expect(getByText('Detalhes do Dia: Domingo')).toBeTruthy();
  });

  it('deve chamar onClose quando o botão de fechar for pressionado', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <DietaGrafico
        dietaSemanal={mockDietaSemanal}
        isVisible={true}
        onClose={onCloseMock}
        meta={2000}
      />
    );

    fireEvent.press(getByText('Fechar'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});