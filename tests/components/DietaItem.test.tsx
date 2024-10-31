import React from 'react';
import renderer, { act } from 'react-test-renderer';
import DietaItem from '../../components/dieta'; // ajuste o caminho conforme necessário
import { IDietaFixa } from '../../interfaces/IDieta'; // ajuste o caminho conforme necessário
import { DiasSemana } from '../../enums/diasSemana';
import { Modal, TouchableOpacity } from 'react-native';

// Mock para as props de dieta
const dietaMock: IDietaFixa = {
  _id: '1',
  diaSemana: DiasSemana.Segunda,
  criadoEm: new Date(),
  detalhes: {
    valorEnergetico: 2000,
    proteinas: 50,
    carboidratos: 300,
    fibras: 10,
    lipidios: 20,
  },
  grupos: [
    {
      _id: 'grupo1',
      nome: 'Grupo 1',
      alimentos: [
        {
          alimentoId: 'alimento1',
          nome: 'Alimento 1',
          quantidade: 2,
          porcao: 100,
          detalhes: {
              valorEnergetico: 100,
              proteinas: 0,
              carboidratos: 0,
              fibras: 0,
              lipidios: 0
          },
        },
      ],
    },
  ],
};

describe('Componente DietaItem', () => {
  it('deve renderizar corretamente', () => {
    const tree = renderer.create(
      <DietaItem
        dieta={dietaMock}
        isUserDieta={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot(); // Verifica se a renderização corresponde ao snapshot
  });

  it('deve abrir o modal ao pressionar o botão', () => {
    const component = renderer.create(
      <DietaItem
        dieta={dietaMock}
        isUserDieta={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    // Pressiona o TouchableOpacity para abrir o modal
    act(() => {
      component.root.findByProps({ testID: "open-modal-button" }).props.onPress();
    });

    // Verifica se o modal está visível
    const modal = component.root.findByType(Modal);
    expect(modal.props.visible).toBe(true);
  });

  it('deve chamar a função onEdit ao pressionar o botão Editar', () => {
    const onEditMock = jest.fn();
    const component = renderer.create(
      <DietaItem
        dieta={dietaMock}
        isUserDieta={true}
        onEdit={onEditMock}
        onDelete={jest.fn()}
      />
    );

    // Abre o modal antes de pressionar o botão Editar
    act(() => {
      component.root.findByProps({ testID: "open-modal-button" }).props.onPress();
    });

    // Pressiona o botão Editar
    act(() => {
      component.root.findByProps({ testID: "edit-button" }).props.onPress();
    });

    expect(onEditMock).toHaveBeenCalledWith('1'); // Verifica se a função foi chamada com o ID correto
  });

  it('deve chamar a função onDelete ao pressionar o botão Remover', () => {
    const onDeleteMock = jest.fn();
    const component = renderer.create(
      <DietaItem
        dieta={dietaMock}
        isUserDieta={true}
        onEdit={jest.fn()}
        onDelete={onDeleteMock}
      />
    );

    // Abre o modal antes de pressionar o botão Remover
    act(() => {
      component.root.findByProps({ testID: "open-modal-button" }).props.onPress();
    });

    // Pressiona o botão Remover
    act(() => {
      component.root.findByProps({ testID: "delete-button" }).props.onPress();
    });

    expect(onDeleteMock).toHaveBeenCalledWith('1'); // Verifica se a função foi chamada com o ID correto
  });

  it('deve fechar o modal ao pressionar o botão Fechar', () => {
    const component = renderer.create(
      <DietaItem
        dieta={dietaMock}
        isUserDieta={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    // Abre o modal antes de pressionar o botão Fechar
    act(() => {
      component.root.findByProps({ testID: "open-modal-button" }).props.onPress();
    });

    // Pressiona o botão Fechar
    act(() => {
      component.root.findByProps({ testID: "close-modal-button" }).props.onPress();
    });

    // Verifica se o modal está fechado
    const modal = component.root.findByType(Modal);
    expect(modal.props.visible).toBe(false);
  });
});
