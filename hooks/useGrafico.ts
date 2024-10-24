import { useState, useEffect, useCallback } from 'react';
import { requestWithRefresh } from '../services/api';
import { IDietaSemanal } from '../interfaces/IGrafico';

const useGrafico = () => {
    const [dietaSemanal, setDietaSemanal] = useState<IDietaSemanal | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAlimentosConsumidosSemana = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await requestWithRefresh({
                method: 'GET',
                url: '/alimentoConsumido/me/semana', // URL do seu endpoint
            });

            const dietaSemanalData: IDietaSemanal = response.data;

            // Atualiza o estado com os dados completos, sem filtros
            console.log(JSON.stringify(dietaSemanalData))
            setDietaSemanal(dietaSemanalData);
        } catch (err) {
            console.error('Erro ao buscar alimentos consumidos na semana:', err);
            setError('Erro ao buscar alimentos consumidos na semana.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAlimentosConsumidosSemana()
    }, [fetchAlimentosConsumidosSemana]);

    const refreshAlimentosConsumidos = useCallback(() => {
        fetchAlimentosConsumidosSemana();
    }, [fetchAlimentosConsumidosSemana]);

    return {
        dietaSemanal,
        loading,
        error,
        refreshAlimentosConsumidos,
    };
};

export default useGrafico;
