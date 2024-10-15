import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import useDietas from '../../hooks/useDietaDiaria'; // O hook que você está utilizando para buscar os dados
import { IAlimento } from '../../interfaces/IAlimento';
import { Ionicons } from '@expo/vector-icons';
import { IAlimentoDieta, IGrupo } from '../../interfaces/IDieta';
import FooterMenu from '../../components/menus'; // Certifique-se de que o caminho está correto

const UserDietaDiaria: React.FC = () => {
  const navigation = useNavigation(); // Obter a navegação
  const { dietasDiarias } = useDietas();
  const [alimentosConsumidos, setAlimentosConsumidos] = useState<IAlimentoDieta[]>([]);

  useEffect(() => {
    if (dietasDiarias.length > 0) {
      const grupos = dietasDiarias[0]?.grupos;
      if (grupos) {
        const alimentos = grupos.flatMap((grupo) => grupo.alimentos ?? []);
        setAlimentosConsumidos(alimentos);
      }
    }
  }, [dietasDiarias]);

  const aumentarQuantidade = (alimentoId: string) => {
    setAlimentosConsumidos((prevAlimentos) =>
      prevAlimentos.map((alimento) =>
        alimento.alimentoId === alimentoId
          ? { ...alimento, quantidade: alimento.quantidade ? alimento.quantidade + 1 : 1 }
          : alimento
      )
    );
  };

  const diminuirQuantidade = (alimentoId: string) => {
    setAlimentosConsumidos((prevAlimentos) =>
      prevAlimentos.map((alimento) =>
        alimento.alimentoId === alimentoId && (alimento.quantidade || 0) > 0
          ? { ...alimento, quantidade: (alimento.quantidade || 0) - 1 } // Garante que quantidade nunca será undefined
          : alimento
      )
    );
  };

  const renderAlimento = ({ item }: { item: IAlimentoDieta }) => (
    <View style={styles.itemContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => diminuirQuantidade(item.alimentoId)} style={styles.circleButton}>
          <Ionicons name="remove-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.counterText}>{`${item.quantidade || 0}/${item.porcao || 1}`}</Text>
        <TouchableOpacity onPress={() => aumentarQuantidade(item.alimentoId)} style={styles.circleButton}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.itemText}>{`${item.nome} ${item.porcao || 0}g`}</Text>
    </View>
  );

  const renderGrupo = ({ item }: { item: IGrupo }) => (
    <View style={styles.grupoContainer}>
      <Text style={styles.grupoTitle}>{item.nome}</Text>
      <FlatList
        data={item.alimentos}
        renderItem={renderAlimento}
        keyExtractor={(alimento) => alimento.alimentoId}
      />
    </View>
  );

  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <FlatList
        data={dietasDiarias[0]?.grupos || []}
        renderItem={renderGrupo}
        keyExtractor={(grupo) => grupo._id || 'default-key'}
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
  grupoContainer: {
    marginBottom: 16,
  },
  grupoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 15,
    flex: 1,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  counterText: {
    fontSize: 16,
    color: '#333',
  },
});

export default UserDietaDiaria;
