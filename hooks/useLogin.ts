import { useState } from 'react';
import { login as loginApi } from '../services/api';
import { ILoginRequest, ILoginSuccessResponse } from '../interfaces/ILogin';
import { useAuth } from '../context/AuthContext';

const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { setIsAuthenticated } = useAuth();

    const login = async (loginRequest: ILoginRequest) => {
        setLoading(true);
        setError(null);

        try {
            const response = await loginApi(loginRequest);
            setIsAuthenticated(true)
            return { success: true, data: response as ILoginSuccessResponse };
        } catch (error: any) {
            setIsAuthenticated(false)
            setError(error?.response?.data?.message || 'Erro desconhecido');
            return { success: false };
        } finally {
            setLoading(false);
        }
    };

    return { login, error, loading };
};

export default useLogin;
