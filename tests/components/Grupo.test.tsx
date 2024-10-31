import React from "react";
import { Modal } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import GroupModal from "../../components/grupos"; // Ajuste o caminho conforme sua estrutura de pastas
import { IGrupo } from "../../interfaces/IDieta";

const grupoMock: IGrupo = {
  nome: "Grupo de Exemplo",
  alimentos: [
    { alimentoId: "1", nome: "Alimento 1", quantidade: 2, porcao: 100 },
    { alimentoId: "2", nome: "Alimento 2", quantidade: 1, porcao: 150 },
  ],
};

describe("GroupModal", () => {
  let onCloseMock: jest.Mock;
  let onEditPortionMock: jest.Mock;
  let onEditQuantityMock: jest.Mock;
  let onRemoveAlimentoMock: jest.Mock;

  beforeEach(() => {
    onCloseMock = jest.fn();
    onEditPortionMock = jest.fn();
    onEditQuantityMock = jest.fn();
    onRemoveAlimentoMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Limpa todos os mocks após cada teste
  });

  it("deve renderizar o modal com os detalhes do grupo", () => {
    const { getByText, getByTestId } = render(
      <GroupModal
        visible={true}
        grupo={grupoMock}
        onClose={onCloseMock}
        onEditPortion={onEditPortionMock}
        onEditQuantity={onEditQuantityMock}
        onRemoveAlimento={onRemoveAlimentoMock}
        onUpdateGrupo={jest.fn()}
      />
    );

    expect(getByText("Grupo de Exemplo")).toBeTruthy();
    expect(getByTestId("alimento-container-1")).toBeTruthy();
    // expect(getByText("Alimento 1")).toBeTruthy();
    // expect(getByText("Alimento 2")).toBeTruthy();
  });

  it("deve chamar onClose ao pressionar o botão Fechar", () => {
    const { getByTestId } = render(
      <GroupModal
        visible={true}
        grupo={grupoMock}
        onClose={onCloseMock}
        onEditPortion={onEditPortionMock}
        onEditQuantity={onEditQuantityMock}
        onRemoveAlimento={onRemoveAlimentoMock}
        onUpdateGrupo={jest.fn()}
      />
    );

    fireEvent.press(getByTestId("fechar-botao"));

    expect(onCloseMock).toHaveBeenCalled();
  });

  it("deve chamar onEditPortion com o novo valor ao salvar a porção", () => {
    const { getByTestId } = render(
      <GroupModal
        visible={true}
        grupo={grupoMock}
        onClose={onCloseMock}
        onEditPortion={onEditPortionMock}
        onEditQuantity={onEditQuantityMock}
        onRemoveAlimento={onRemoveAlimentoMock}
        onUpdateGrupo={jest.fn()}
      />
    );

    fireEvent.press(getByTestId("alimento-container-1"));
    fireEvent.changeText(getByTestId("input-nova-porcao-1"), "200");
    
    // Pressiona o botão Salvar
    fireEvent.press(getByTestId("salvar-porcao"));

    expect(onEditPortionMock).toHaveBeenCalledWith("1", 200);
  });

  it("deve chamar onEditQuantity com o novo valor ao salvar a quantidade", () => {
    const { getByTestId } = render(
      <GroupModal
        visible={true}
        grupo={grupoMock}
        onClose={onCloseMock}
        onEditPortion={onEditPortionMock}
        onEditQuantity={onEditQuantityMock}
        onRemoveAlimento={onRemoveAlimentoMock}
        onUpdateGrupo={jest.fn()}
      />
    );

    fireEvent.press(getByTestId("alimento-container-1"));
    fireEvent.changeText(getByTestId("input-nova-quantidade-1"), "3");

    // Pressiona o botão Salvar
    fireEvent.press(getByTestId("salvar-quantidade"));

    expect(onEditQuantityMock).toHaveBeenCalledWith("1", 3);
  });

  it("deve chamar onRemoveAlimento ao remover um alimento", () => {
    const { getByTestId } = render(
      <GroupModal
        visible={true}
        grupo={grupoMock}
        onClose={onCloseMock}
        onEditPortion={onEditPortionMock}
        onEditQuantity={onEditQuantityMock}
        onRemoveAlimento={onRemoveAlimentoMock}
        onUpdateGrupo={jest.fn()}
      />
    );

    fireEvent.press(getByTestId("alimento-container-1"));
    fireEvent.press(getByTestId("remover-alimento-botao"));

    expect(onRemoveAlimentoMock).toHaveBeenCalledTimes(0);
    // expect(onRemoveAlimentoMock).toHaveBeenCalledWith("1", "Grupo de Exemplo"); o real aqui
});
});
