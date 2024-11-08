import React from 'react';
import TestRenderer from 'react-test-renderer';
import AlimentoItem from '../../components/alimento'; // ajuste o caminho conforme necessário
import { IAlimento } from '../../interfaces/IAlimento';
import useGrafico from '../../hooks/useGrafico';
import useUsuario from '../../hooks/useUsuario';

jest.mock("../../hooks/useGrafico", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../hooks/useUsuario", () => ({
  __esModule: true,
  default: jest.fn(),
}));

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
  beforeEach(() => {
    (useGrafico as jest.Mock).mockReturnValue({
      dietaSemanal: [],
      refreshGrafico: jest.fn(),
    });

    (useUsuario as jest.Mock).mockReturnValue({
      usuario: {},
      refreshUser: jest.fn(),
    });
  });

  it('Deve renderizar corretamente com os dados do alimento fornecidos', () => {
    const testRenderer = TestRenderer.create(
      <AlimentoItem
        alimento={mockAlimento}
        isUserAlimento={true}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
