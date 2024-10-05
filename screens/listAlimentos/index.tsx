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
import { styles } from './styles';

type ListAlimentoScreenNavigationProp = StackNavigationProp<RootStackParamList, "ListAlimentos">;
type ListAlimentoScreenRouteProp = RouteProp<RootStackParamList, "ListAlimentos">;

type Props = {
    navigation: ListAlimentoScreenNavigationProp;
    route: ListAlimentoScreenRouteProp;
};

const AlimentosScreen: React.FC<Props> = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { alimentos, categorias, selectedCategoria, setSelectedCategoria, page, totalPages, loadMore, refreshAlimentos } = useAlimentos(searchTerm);
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

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Listar alimentos</Text>
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
                    <TextInput style={styles.searchInput} placeholder="Buscar alimentos..." value={searchTerm}
                        onChangeText={handleSearchChange} />
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
                            isUserAlimento={false}
                            onEdit={() => console.log('nao edita')}
                            onDelete={() => console.log('nao deleta')}
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


export default AlimentosScreen;
