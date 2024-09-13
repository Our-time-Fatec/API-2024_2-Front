import { useState } from 'react';
import { register as registerApi } from '../services/api';
import { ILoginSuccessResponse } from '../interfaces/ILogin';
import { IUsuario } from '../interfaces/IUsuario';
import { useAuth } from '../context/AuthContext';

const useRegister = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setIsAuthenticated } = useAuth();

    const register = async (registerRequest: IUsuario) => {
        setLoading(true);

        try {
            const response = await registerApi(registerRequest);
            setIsAuthenticated(true);
            return { success: true, data: response as ILoginSuccessResponse };
        } catch (err: any) {
            setIsAuthenticated(false);
            const errorMessage = err?.response?.data?.message || 'Erro desconhecido';
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    return { register, loading };
};

export default useRegister;
