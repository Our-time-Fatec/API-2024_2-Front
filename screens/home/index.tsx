import React, { useEffect, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { BotaoAzul, BotaoBranco } from '../../components/buttons';
import styles from './styles';
import colors from '../../components/colors/colors';
import logo from "../../assets/logo.png";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/rootStack";

SplashScreen.preventAutoHideAsync();

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <View style={styles.containercima}>
        <View style={styles.containerlogo}>
          <Image style={styles.logo} source={logo} />
        </View>
        <Text style={styles.title}>Da Vinci Care</Text>
        <Text style={styles.subtitle}>Seu agente pessoal de saúde.</Text>
      </View>
      <View>
        <Text style={styles.welcome}>Bem-Vindo!</Text>
        <View style={styles.containerButton}>
          <BotaoAzul texto='Entrar' onPress={() => navigation.navigate("Login")} />
          <BotaoBranco texto='Cadastre-se' onPress={() => navigation.navigate("Cadastro")}/>
        </View>
      </View>
    </View>
  );
};

export default Home;
