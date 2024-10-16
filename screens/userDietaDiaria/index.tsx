import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import useDietas from '../../hooks/useDietaDiaria'; // O hook que você está utilizando para buscar os dados
import { IAlimento } from '../../interfaces/IAlimento';
import { Ionicons } from '@expo/vector-icons';
import { IAlimentoDieta, IContagem, IGrupo, IGrupoConsumo, IGrupoConsumoHook } from '../../interfaces/IDieta';
import FooterMenu from '../../components/menus'; // Certifique-se de que o caminho está correto
import { styles } from './styles';
import { requestWithRefresh } from '../../services/api';

const UserDietaDiaria: React.FC = () => {
  const navigation = useNavigation(); // Obter a navegação
  const { dietasDiarias, dietasDiariasHook, refreshDietasDiarias } = useDietas();
  const [alimentosConsumidos, setAlimentosConsumidos] = useState<IAlimentoDieta[]>([]);
  const [alimentos, setAlimentos] = useState<IContagem[]>([]);

  useEffect(() => {
    if (dietasDiariasHook.length > 0) {
      const grupos = dietasDiariasHook[0]?.gruposConsumo;
      if (grupos) {
        const alimentos = grupos.flatMap((grupo) => grupo.alimentos ?? []);
        setAlimentos(alimentos);
      }
    }
  }, [dietasDiarias]);

  interface AlimentoProps {
    _id: string,
    porcao: number,
    quantidade?: number,
    nomeGrupo: string
  }

  const aumentarQuantidade = async (alimentoId: string, porcao: number, nomeGrupo: string, quantidade?: number) => {
    console.log(alimentoId)

    let alimento: AlimentoProps = {
      _id: alimentoId,
      porcao,
      quantidade: quantidade ? quantidade : 1,
      nomeGrupo: nomeGrupo
    }

    try {
      await requestWithRefresh({
        method: "POST",
        url: "/alimentoConsumido",
        data: alimento,
      });
    } catch (error: any) {
      // Verifica se a resposta contém uma mensagem de erro
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        // Exibe qualquer mensagem de erro recebida do backend
        Alert.alert("Erro", errorMessage);
        return error
      } else {
        // Exibe uma mensagem genérica caso o erro não tenha uma mensagem específica
        Alert.alert("Erro", "Ocorreu um erro ao criar a dieta.");
      }
      // Log do erro para debug
      console.error("Erro ao criar a dieta:", error);
      return error
    }
    finally{
      refreshDietasDiarias()
    }
  };

  const diminuirQuantidade = async (alimentoId: string, porcao: number, nomeGrupo?: string) => {
    console.log(alimentoId)

    let alimento: AlimentoProps = {
      _id: alimentoId,
      porcao,
      nomeGrupo: nomeGrupo ? nomeGrupo : "Almoço"
    }

    try {
      await requestWithRefresh({
        method: "PUT",
        url: "/alimentoConsumido/delete",
        data: alimento,
      });
    } catch (error: any) {
      // Verifica se a resposta contém uma mensagem de erro
      if (error.response && error.response.data && error.response.data.message) {
        const errorMessage = error.response.data.message;
        // Exibe qualquer mensagem de erro recebida do backend
        Alert.alert("Erro", errorMessage);
        return error
      } else {
        // Exibe uma mensagem genérica caso o erro não tenha uma mensagem específica
        Alert.alert("Erro", "Ocorreu um erro ao criar a dieta.");
      }
      // Log do erro para debug
      console.error("Erro ao criar a dieta:", error);
      return error
    }
    finally{
      refreshDietasDiarias()
    }
  };

  const renderAlimento = ({ item, grupoNome }: { item: IContagem, grupoNome: string }) => (
    <View style={styles.itemContainer}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => diminuirQuantidade(item.alimento._id, item.alimento.porcao, grupoNome)} style={styles.circleButton}>
          <Ionicons name="remove-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.counterText}>{`${item.consumido || 0}/${item.paraConsumir || 1}`}</Text>
        <TouchableOpacity onPress={() => aumentarQuantidade(item.alimento._id, item.alimento.porcao, grupoNome, item.alimento.quantidade)} style={styles.circleButton}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.itemText}>{`${item.alimento.nome} ${item.alimento.porcao || 0}g`}</Text>
    </View>
);

  const renderGrupo = ({ item }: { item: IGrupoConsumoHook }) => (
    <View style={styles.grupoContainer}>
      <Text style={styles.grupoTitle}>{item.nome}</Text>
      <FlatList
        data={item.alimentos}
        renderItem={({ item: alimentoItem }) => renderAlimento({ item: alimentoItem, grupoNome: item.nome })}
        keyExtractor={(alimento) => alimento.alimento._id}
      />
    </View>
);
  return (
    <View style={{flex: 1}}>
    <View style={styles.container}>
      <FlatList
        data={dietasDiariasHook[0]?.gruposConsumo || []}
        renderItem={renderGrupo}
        keyExtractor={(grupo) => grupo._id || 'default-key'}
      />
     
    </View>
    <FooterMenu navigation={navigation} />
    </View>
  );
};

export default UserDietaDiaria;
