import React from 'react';
import TestRenderer from 'react-test-renderer';
import AlimentoItem from '../../components/alimento'; // ajuste o caminho conforme necessário
import { IAlimento } from '../../interfaces/IAlimento';

const mockAlimento: IAlimento = {
    _id: "1",
    nome: "Banana",
    porcao: 100,
    preparo: "In Natura",
    categoriaNome: "Frutas",
    categoriaUrl: "",
    criadoEm: new Date(),
    quantidade: 2,
    nomeGrupo: "Café da Manhã",
    detalhes: {
        valorEnergetico: 89,
        carboidratos: 22.8,
        proteinas: 1.1,
        fibras: 2.6,
        lipidios: 0.3,
    },
    categoriaCodigo: 0
};

describe('Componente AlimentoItem', () => {
  it('Deve renderizar corretamente com os dados do alimento fornecidos', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Deve mostrar o modal quando a imagem for pressionada', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;

    const imageTouchable = testInstance.findByProps({
      testID: 'imageTouchable',
    });
    
    expect(imageTouchable).toBeDefined();
    TestRenderer.act(() => {
      imageTouchable.props.onPress();
    });

    const modal = testInstance.findByProps({ testID: 'modal' });
    expect(modal.props.visible).toBe(true);
  });

  it('Deve acionar a função onEdit quando o botão Editar for pressionado', () => {
    const mockOnEdit = jest.fn();
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={true}
        onEdit={mockOnEdit}
        onDelete={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;

    const editButton = testInstance.findByProps({ testID: 'editButton' });
    TestRenderer.act(() => {
      editButton.props.onPress();
    });

    expect(mockOnEdit).toHaveBeenCalledWith(mockAlimento._id);
  });

  it('Deve acionar a função onDelete quando o botão Deletar for pressionado', () => {
    const mockOnDelete = jest.fn();
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={true}
        onEdit={jest.fn()}
        onDelete={mockOnDelete}
      />
    );
    const testInstance = testRenderer.root;

    const deleteButton = testInstance.findByProps({ testID: 'deleteButton' });
    TestRenderer.act(() => {
      deleteButton.props.onPress();
    });

    expect(mockOnDelete).toHaveBeenCalledWith(mockAlimento._id);
  });

  it('Deve abrir o modal de consumo quando o botão Consumir for pressionado', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={false}
        isAlimentoConsumido={false} // Adicione isso
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;

    const consumirButton = testInstance.findByProps({ testID: 'consumirButton' });
    TestRenderer.act(() => {
      consumirButton.props.onPress();
    });

    const modalConsumo = testInstance.findByProps({ testID: 'modalConsumo' });
    expect(modalConsumo.props.visible).toBe(true);
  });

  it('Deve exibir as informações do alimento corretamente', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;

    const nomeAlimento = testInstance.findByProps({ testID: 'alimentoNome' });
    expect(nomeAlimento.props.children).toBe(mockAlimento.nome);

    const porcaoAlimento = testInstance.findByProps({ testID: 'alimentoPorcao' });
    expect(porcaoAlimento.props.children).toBe(`${mockAlimento.porcao}g`);
  });

  it('Deve desabilitar o botão Consumir se o alimento já foi consumido', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={false}
        isAlimentoConsumido={true} // Garantindo que o alimento foi consumido
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;
  
    // Verifique se o botão não está presente
    expect(() => {
      testInstance.findByProps({ testID: 'consumirButton' });
    }).toThrow(); // Isso deve lançar um erro, pois o botão não deve ser renderizado
  });

  it('Deve habilitar o botão Consumir se o alimento não foi consumido', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={false}
        isAlimentoConsumido={false} // Adicione isso
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    const testInstance = testRenderer.root;

    const consumirButton = testInstance.findByProps({ testID: 'consumirButton' });
    expect(consumirButton.props.disabled).toBe(false);
  });
});
