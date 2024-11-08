import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DiaDetalhesModal from '../../components/detalhesAlimentacao';
import { DiasSemana } from '../../enums/diasSemana';
import { IDietaSemanal } from '../../interfaces/IGrafico';

const mockDietaSemanal: IDietaSemanal = {
    [DiasSemana.Domingo]: {
        dia: DiasSemana.Domingo,
        alimentos: [],
        total: {
            valorEnergetico: 2000,
            proteinas: 50,
            carboidratos: 250,
            fibras: 30,
            lipidios: 70,
        },
    }
};

describe('DiaDetalhesModal', () => {
  it('deve renderizar corretamente com os detalhes do dia', () => {
    const { getByText } = render(
      <DiaDetalhesModal
        selectedDay={DiasSemana.Domingo}
        dietaSemanal={mockDietaSemanal}
        isVisible={true}
        onClose={jest.fn()}
      />
    );

    expect(getByText('Detalhes do Dia: Domingo')).toBeTruthy();
    expect(getByText('Valor Energético: 2000.00 kcal')).toBeTruthy();
    expect(getByText('Proteínas: 50.00 g')).toBeTruthy();
    expect(getByText('Carboidratos: 250.00 g')).toBeTruthy();
    expect(getByText('Fibras: 30.00 g')).toBeTruthy();
    expect(getByText('Lipídios: 70.00 g')).toBeTruthy();
  });

  it('deve chamar onClose quando o botão de fechar for pressionado', () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <DiaDetalhesModal
        selectedDay={DiasSemana.Domingo}
        dietaSemanal={mockDietaSemanal}
        isVisible={true}
        onClose={onCloseMock}
      />
    );

    fireEvent.press(getByText('Fechar'));
    expect(onCloseMock).toHaveBeenCalled();
  });
});