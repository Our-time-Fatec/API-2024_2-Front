import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles';

interface BotaoAzulProps {
  texto: string;
  onPress: () => void;
}

const BotaoAzul: React.FC<BotaoAzulProps> = ({ texto, onPress }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });


  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null; // Retorna null enquanto as fontes não estão carregadas
  }

  SplashScreen.hideAsync();

  return (
    <View>
      <TouchableOpacity style={styles.botaoazul} onPress={onPress}>
        <Text style={styles.textobotaoazul}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
};
interface BotaoBrancoProps{
    texto: string;
    onPress: () => void;
}

const BotaoBranco: React.FC<BotaoBrancoProps> = ({texto,onPress}) => {
    return(
        <View>
            <TouchableOpacity style={styles.botaobranco} onPress={onPress}>
                <Text style={styles.textobotaobranco}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
};

export { BotaoAzul, BotaoBranco };