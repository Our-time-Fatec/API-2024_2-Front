import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AlimentoItem from '../../components/alimento';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStack';
import FooterMenu from '../../components/menus';
import { Picker } from '@react-native-picker/picker';
import useAlimentos from '../../hooks/useAlimentos';

type ListAlimentoScreenNavigationProp = StackNavigationProp<RootStackParamList, "ListAlimentos">;
type ListAlimentoScreenRouteProp = RouteProp<RootStackParamList, "ListAlimentos">;

type Props = {
    navigation: ListAlimentoScreenNavigationProp;
    route: ListAlimentoScreenRouteProp;
};

const AlimentosScreen: React.FC<Props> = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { alimentos, categorias, selectedCategoria, setSelectedCategoria, page, totalPages, loadMore } = useAlimentos(searchTerm);

    const handleSearchChange = useCallback((text: string) => {
        setSearchTerm(text);
    }, []);

    const handleCategoriaChange = useCallback((itemValue: string) => {
        setSelectedCategoria(itemValue);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Listar alimentos</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar alimentos..."
                    value={searchTerm}
                    onChangeText={handleSearchChange}
                />
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
                <FlatList
                    data={alimentos}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => <AlimentoItem alimento={item} />}
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
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
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
});

export default AlimentosScreen;
