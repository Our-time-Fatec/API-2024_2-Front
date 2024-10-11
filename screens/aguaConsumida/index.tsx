import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress'; // Usando o AnimatedCircularProgress
import { RootStackParamList } from '../../types/rootStack';
import FooterMenu from '../../components/menus';
import {styles} from "./styles";
import useUsuario from '../../hooks/useUsuario';
import { requestWithRefresh } from '../../services/api';
import { IAgua } from '../../interfaces/IUsuario';

type AguaConsumidaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AguaConsumida"
>;
type  AguaConsumidaScreenRouteProp = RouteProp<
  RootStackParamList,
  "AguaConsumida"
>;

type Props = {
  navigation: AguaConsumidaScreenNavigationProp;
  route:  AguaConsumidaScreenRouteProp;
};
const AguaConsumida: React.FC<Props> = ({ navigation }) => {
    const { usuario, loading, error, refreshUser } = useUsuario();

    // Inicializa com os valores de água ingerida e meta do usuário
    const [meta, setMeta] = useState<number>(0);
    const [porcentagem, setPorcentagem] = useState<number>(0);
    const [aguaIngerida, setAguaIngerida] = useState<number>(0);
    const [atualizacao, setAtualizacao] = useState<Date>(new Date());
    
    // Sincroniza os dados do usuário sempre que o hook `useUsuario` atualiza
    useFocusEffect(
      useCallback(() => {
        refreshUser();
      }, [refreshUser])
    );
    
    // Atualiza os estados quando as informações do `usuario` mudam
    useEffect(() => {
      if (usuario) {
        // Atualiza a água ingerida e a meta se disponíveis
        if (usuario.agua?.aguaIngerida) {
          setAguaIngerida(usuario.agua.aguaIngerida);
        }
        if (usuario.metaAgua) {
          setMeta(usuario.metaAgua);
          setPorcentagem(usuario.agua?.aguaIngerida ? usuario.agua.aguaIngerida / usuario.metaAgua : 0);
        }
      }
    }, [usuario]);
    
    const adicionarAgua = async (quantidade: number) => {
      if (!usuario?.metaAgua) return;
    
      const novaAguaIngerida = aguaIngerida + quantidade;
    
      try {
        // Atualiza o estado localmente
        setAguaIngerida(novaAguaIngerida);
        const atualizacao = new Date(); // Define a nova data de atualização
        setAtualizacao(atualizacao);
    
        // Prepara o objeto com os dados da água
        const agua:IAgua = {
          aguaIngerida: novaAguaIngerida, // Envia o valor de água ingerida no formato correto
        };
    
        // Faz a requisição PUT para atualizar o backend
        await requestWithRefresh({
          method: "PUT",
          url: "/usuario/agua",
          data: agua, // Envia o valor atualizado de água ingerida
        });
    
        // Atualiza a porcentagem localmente
        setPorcentagem(novaAguaIngerida / meta);
        console.log(porcentagem)
    
        console.log('Atualização no backend realizada com sucesso:', agua);
        Alert.alert(`Você acabou de ingerir ${quantidade}ml de água!`);
      } catch (error) {
        console.error('Erro ao atualizar o backend:', error);
      }
    };
    
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
    }
    
    if (error) {
      return <Text style={styles.errorText}>{error}</Text>;
    }
    
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.progressContainer}>
          <AnimatedCircularProgress
            size={200}
            width={10}
            fill={porcentagem*100} // O valor é passado em porcentagem (0 a 100)
            tintColor="#3b82f6" // Cor do progresso
            backgroundColor="#e0e0e0" // Cor de fundo
            lineCap="round"
          >
            {
              () => (
                <View style={styles.percentageContainer}>
                  <Text style={styles.percentageText}>{Math.round(porcentagem*100)}%</Text>
                  <Text style={styles.subtitle}>de água ingerida</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
        </View>

        {/* Botões para adicionar água */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(0.25)}>
            <Image source={{ uri: 'https://example.com/250ml.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 250ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(0.5)}>
            <Image source={{ uri: 'https://example.com/500ml.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 500ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(0.75)}>
            <Image source={{ uri: 'https://example.com/750ml.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 750ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(1)}>
            <Image source={{ uri: 'https://example.com/1L.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 1L</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
       <FooterMenu navigation={navigation} /> 
    </View>
  );
};


export default AguaConsumida;
