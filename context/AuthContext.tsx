// context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshAuthToken } from '../services/api';
import { Text } from 'react-native';

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (auth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {    
                    // Tente renovar o token automaticamente
                   await refreshAuthToken(); // Solução totalmente provisória eu não sei como fazer isso funcionar devidamente eu culpo o expo
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Erro ao recuperar token ou renovar:", error);
                setIsAuthenticated(false);
            }
        };
    
        checkToken();
    }, []);
    if (loading) {
        return <Text>Carregando...</Text>; // Ou qualquer componente de loading
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
