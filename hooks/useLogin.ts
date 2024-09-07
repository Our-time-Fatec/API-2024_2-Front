import { useState } from 'react';
import { login as loginApi } from '../services/api';
import { ILoginRequest, ILoginSuccessResponse } from '../interfaces/ILogin';

const useLogin = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const login = async (loginRequest: ILoginRequest) => {
        setLoading(true);
        setError(null);

        try {
            const response = await loginApi(loginRequest);
            return { success: true, data: response as ILoginSuccessResponse };
        } catch (error: any) {
            setError(error?.response?.data?.message || 'Erro desconhecido');
            return { success: false };
        } finally {
            setLoading(false);
        }
    };

    return { login, error, loading };
};

export default useLogin;
