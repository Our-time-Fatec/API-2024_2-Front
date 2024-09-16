import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FooterMenu from '../../components/menus';

type SelecaoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Selecao">;
type SelecaoScreenRouteProp = RouteProp<RootStackParamList, "Selecao">;

type Props = {
  navigation: SelecaoScreenNavigationProp;
  route: SelecaoScreenRouteProp;
};

const Selecao: React.FC<Props> = ({ navigation, route }) => {
  const [nomeUsuario, setNomeUsuario] = useState<string>('User');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const usuario = await AsyncStorage.getItem('usuario');
        if (usuario) {
          const usuarioObj = JSON.parse(usuario);
          console.log(usuarioObj)
          const nome = `${usuarioObj.nome}`
          setNomeUsuario(nome || 'User');
        }
      } catch (error) {
        console.error('Erro ao buscar usuário no AsyncStorage:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Ionicons name="person-circle-outline" size={50} color="white" />
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Bem vindo!</Text>
              <Text style={styles.usernameText}>{nomeUsuario}</Text>
              <Text style={styles.questionText}>Como você está?</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#ccc" />
          <TextInput style={styles.searchInput} placeholder="Procurar dietas..." />
        </View> */}

        <View style={styles.content}>
          <Text style={styles.selectText}>Ingestão diaria de calorias</Text>

          <TouchableOpacity style={styles.optionContainer}>
            <Image />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>1233 Kcal</Text>
              <Text style={styles.optionSubtitle}>2g Proteinas</Text>
              <Text style={styles.optionSubtitle}>2g Carboidratos</Text>
              <Text style={styles.optionSubtitle}>2g Lipidios</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.selectText}>Ingestão diaria de água</Text>
          <TouchableOpacity style={styles.optionContainer}>
            <Image />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>2.3 L</Text>
              <Text style={styles.optionSubtitle}>Restam: 2.4L</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FooterMenu navigation={navigation} />
    </View>
  );
}

export default Selecao;
