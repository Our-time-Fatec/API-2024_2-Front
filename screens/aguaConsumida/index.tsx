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

    const [meta, setMeta] = useState<number>(0);
    const [porcentagem, setPorcentagem] = useState<number>(() => {
      if (usuario && usuario.metaAgua) {
        if (usuario.agua?.aguaIngerida === 0) {
          return 0; 
        }
        return usuario.agua?.aguaIngerida ? usuario.agua.aguaIngerida / usuario.metaAgua : 0;
      }
      return 0; 
    });
    const [aguaIngerida, setAguaIngerida] = useState<number>(0);
    const [atualizacao, setAtualizacao] = useState<Date>(new Date());
    
    // Sincroniza os dados do usuário sempre que o hook `useUsuario` atualiza
    useFocusEffect(
      useCallback(() => {
        refreshUser();
      }, [refreshUser])
    );
    
    useEffect(() => {
      if (usuario) {
        const novaAguaIngerida = usuario.agua?.aguaIngerida ?? 0;
        const novaMeta = usuario.metaAgua ?? 0;
    
        setAguaIngerida(novaAguaIngerida);
        setMeta(novaMeta);
    
        const novaPorcentagem = novaMeta ? (novaAguaIngerida / novaMeta) * 100 : 0;
        setPorcentagem(novaPorcentagem > 100 ? 100 : novaPorcentagem);
      }
    }, [usuario]);

    const adicionarAgua = (quantidade: number) => {
      if (!usuario?.metaAgua) return;
    
      Alert.alert(
        "Adicionar Água",
        `Deseja adicionar ${quantidade}ml de água?`,
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Adicionar",
            onPress: async () => {
              const novaAguaIngerida = aguaIngerida + quantidade;
    
              try {
                setAguaIngerida(novaAguaIngerida);
                const atualizacao = new Date();
                setAtualizacao(atualizacao);
    
                const agua: IAgua = {
                  aguaIngerida: novaAguaIngerida,
                };
    
                await requestWithRefresh({
                  method: "PUT",
                  url: "/usuario/agua",
                  data: agua,
                });
    
                const novaPorcentagem = meta ? (novaAguaIngerida / meta) * 100 : 0;
                setPorcentagem(novaPorcentagem > 100 ? 100 : novaPorcentagem);
    
                Alert.alert(`Você acabou de ingerir ${quantidade}ml de água!`);
              } catch (error) {
                console.error('Erro ao inserir quantia de água:', error);
              }
            },
          },
        ]
      );
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
            fill={porcentagem} 
            tintColor="#3b82f6" 
            backgroundColor="#e0e0e0" 
            lineCap="round"
          >
            {
              () => (
                <View style={styles.percentageContainer}>
                  <Text style={styles.percentageText}>{Math.round(porcentagem)}%</Text>
                  <Text style={styles.subtitle}>de água ingerida</Text>
                </View>
              )
            }
          </AnimatedCircularProgress>
        </View>

        {/* Botões para adicionar água */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(250)}>
            <Image source={{ uri: 'https://example.com/250ml.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 250ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(500)}>
            <Image source={{ uri: 'https://example.com/500ml.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 500ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(750)}>
            <Image source={{ uri: 'https://example.com/750ml.png' }} style={styles.image} />
            <Text style={styles.buttonText}>Adicionar 750ml</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => adicionarAgua(1000)}>
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
