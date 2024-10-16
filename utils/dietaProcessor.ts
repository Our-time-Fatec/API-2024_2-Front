import { Alert } from "react-native";
import { IAlimento } from "../interfaces/IAlimento";
import { IAlimentoDieta, IContagem, IDietaDiaria, IDietaDiariaHook, IDietaFixa, IGrupo, IGrupoConsumoHook } from "../interfaces/IDieta";
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


public sorterDiario(grupos: IGrupoConsumoHook[]): IGrupoConsumoHook[] {
  const ORDEM_GRUPOS = ["Café da Manhã", "Almoço", "Café da Tarde", "Janta"];

  return grupos.sort((a, b) => {
      const indiceA = ORDEM_GRUPOS.indexOf(a.nome);
      const indiceB = ORDEM_GRUPOS.indexOf(b.nome);
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

  public processDietas = (dietas: IDietaDiaria[]): IDietaDiariaHook[] => {
    return dietas.map((dieta) => {
        // Mapeando os grupos para contar as porções para consumir
        const alimentosParaConsumirMap = new Map<string, number>();

        // Função auxiliar para criar uma chave composta por alimentoId e porção
        const criarChave = (alimentoId: string, porcao: number) => `${alimentoId}-${porcao}`;

        // Contando as porções para consumir a partir dos grupos
        dieta.grupos.forEach((grupo) => {
            grupo.alimentos.forEach((alimento) => {
                const chave = criarChave(alimento.alimentoId, alimento.porcao);
                const currentCount = alimentosParaConsumirMap.get(chave) || 0;
                alimentosParaConsumirMap.set(chave, currentCount + alimento.quantidade);
            });
        });

        // Criando a estrutura final para os grupos unificados
        const gruposUnificados: IGrupoConsumoHook[] = [];

        // Função para calcular o total consumido para um alimento específico com base na porção
        const calcularConsumido = (alimentoId: string, porcao: number): number => {
            let totalConsumido = 0;

            // Conta os alimentos consumidos tanto dos gruposConsumo quanto dos grupos
            dieta.gruposConsumo.forEach((grupoConsumo) => {
                grupoConsumo.alimentosConsumidos.forEach((alimentoConsumido) => {
                    if (alimentoConsumido._id === alimentoId && alimentoConsumido.porcao === porcao) {
                        totalConsumido += 1; // Adiciona 1 para cada alimento consumido
                    }
                });
            });

            return totalConsumido;
        };

        // Mapeando os grupos de consumo
        dieta.gruposConsumo.forEach((grupoConsumo) => {
            const alimentosConsumidos = grupoConsumo.alimentosConsumidos.map((alimentoConsumido) => ({
                consumido: calcularConsumido(alimentoConsumido._id, alimentoConsumido.porcao),
                paraConsumir: alimentosParaConsumirMap.get(criarChave(alimentoConsumido._id, alimentoConsumido.porcao)) || 0,
                alimento: {
                    _id: alimentoConsumido._id,
                    nome: alimentoConsumido.nome,
                    preparo: alimentoConsumido.preparo,
                    porcao: alimentoConsumido.porcao,
                    categoriaCodigo: alimentoConsumido.categoriaCodigo || 0,
                    detalhes: alimentoConsumido.detalhes,
                },
            }));

            // Adiciona os alimentos consumidos ao grupo unificado
            gruposUnificados.push({
                _id: grupoConsumo._id,
                nome: grupoConsumo.nome,
                alimentosConsumidos: alimentosConsumidos,
            });
        });

        // Mapeando os grupos de alimentos para adicionar ao gruposUnificados
        dieta.grupos.forEach((grupo) => {
          const grupoExistente = gruposUnificados.find(g => g.nome === grupo.nome);
          if (!grupoExistente) {
              gruposUnificados.push({
                  _id: grupo._id || '',
                  nome: grupo.nome,
                  alimentos: grupo.alimentos.map(alimento => ({
                      consumido: calcularConsumido(alimento.alimentoId, alimento.porcao),
                      paraConsumir: alimentosParaConsumirMap.get(criarChave(alimento.alimentoId, alimento.porcao)) || 0,
                      alimento: {
                          _id: alimento.alimentoId,
                          nome: alimento.nome ?? 'Nome não disponível',
                          preparo: alimento.preparo || '',
                          porcao: alimento.porcao || 0,
                          // AQUI ESTÁ A ALTERAÇÃO
                          categoriaCodigo: alimento.categoriaCodigo ?? 0, // Garantindo que seja sempre um número
                          detalhes: alimento.detalhes ?? {valorEnergetico: 0, carboidratos: 0, fibras: 0, lipidios: 0, proteinas: 0},
                      },
                  })),
                  alimentosConsumidos: [],
              });
          }
      });
      

        return {
            usuarioId: dieta.usuarioId,
            diaSemana: dieta.diaSemana,
            dia: dieta.dia,
            gruposConsumo: gruposUnificados,
        };
    });
};


}

export default new DietaProcessor();
