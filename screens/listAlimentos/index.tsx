import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { requestWithRefresh } from '../../services/api';
import { IAlimento } from '../../interfaces/IAlimento';
import AlimentoItem from '../../components/alimento';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStack';
import FooterMenu from '../../components/menus';

type ListAlimentoScreenNavigationProp = StackNavigationProp<RootStackParamList, "ListAlimentos">;
type ListAlimentoScreenRouteProp = RouteProp<RootStackParamList, "ListAlimentos">;

type Props = {
    navigation: ListAlimentoScreenNavigationProp;
    route: ListAlimentoScreenRouteProp;
};

const AlimentosScreen: React.FC<Props> = ({ navigation, route }) => {
    const [alimentos, setAlimentos] = useState<IAlimento[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchAlimentos(page);
    }, [page]);

    const fetchAlimentos = async (pageNumber: number) => {
        try {
            const response = await requestWithRefresh({
                method: 'GET',
                url: `/alimento?page=${pageNumber}&limit=10`,
            });
            setAlimentos((prevAlimentos) => [...prevAlimentos, ...response.data.alimentosComCategoria]);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Erro ao buscar alimentos:', error);
        }
    };

    const loadMore = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.title}>Listar alimentos</Text>
                </View>
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
