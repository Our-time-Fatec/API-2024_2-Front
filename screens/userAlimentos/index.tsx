import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AlimentoItem from '../../components/alimento';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useIsFocused } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStack';
import FooterMenu from '../../components/menus';
import { Picker } from '@react-native-picker/picker';
import useAlimentos from '../../hooks/useAlimentos';
import { Ionicons } from '@expo/vector-icons';
import { requestWithRefresh } from '../../services/api';

type UserAlimentosScreenNavigationProp = StackNavigationProp<RootStackParamList, "UserAlimentos">;
type UserAlimentosScreenRouteProp = RouteProp<RootStackParamList, "UserAlimentos">;

type Props = {
    navigation: UserAlimentosScreenNavigationProp;
    route: UserAlimentosScreenRouteProp;
};

const UserAlimentosScreen: React.FC<Props> = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { alimentos, categorias, selectedCategoria, setSelectedCategoria, page, totalPages, loadMore, refreshAlimentos } = useAlimentos(searchTerm, true);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            refreshAlimentos();
        }
    }, [isFocused, refreshAlimentos]);

    const handleSearchChange = useCallback((text: string) => {
        setSearchTerm(text);
    }, []);

    const handleCategoriaChange = useCallback((itemValue: string) => {
        setSelectedCategoria(itemValue);
    }, []);

    const handleRegister = () => {
        navigation.navigate('CadastroAlimento', { alimentoId: '' });
    };

    const handleEdit = (id: string) => {
        navigation.navigate('CadastroAlimento', { alimentoId: id });
    };

    const handleDelete = async (id: string) => {
        try {
            await requestWithRefresh({
                method: 'DELETE',
                url: `/alimento/${id}`
            });
            alert('Alimento deletado com sucesso!');
            refreshAlimentos();
        } catch (error) {
            alert('Erro ao deletar alimento.');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Meus Alimentos</Text>
                <Picker
                    selectedValue={selectedCategoria}
                    style={styles.picker}
                    onValueChange={handleCategoriaChange}
                >
                    <Picker.Item label="Todas as Categorias" value="todascategorias" />
                    {categorias.map(categoria => (
                        <Picker.Item key={categoria.codigo} label={categoria.nome} value={categoria.codigo.toString()} />
                    ))}
                </Picker>
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#ccc" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar alimentos..."
                        value={searchTerm}
                        onChangeText={handleSearchChange}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Ionicons name="add" size={20} color="#fff" style={styles.icon} />
                    <Text style={styles.buttonText}>Cadastrar Alimento</Text>
                </TouchableOpacity>
                <FlatList
                    data={alimentos}
                    keyExtractor={(item, index) => item._id ? item._id : `key-${index}`}
                    renderItem={({ item }) => (
                        <AlimentoItem
                            alimento={item}
                            isUserAlimento={true}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    )}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    ListFooterComponent={() => (
                        page < totalPages ? (
                            <TouchableOpacity style={styles.loadMoreButton} onPress={loadMore}>
                                <Text style={styles.loadMoreText}>Carregar mais</Text>
                            </TouchableOpacity>
                        ) : null
                    )}
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
        marginBottom: 1,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 25,
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
    },
    searchInput: {
        marginLeft: 10,
        flex: 1,
        fontSize: 16
    },
});

export default UserAlimentosScreen;
