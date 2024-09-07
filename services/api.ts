import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILoginRequest, ILoginSuccessResponse } from '../interfaces/ILogin';

const api = axios.create({
    baseURL: 'http://192.168.1.44:3010',
});

async function getToken() {
    return await AsyncStorage.getItem('token');
}

async function refreshAuthToken() {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) throw new Error('Refresh token não encontrado');

    const response = await axios.post('http://192.168.1.44:3010/auth/refresh-token', { refreshToken });
    const { token, refreshToken: newRefreshToken } = response.data;

    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', newRefreshToken);

    return token;
}

async function requestWithRefresh(config: any) {
    try {
        const token = await getToken();
        config.headers['Authorization'] = `${token}`;
        return await api.request(config);
    } catch (error: any) {
        if (error.response?.status === 401) {
            try {
                const newToken = await refreshAuthToken();
                config.headers['Authorization'] = `${newToken}`;
                return await api.request(config);
            } catch (refreshError) {
                throw refreshError;
            }
        }
        throw error;
    }
}

async function login(loginRequest: ILoginRequest) {
    const response = await api.post<ILoginSuccessResponse>('/auth/login', loginRequest);
    const { token, refreshToken, usuario } = response.data;

    const usuarioString = JSON.stringify(usuario);
    await AsyncStorage.setItem('usuario', usuarioString);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);

    return response.data;
}

export { requestWithRefresh, login, api };