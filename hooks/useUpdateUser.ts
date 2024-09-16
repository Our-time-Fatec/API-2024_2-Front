import { useState } from 'react';
import { requestWithRefresh } from '../services/api'; // Certifique-se de ajustar o caminho conforme necessário
import { IUsuario } from '../interfaces/IUsuario';

const useUpdateUser = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const updateUser = async (updateRequest: IUsuario) => {
        setLoading(true);

        try {
            const response = await requestWithRefresh({
                method: 'PUT',
                url: '/usuario/',
                data: updateRequest
            });
            return { success: true, data: response.data };
        } catch (err: any) {
            const errorMessage = err?.response?.data?.message || 'Erro desconhecido';
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    return { updateUser, loading };
};

export default useUpdateUser;
