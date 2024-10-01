import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useIsFocused } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStack';
import FooterMenu from '../../components/menus';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { requestWithRefresh } from '../../services/api';
import { DiasSemana } from '../../enums/diasSemana';
import DietaItem from '../../components/dieta';
import useDietas from '../../hooks/UseDietas';
import styles from './styles';

type UserDietasScreenNavigationProp = StackNavigationProp<RootStackParamList, "UserDietas">;
type UserDietasScreenRouteProp = RouteProp<RootStackParamList, "UserDietas">;

type Props = {
    navigation: UserDietasScreenNavigationProp;
    route: UserDietasScreenRouteProp;
};

const UserDietasScreen: React.FC<Props> = ({ navigation }) => {
    const isFocused = useIsFocused();
    const { dietas, selectedDiaSemana, setSelectedDiaSemana, refreshDietas } = useDietas(true);

    useEffect(() => {
        if (isFocused) {
            refreshDietas();
        }
    }, [isFocused, refreshDietas]);

    const handleCadastro = () => {
        navigation.navigate('CadastroDieta', { dietaId: '' });
    };

    const handleEdit = (id: string) => {
        navigation.navigate('CadastroDieta', { dietaId: id });
    };

    const handleDelete = async (id: string) => {
        try {
            await requestWithRefresh({
                method: 'DELETE',
                url: `/dieta/${id}`
            });
            alert('Dieta deletada com sucesso!');
            refreshDietas();
        } catch (error) {
            alert('Erro ao deletar dieta.');
        }
    };

    const handleDiaChange = (value: string) => {
        setSelectedDiaSemana(value);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Minhas dietas</Text>
                <Picker
                    selectedValue={selectedDiaSemana}
                    style={styles.picker}
                    onValueChange={handleDiaChange}
                >
                    <Picker.Item label="Selecione o dia" value="Todos" />
                    <Picker.Item label='Hoje' value="Hoje"/>
                    {Object.keys(DiasSemana).map((key) => (
                        <Picker.Item key={key} label={DiasSemana[key as keyof typeof DiasSemana]} value={key} />
                    ))}
                </Picker>
                <TouchableOpacity style={styles.button} onPress={handleCadastro} >
                    <Ionicons name="add" size={20} color="#fff" style={styles.icon} />
                    <Text style={styles.buttonText}>Cadastrar Dieta</Text>
                </TouchableOpacity>
                <FlatList
                    data={dietas}
                    keyExtractor={(item, index) => item._id ? item._id : `key-${index}`}
                    renderItem={({ item }) => (
                        <DietaItem
                            dieta={item}
                            isUserDieta={true}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    )}
                    numColumns={1}
                />
            </View>
            <FooterMenu navigation={navigation} />
        </View>
    );
};


export default UserDietasScreen;
