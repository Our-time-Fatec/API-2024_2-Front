import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUsuario } from '../interfaces/IUsuario';
import { requestWithRefresh } from '../services/api'; // Ajuste o caminho conforme necessário

const useUsuario = () => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await requestWithRefresh({
                    method: 'GET',
                    url: '/usuario/me'
                });
                setUsuario(response.data);
            } catch (err: any) {
                setError(err.message || 'Erro ao buscar informações do usuário');
            } finally {
                setLoading(false);
            }
        };

        fetchUsuario();
    }, []);

    return { usuario, loading, error };
};

export default useUsuario;
