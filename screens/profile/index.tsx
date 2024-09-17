import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/rootStack';
import { RouteProp } from '@react-navigation/native';
import FooterMenu from '../../components/menus';
import useUsuario from '../../hooks/useUsuario'; // Certifique-se de que o caminho está correto
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "Profile">;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp;
};

const PerfilScreen: React.FC<Props> = ({ navigation, route }) => {
    const { usuario, loading, error, refreshUser } = useUsuario();
    const { setIsAuthenticated } = useAuth();

    useFocusEffect(
        useCallback(() => {
            refreshUser();
        }, [])
    );

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('refreshToken');
            await AsyncStorage.removeItem('usuario');
            setIsAuthenticated(false);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível realizar o logout. Tente novamente.');
        }
    };

    const handleEdit = async () => {
        navigation.navigate('EditProfile');
    }

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
    }

    if (error) {
        return <Text style={styles.errorText}>{error}</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.profileSection}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>{usuario?.nome} {usuario?.sobrenome}</Text>
                </View>
                <View style={styles.infoSection}>
                    <View style={styles.infoItem}>
                        <Ionicons name="calendar-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Idade</Text>
                        <Text style={styles.infoValue}>{usuario?.idade ?? 'N/A'}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons name="man-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Altura</Text>
                        <Text style={styles.infoValue}>{usuario?.altura} cm</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons name="scale-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Peso</Text>
                        <Text style={styles.infoValue}>{usuario?.peso} Kg</Text>
                    </View>
                </View>
                <View style={styles.infoSection}>
                    <View style={styles.infoItem}>
                        <Ionicons name="trophy-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Objetivo</Text>
                        <Text style={styles.infoValue}>{usuario?.objetivo ?? 'N/A'}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons name="people-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Nível de Sedentarismo</Text>
                        <Text style={styles.infoValue}>{usuario?.nivelDeSedentarismo ?? 'N/A'}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons name="flame-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Gasto de Calorias/dia</Text>
                        <Text style={styles.infoValue}>{usuario?.gastoDeCaloria ? `${usuario?.gastoDeCaloria.toFixed(2)} Kcal` : 'N/A'}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#2d74da" />
                        <Text style={styles.infoLabel}>Meta de consumo/dia</Text>
                        <Text style={styles.infoValue}>{usuario?.consumoDeCaloriaPorDia ? `${usuario?.consumoDeCaloriaPorDia.toFixed(2)} Kcal` : 'N/A'}</Text>
                    </View>
                </View>

                <View style={styles.menuSection}>
                    <TouchableOpacity style={styles.menuItem} onPress={handleEdit}>
                        <Ionicons name="pencil-outline" size={24} color="#2d74da" />
                        <Text style={styles.menuText}>Editar Perfil</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.menuItem}>
                        <Ionicons name="heart-outline" size={24} color="#2d74da" />
                        <Text style={styles.menuText}>Minhas Dietas</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserAlimentos')}>
                        <Ionicons name="document-text-outline" size={24} color="#2d74da" />
                        <Text style={styles.menuText}>Alimentos Cadastrados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FAQs')}>
                        <Ionicons name="chatbubble-outline" size={24} color="#2d74da" />
                        <Text style={styles.menuText}>FAQs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                        <Ionicons name="log-out-outline" size={24} color="#2d74da" />
                        <Text style={styles.menuText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FooterMenu navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 16,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 16,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 8,
        marginTop: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 16,
    },
    infoItem: {
        alignItems: 'center',
        width: '30%',
    },
    infoLabel: {
        fontSize: 14,
        color: '#2d74da',
        marginTop: 4,
        textAlign: 'center',
    },
    infoValue: {
        fontSize: 12,
        textAlign: 'center',
    },
    menuSection: {
        marginTop: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    menuText: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default PerfilScreen;
