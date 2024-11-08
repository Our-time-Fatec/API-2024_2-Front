import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import AlimentoItem from '../../components/alimento';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useIsFocused } from '@react-navigation/native';
import { RootStackParamList } from '../../types/rootStack';
import FooterMenu from '../../components/menus';
import { requestWithRefresh } from '../../services/api';
import { IAlimento } from '../../interfaces/IAlimento';
import { styles } from './styles';
import useGrafico from '../../hooks/useGrafico'; // Importe o hook
import useUsuario from '../../hooks/useUsuario';

type UserAlimentosConsumidosScreenNavigationProp = StackNavigationProp<RootStackParamList, "UserAlimentosConsumidos">;
type UserAlimentosConsumidosScreenRouteProp = RouteProp<RootStackParamList, "UserAlimentosConsumidos">;

type Props = {
    navigation: UserAlimentosConsumidosScreenNavigationProp;
    route: UserAlimentosConsumidosScreenRouteProp;
};

const UserAlimentosConsumidosScreen: React.FC<Props> = ({ navigation }) => {
    const [alimentosConsumidos, setAlimentosConsumidos] = useState<IAlimento[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(false); // Estado para controlar a atualização
    const limit = 10;

    const isFocused = useIsFocused();
    
    const { dietaSemanal, loading, error, refreshGrafico } = useGrafico(); // Use o hook
    const {usuario, refreshUser} = useUsuario()

    useEffect(() => {
        if (isFocused) {
            fetchAlimentos(1);
        }
    }, [isFocused]);

    const fetchAlimentos = async (pageNumber: number) => {
        setIsLoading(true);
        try {
            const response = await requestWithRefresh({
                method: 'GET',
                url: `/alimentoConsumido/me?page=${pageNumber}&limit=${limit}`,
            });

            const fetchedAlimentos = response.data.alimentosComCategoria;
            const totalPages = response.data.totalPages

            setAlimentosConsumidos(prevAlimentos =>
                pageNumber === 1 ? fetchedAlimentos : [...prevAlimentos, ...fetchedAlimentos]
            );
            setTotalPages(totalPages);
            setPage(pageNumber);
        } catch (error) {
            alert('Erro ao buscar alimentos consumidos.');
        } finally {
            setIsLoading(false);
        }
    };

    const loadMore = () => {
        if (page < totalPages && !isLoading) {
            fetchAlimentos(page + 1);
        }
    };

    const handleRemoverAlimentoConsumido = async (id: string) => {
        try {
            await requestWithRefresh({
                method: 'DELETE',
                url: `/alimentoConsumido/${id}`,
            });
            alert('Alimento removido com sucesso!');
            fetchAlimentos(1);
            refreshGrafico(true)
            refreshUser(true)
        } catch (error) {
            alert('Erro ao remover alimento.');
        }
    };

    return (
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#f0f4f8" />

            <View style={styles.container}>
                <Text style={styles.title}>Meus Alimentos consumidos</Text>
                <FlatList
                    data={alimentosConsumidos}
                    keyExtractor={(item, index) => item._id ? item._id : `key-${index}`}
                    renderItem={({ item }) => (
                        <AlimentoItem
                            alimento={item}
                            isUserAlimento={false}
                            isAlimentoConsumido={true}
                            onEdit={() => console.log('nao edita')}
                            onDelete={handleRemoverAlimentoConsumido}
                        />
                    )}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={() =>
                        isLoading ? (
                            <Text style={styles.loadingText}>Carregando...</Text>
                        ) : (
                            page < totalPages && (
                                <TouchableOpacity style={styles.loadMoreButton} onPress={loadMore}>
                                    <Text style={styles.loadMoreText}>Carregar mais</Text>
                                </TouchableOpacity>
                            )
                        )
                    }
                />
            </View>
            <FooterMenu navigation={navigation} />
        </View>
    );
};

export default UserAlimentosConsumidosScreen;