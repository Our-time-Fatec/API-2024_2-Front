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
import { styles } from './styles';
import useProfilePicture from '../../hooks/useProfilePicture';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "Profile">;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp;
};

const PerfilScreen: React.FC<Props> = ({ navigation, route }) => {
    const { usuario, loading, error, refreshUser } = useUsuario(); // Adicione a função de refreshUser aqui
    const { setIsAuthenticated } = useAuth();


    useFocusEffect(
        useCallback(() => {
            refreshUser(); // Recarrega os dados do usuário sempre que a tela ganhar foco
        }, [refreshUser])
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

    const { image, reloadImage } = useProfilePicture(usuario ? usuario.email : '');

    useFocusEffect(
        useCallback(() => {
            reloadImage(); // Recarrega os dados do usuário sempre que a tela ganhar foco
        }, [reloadImage])
    );  

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
                {image ? (
              <Image
              source={{ uri: image }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
            ) : (
              <Ionicons name="person-circle-outline" size={120} color="gray" />
            )}
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
                        <Text style={styles.infoValue}>{usuario?.gastoDeCaloria?.toFixed(2) ?? 'N/A'}</Text>
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


export default PerfilScreen;
