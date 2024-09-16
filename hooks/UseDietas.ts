import { useState, useEffect, useCallback } from 'react';
import { requestWithRefresh } from '../services/api';
import { IDietaFixa } from '../interfaces/IDieta';

const useDietas = (onlyUser: boolean = false) => {
    const [dietas, setDietas] = useState<IDietaFixa[]>([]);
    const [selectedDiaSemana, setSelectedDiaSemana] = useState<string>('');

    const fetchDietas = useCallback(async (diaSemana: string) => {
        try {
            if (diaSemana === 'Todos') { diaSemana = '' }
            const response = await requestWithRefresh({
                method: 'GET',
                url: `/dieta/me${diaSemana ? `?diaSemana=${diaSemana}` : ''}`,
            });
            setDietas(response.data);
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
