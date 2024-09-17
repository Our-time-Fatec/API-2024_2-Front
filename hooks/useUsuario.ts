import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUsuario } from '../interfaces/IUsuario';
import { requestWithRefresh } from '../services/api'; // Ajuste o caminho conforme necessário

const useUsuario = () => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsuario = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await requestWithRefresh({
                method: 'GET',
                url: '/usuario/mydetails'
            });
            setUsuario(response.data);
        } catch (err: any) {
            setError(err.message || 'Erro ao buscar informações do usuário');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsuario();
    }, [fetchUsuario]);

    return { usuario, loading, error, refreshUser: fetchUsuario };
};

export default useUsuario;
