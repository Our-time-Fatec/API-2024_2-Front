import AsyncStorage from "@react-native-async-storage/async-storage";
import { IGrupo, IAlimentoDieta } from "../interfaces/IDieta";

// Ordem fixa dos grupos
const ORDEM_GRUPOS = ["Café da Manhã", "Almoço", "Café da Tarde", "Janta"];

const useDietaStorage = () => {
  // Função auxiliar para buscar o item do AsyncStorage
  const getItem = async (key: string): Promise<IGrupo[]> => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error("Erro ao buscar item:", error);
      return [];
    }
  };

  // Função para ordenar os grupos na ordem especificada
  const ordenarGrupos = (grupos: IGrupo[]): IGrupo[] => {
    return ORDEM_GRUPOS.map((nomeGrupo) =>
      grupos.find((grupo) => grupo.nome === nomeGrupo) || { nome: nomeGrupo, alimentos: [] }
    );
  };

  // Função para salvar um novo grupo de alimentos (Café da Manhã, Almoço, etc.)
  const saveGrupo = async (nomeGrupo: string, alimentos: IAlimentoDieta[]): Promise<void> => {
    try {
      // Obtém os grupos já existentes
      let grupos = await getItem("grupos");
      
      const grupoExistente = grupos.find((grupo) => grupo.nome === nomeGrupo);

      if (grupoExistente) {
        // Se o grupo já existir, atualiza a lista de alimentos
        grupoExistente.alimentos = [...grupoExistente.alimentos, ...alimentos];
      } else {
        // Se não existir, cria um novo grupo
        grupos.push({
          nome: nomeGrupo,
          alimentos,
        });
      }

      // Ordena os grupos na ordem correta
      grupos = ordenarGrupos(grupos);

      // Armazena os grupos ordenados no AsyncStorage
      await AsyncStorage.setItem("grupos", JSON.stringify(grupos));
    } catch (error) {
      console.error("Erro ao salvar Grupo:", error);
    }
  };

  // Função para remover um grupo baseado no nome
  const removeGrupo = async (nomeGrupo: string): Promise<void> => {
    try {
      let grupos = await getItem("grupos");
      const novosGrupos = grupos.filter((grupo) => grupo.nome !== nomeGrupo);

      // Ordena os grupos remanescentes e atualiza o AsyncStorage
      await AsyncStorage.setItem("grupos", JSON.stringify(ordenarGrupos(novosGrupos)));
    } catch (error) {
      console.error("Erro ao remover Grupo:", error);
    }
  };

  // Função para limpar todos os grupos
  const clearStorage = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem("grupos");
    } catch (error) {
      console.error("Erro ao limpar o armazenamento:", error);
    }
  };

  return {
    getItem,
    saveGrupo,
    removeGrupo,
    clearStorage,
  };
};

export default useDietaStorage;
