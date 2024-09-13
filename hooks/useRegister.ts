import { useState } from 'react';
import { register as registerApi } from '../services/api';
import { ILoginSuccessResponse } from '../interfaces/ILogin';
import { IUsuario } from '../interfaces/IUsuario';

const useRegister = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const register = async (registerRequest: IUsuario) => {
        setLoading(true);

        try {
            const response = await registerApi(registerRequest);
            return { success: true, data: response as ILoginSuccessResponse };
        } catch (err: any) {
            const errorMessage = err?.response?.data?.message || 'Erro desconhecido';
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    return { register, loading };
};

export default useRegister;
