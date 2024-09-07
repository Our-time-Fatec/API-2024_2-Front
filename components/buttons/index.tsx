import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles';

interface BotaoAzulProps {
  texto: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; 
  textStyle?: StyleProp<TextStyle>;
}

const BotaoAzul: React.FC<BotaoAzulProps> = ({ texto, onPress, style, textStyle }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null; 
  }

  SplashScreen.hideAsync();

  return (
    <View style={style}>
      <TouchableOpacity style={styles.botaoazul} onPress={onPress}>
        <Text style={[styles.textobotaoazul, textStyle]}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
};

interface BotaoBrancoProps {
  texto: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>; 
  textStyle?: StyleProp<TextStyle>; 
}

const BotaoBranco: React.FC<BotaoBrancoProps> = ({ texto, onPress, style, textStyle }) => {
  return (
    <View style={style}>
      <TouchableOpacity style={styles.botaobranco} onPress={onPress}>
        <Text style={[styles.textobotaobranco, textStyle]}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { BotaoAzul, BotaoBranco };