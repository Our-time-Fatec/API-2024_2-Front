import { useState, useEffect, useCallback } from 'react';
import { requestWithRefresh } from '../services/api';
import { IDietaDiaria, IDietaFixa } from '../interfaces/IDieta';
import { DiasSemana } from '../enums/diasSemana';

const useDietas = (onlyUser: boolean = false) => {
    const [dietasDiarias, setDietasDiarias] = useState<IDietaDiaria[]>([]);
    const [selectedDiaSemana, setSelectedDiaSemana] = useState<string>('');

    const diaSemanaIndice = (dia: DiasSemana): number => {
        const daysArray = Object.values(DiasSemana);
        return daysArray.indexOf(dia);
    };
    const fetchDietasDiarias = useCallback(async (diaSemana?: string) => {
        try {
            const url = diaSemana 
                ? `/dietaDiaria/me?diaSemana=${diaSemana}` 
                : '/dietaDiaria/me/hoje';
    
            const response = await requestWithRefresh({
                method: 'GET',
                url,
            });
    
            // Ordene as dietas pelo dia da semana
            const sortedDietas = response.data.sort((a: IDietaFixa, b: IDietaFixa) => {
                return diaSemanaIndice(a.diaSemana as DiasSemana) - diaSemanaIndice(b.diaSemana as DiasSemana);
            });
    
            // Atualize o estado com as dietas ordenadas
            setDietasDiarias(sortedDietas);
        } catch (error) {
            console.error('Erro ao buscar dietas:', error);
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
    };
};

export default useDietas;
