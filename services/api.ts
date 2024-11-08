import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILoginRequest, ILoginSuccessResponse } from '../interfaces/ILogin';
import { IUsuario } from '../interfaces/IUsuario';
import { API_HOST } from '@env';

const APIHOST = API_HOST
const api = axios.create({
    baseURL: API_HOST,
});
console.log(APIHOST)

async function getToken() {
    const token = await AsyncStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');
    return token;
}

async function refreshAuthToken() {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) {
        throw new Error('Refresh token não encontrado');
    }

    try {
        const response = await axios.post(`${APIHOST}/auth/refresh-token`, { refreshToken });
        const { token, refreshToken: newRefreshToken } = response.data;

        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('refreshToken', newRefreshToken);

        return token;
    } catch (error) {
        throw new Error('Falha ao renovar o token');
    }
}

async function requestWithRefresh(config: any) {
    try {
        const token = await getToken();
        config.headers = config.headers || {};
        config.headers['Authorization'] = `${token}`;
        const response = await api.request(config);
        return response;
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

async function register(registerRequest: IUsuario) {
    const response = await api.post<ILoginSuccessResponse>('/usuario', registerRequest);
    const { token, refreshToken, usuario } = response.data;

    const usuarioString = JSON.stringify(usuario);
    await AsyncStorage.setItem('usuario', usuarioString);
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('refreshToken', refreshToken);

    return response.data;
}


export { requestWithRefresh, refreshAuthToken, login, register, api };
