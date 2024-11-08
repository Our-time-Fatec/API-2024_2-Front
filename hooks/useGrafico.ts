import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { requestWithRefresh } from "../services/api";
import { IDietaSemanal } from "../interfaces/IGrafico";

const useGrafico = (refreshTrigger?: boolean) => {
  const [dietaSemanal, setDietaSemanal] = useState<IDietaSemanal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAlimentosConsumidosSemana = useCallback(async (refreshTrigger?: boolean) => {
    setLoading(true);
    setError(null);

    try {
      // Primeiro, tente obter os dados do cache
      if (!refreshTrigger) {
        const cachedDietaSemanal = await AsyncStorage.getItem("dietaSemanal");
        if (cachedDietaSemanal) {
          setDietaSemanal(JSON.parse(cachedDietaSemanal));
          setLoading(false);
          return;
        }
      }

      // Se não houver dados no cache, faça a requisição à API
      const response = await requestWithRefresh({
        method: "GET",
        url: "/alimentoConsumido/me/semana", // URL do seu endpoint
      });

      const dietaSemanalData: IDietaSemanal = response.data;

      // Atualiza o estado com os dados completos, sem filtros
      console.log(JSON.stringify(dietaSemanalData));
      setDietaSemanal(dietaSemanalData);

      // Armazene os dados no cache
      await AsyncStorage.setItem(
        "dietaSemanal",
        JSON.stringify(dietaSemanalData)
      );
    } catch (err) {
      console.error("Erro ao buscar alimentos consumidos na semana:", err);
      setError("Erro ao buscar alimentos consumidos na semana");
    } finally {
      setLoading(false);
    }
  }, [refreshTrigger]);

  useEffect(() => {
    fetchAlimentosConsumidosSemana();
  }, [fetchAlimentosConsumidosSemana, refreshTrigger]);

  return {
    dietaSemanal,
    loading,
    error,
    refreshGrafico: fetchAlimentosConsumidosSemana,
  };
};

export default useGrafico;
