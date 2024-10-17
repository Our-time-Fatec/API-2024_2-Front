import { useState, useEffect, useCallback } from "react";
import { requestWithRefresh } from "../services/api";
import { IDietaDiaria } from "../interfaces/IDieta"; // Supondo que as interfaces estão aqui
import { DiasSemana } from "../enums/diasSemana";
import dietaProcessor from "../utils/dietaProcessor";
import { GruposEnum } from "../screens/cadastrarDieta";

const useDietas = (onlyUser: boolean = false) => {
  const [dietasDiarias, setDietasDiarias] = useState<IDietaDiaria[]>([]);
  const [selectedDiaSemana, setSelectedDiaSemana] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState<boolean>(false); 

  const fetchDietasDiarias = useCallback(async (diaSemana?: string) => {
    try {
      const url = diaSemana
        ? `/dietaDiaria/me?diaSemana=${diaSemana}`
        : "/dietaDiaria/me/forma";

      const response = await requestWithRefresh({
        method: "GET",
        url,
      });

      const dietas:IDietaDiaria[] = response.data

      if (Array.isArray(dietas) && dietas.length === 0) {
        setIsEmpty(true); // Define isEmpty como true se o array for vazio
      } else {
        setIsEmpty(false); // Caso contrário, define como false
      }

      const gruposConsumo = dietas.flatMap(
        (dieta) => dieta.gruposConsumo
      );

      const sortedGruposConsumo = dietaProcessor.sorterDiario(gruposConsumo);

      const sortedDietas: IDietaDiaria[] = dietas.map(
        (dieta) => {
          return {
            ...dieta,
            gruposConsumo: sortedGruposConsumo.filter((grupo) =>
              dieta.gruposConsumo.some((g: { grupo: string; }) => g.grupo === grupo.grupo)
            ),
          };
        }
      );


      setDietasDiarias(sortedDietas);
        //  console.log(JSON.stringify(sortedDietas));
    } catch (error) {
      console.error("Erro ao buscar dietas:", error);
    }
  }, []);

  useEffect(() => {
    fetchDietasDiarias(selectedDiaSemana);
  }, [selectedDiaSemana, fetchDietasDiarias]);

  const refreshDietasDiarias = useCallback(() => {
    fetchDietasDiarias(selectedDiaSemana);
  }, [fetchDietasDiarias, selectedDiaSemana]);

  return {
    dietasDiarias,
    selectedDiaSemana,
    setSelectedDiaSemana,
    refreshDietasDiarias,
    isEmpty
  };
};

export default useDietas;
