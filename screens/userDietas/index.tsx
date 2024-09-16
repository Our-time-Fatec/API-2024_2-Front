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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
    row: {
        justifyContent: 'space-between',
    },
    loadMoreButton: {
        padding: 10,
        alignItems: 'center',
    },
    loadMoreText: {
        fontSize: 16,
        color: '#007bff',
    },
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 9,
        paddingHorizontal: "25%",
        borderRadius: 30,
        marginBottom: 10,
        width: "100%",
        maxWidth: 400,
        marginTop: 15,
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    icon: {
        marginRight: 10,
    },
});

export default UserDietasScreen;
