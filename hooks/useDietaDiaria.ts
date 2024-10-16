import { useState, useEffect, useCallback } from "react";
import { requestWithRefresh } from "../services/api";
import { IDietaDiaria, IDietaDiariaHook } from "../interfaces/IDieta"; // Supondo que as interfaces estão aqui
import { DiasSemana } from "../enums/diasSemana";
import dietaProcessor from "../utils/dietaProcessor";
import { GruposEnum } from "../screens/cadastrarDieta";

const useDietas = (onlyUser: boolean = false) => {
  const [dietasDiariasHook, setDietasDiariasHook] = useState<
    IDietaDiariaHook[]
  >([]);
  const [dietasDiarias, setDietasDiarias] = useState<IDietaDiaria[]>([]);
  const [selectedDiaSemana, setSelectedDiaSemana] = useState<string>("");

  const fetchDietasDiarias = useCallback(async (diaSemana?: string) => {
    try {
      const url = diaSemana
        ? `/dietaDiaria/me?diaSemana=${diaSemana}`
        : "/dietaDiaria/me/hoje";

      const response = await requestWithRefresh({
        method: "GET",
        url,
      });

      const dietas:IDietaDiaria[] = response.data

      // console.log(JSON.stringify(dietas))

      setDietasDiarias(dietas);

      const processedDietas: IDietaDiariaHook[] =
        await dietaProcessor.processDietas(dietas);

        console.log(JSON.stringify(processedDietas))

      const gruposConsumo = processedDietas.flatMap(
        (dieta) => dieta.gruposConsumo
      );

      const sortedGruposConsumo = dietaProcessor.sorterDiario(gruposConsumo);

      const sortedDietas: IDietaDiariaHook[] = processedDietas.map(
        (dieta) => {
          return {
            ...dieta,
            gruposConsumo: sortedGruposConsumo.filter((grupo) =>
              dieta.gruposConsumo.some((g) => g.nome === grupo.nome)
            ),
          };
        }
      );


      setDietasDiariasHook(sortedDietas);
         console.log(JSON.stringify(sortedDietas));
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
    dietasDiariasHook,
    selectedDiaSemana,
    setSelectedDiaSemana,
    refreshDietasDiarias,
  };
};

export default useDietas;
