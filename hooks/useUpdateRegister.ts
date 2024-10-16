import { useState } from 'react';
import { requestWithRefresh } from '../services/api'; // Certifique-se de ajustar o caminho conforme necessário
import { IUpdatePassRequest } from '../interfaces/IPassChange';

const useUpdatePass = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const updatePass = async (updateRequest: IUpdatePassRequest) => {
        setLoading(true);

        try {
            const response = await requestWithRefresh({
                method: 'PUT',
                url: '/usuario/pass',
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

    return { updatePass, loading };
};

export default useUpdatePass;
