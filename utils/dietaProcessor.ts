import { Alert } from "react-native";
import { IAlimento } from "../interfaces/IAlimento";
import { IAlimentoDieta, IContagem, IDietaDiaria, IDietaFixa, IGrupo, IGrupoConsumo } from "../interfaces/IDieta";
import { requestWithRefresh } from "../services/api";

class DietaProcessor {

  public sorter(grupos: IGrupo[]): IGrupo[] {
    const ORDEM_GRUPOS = ["Café da Manhã", "Almoço", "Café da Tarde", "Janta"];

    return grupos.sort((a, b) => {
        const indiceA = ORDEM_GRUPOS.indexOf(a.nome);
        const indiceB = ORDEM_GRUPOS.indexOf(b.nome);
        return indiceA - indiceB;
    });
} 


public sorterDiario(grupos: IGrupoConsumo[]): IGrupoConsumo[] {
  const ORDEM_GRUPOS = ["Café da Manhã", "Almoço", "Café da Tarde", "Janta"];

  return grupos.sort((a, b) => {
      const indiceA = ORDEM_GRUPOS.indexOf(a.grupo);
      const indiceB = ORDEM_GRUPOS.indexOf(b.grupo);
      return indiceA - indiceB;
  });
} 

  public transformGroups(grupos: IGrupo[]) {
    return grupos.map((group: IGrupo) => {
      const transformedAlimentos = group.alimentos
        .map((alimento: IAlimentoDieta) => {
          if (!alimento || !alimento.alimentoId) {
            console.error(
              `Alimento indefinido ou sem ID no grupo: ${group.nome}`
            );
            return null;
          }

          return {
            alimentoId: alimento.alimentoId,
            nome: alimento.nome,
            preparo: alimento.preparo,
            porcao: alimento.porcao, // Usando porção do grupo
            quantidade: alimento.quantidade, // Usando quantidade do grupo
            categoriaCodigo: alimento.categoriaCodigo,
            detalhes: alimento.detalhes,
          };
        })
        .filter((item) => item !== null); // Filtra alimentos nulos

      return {
        _id: group._id,
        nome: group.nome,
        alimentos: transformedAlimentos,
      };
    });
  }

  public gruposAlimentos = (
    porcao: string,
    quantidade: string,
    alimentoIds: IAlimento[],
    allAlimentos: IAlimento[]
  ): IAlimentoDieta[] => {
    if (
      !Array.isArray(alimentoIds) ||
      alimentoIds.length === 0 ||
      !porcao ||
      !quantidade
    ) {
      Alert.alert("Erro", "Todos os campos do alimento são obrigatórios.");
      return []; // Retorna um array vazio em caso de erro
    }

    const alimentos: IAlimentoDieta[] = [];

    alimentoIds.forEach((alimento) => {
      const alimentoEncontrado = allAlimentos.find(
        (a) => a._id === alimento._id
      );

      if (!alimentoEncontrado) {
        Alert.alert("Erro", "Alimento inválido.");
        return; // Se um alimento não for encontrado, apenas pula ele
      }

      const novoAlimento: IAlimentoDieta = {
        alimentoId: alimentoEncontrado._id,
        nome: alimentoEncontrado.nome,
        preparo: alimentoEncontrado.preparo,
        porcao: parseFloat(porcao), // Converte para float
        quantidade: parseInt(quantidade, 10), // Converte para inteiro
        categoriaCodigo: alimentoEncontrado.categoriaCodigo,
        detalhes: alimentoEncontrado.detalhes,
      };

      alimentos.push(novoAlimento);
    });

    return alimentos; // Sempre retorna um array, mesmo que esteja vazio
  };

  public async createDieta(dieta: IDietaFixa) {
    try {
      await requestWithRefresh({
        method: "POST",
        url: "/dieta",
        data: dieta,
      });
    } catch (error: any) {
      // Verifica se a resposta contém uma mensagem de erro
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        // Exibe qualquer mensagem de erro recebida do backend
        Alert.alert("Erro", errorMessage);
        return error
      } else {
        // Exibe uma mensagem genérica caso o erro não tenha uma mensagem específica
        Alert.alert("Erro", "Ocorreu um erro ao criar a dieta.");
      }
      // Log do erro para debug
      console.error("Erro ao criar a dieta:", error);
      return error
    }
  }
  public async updateDieta(dietaId: string, dieta: IDietaFixa) {
    try {
      await requestWithRefresh({
        method: "PUT",
        url: `/dieta/${dietaId}`,
        data: dieta,
      });
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        Alert.alert("Erro", errorMessage);
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao atualizar a dieta.");
      }

      console.error("Erro ao atualizar a dieta:", error);
    }
  }
  

  public editPortion = (alimentoId: string, newPortion: number, selectedGrupo: IGrupo | null) => {
    if (selectedGrupo) {
      const updatedAlimentos = selectedGrupo.alimentos.map((alimento) => {
        if (alimento.alimentoId === alimentoId) {
          return { ...alimento, porcao: newPortion };
        }
        return alimento;
      });
  
      const updatedGroup = { ...selectedGrupo, alimentos: updatedAlimentos };
  
      return updatedGroup; // Retorna o grupo atualizado
    }
  
    return null;
  };
  
  
  public editQuantity = (alimentoId: string, newQuantity: number, selectedGrupo: IGrupo | null) => {
    if (selectedGrupo) {
      const updatedAlimentos = selectedGrupo.alimentos.map((alimento) => {
        if (alimento.alimentoId === alimentoId) {
          return { ...alimento, quantidade: newQuantity };
        }
        return alimento;
      });
  
      const updatedGroup = { ...selectedGrupo, alimentos: updatedAlimentos };
  
      return updatedGroup; 
    }
  
    return null;
  };


}

export default new DietaProcessor();
