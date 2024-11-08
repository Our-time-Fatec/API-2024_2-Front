import { useState, useEffect, useCallback } from 'react';
import { requestWithRefresh } from '../services/api';
import { IDietaFixa } from '../interfaces/IDieta';
import { DiasSemana } from '../enums/diasSemana';

const useDietas = (onlyUser: boolean = false) => {
    const [dietas, setDietas] = useState<IDietaFixa[]>([]);
    const [selectedDiaSemana, setSelectedDiaSemana] = useState<string>('');

    const diaAtualDaSemana = () => {
        const today = new Date();
        const dayIndex = today.getDay(); 
        const daysOfWeek = Object.values(DiasSemana);
        return daysOfWeek[dayIndex]; 
    };

    const chaveDiaSemana = (value: string): string => {
        const entries = Object.entries(DiasSemana);
        const entry = entries.find(([key, val]) => val === value);
        return entry ? `${entry[0]}` : ""; 
    };

    const diaSemanaIndice = (dia: DiasSemana): number => {
        const daysArray = Object.values(DiasSemana);
        return daysArray.indexOf(dia);
    };

    const fetchDietas = useCallback(async (diaSemana: string) => {
        try {
            if (diaSemana === 'Todos') { diaSemana = '' }
            if (diaSemana === 'Hoje') {
                diaSemana = chaveDiaSemana(diaAtualDaSemana())
            }
            // console.log(`/dieta/me${diaSemana ? `?diaSemana=${diaSemana}` : ''}`)
            const response = await requestWithRefresh({
                method: 'GET',
                url: `/dieta/me${diaSemana ? `?diaSemana=${diaSemana}` : ''}`,
            });
          
            const sortedDietas = response.data.sort((a: IDietaFixa, b: IDietaFixa) => {
                return diaSemanaIndice(a.diaSemana as DiasSemana) - diaSemanaIndice(b.diaSemana as DiasSemana);
            });

            setDietas(sortedDietas);
        } catch (error) {
            console.error('Erro ao buscar dietas:', error);
        }
    }, []);

    
    useEffect(() => {
        fetchDietas(selectedDiaSemana);
    }, [selectedDiaSemana, fetchDietas]);

    const refreshDietas = useCallback(() => {
        fetchDietas(selectedDiaSemana);
    }, [fetchDietas, selectedDiaSemana]);

    return {
        dietas,
        selectedDiaSemana,
        setSelectedDiaSemana,
        refreshDietas,
    };
};

export default useDietas;
