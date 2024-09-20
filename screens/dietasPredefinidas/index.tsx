import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/rootStack";
import styles from './styles';
import colors from '../../components/colors/colors';

type DietasPredefinidasNavigationProps = StackNavigationProp<RootStackParamList, "DietasPredefinidas">;
type DietasPredefinidasRouteProps = RouteProp<RootStackParamList, "DietasPredefinidas">;

type Props = {
  navigation: DietasPredefinidasNavigationProps;
  route: DietasPredefinidasRouteProps;
};

const DietasPredefinidas: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>

      <Text style={styles.header}>Dietas Predefinidas.</Text>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Emagrecimento</Text>
          <Text style={styles.subtitle}>Dr. Aliceu</Text>
          <Text style={styles.description}>Dieta para pessoas com o objetivo de emagrecer.</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ganho de massa muscular</Text>
          <Text style={styles.subtitle}>Dr. Murilo</Text>
          <Text style={styles.description}>Dieta rica em proteínas e fibras.</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Low Carb</Text>
          <Text style={styles.subtitle}>Dr. Diogo</Text>
          <Text style={styles.description}>Dieta rica em proteínas com pouco carboidrato.</Text>
        </View>
      </View>

      {/* Adicionando a imagem ilustrativa */}
      <Image source={{ uri: 'https://via.placeholder.com/250' }} style={styles.largeImage} />
    </ScrollView>
  );
};

export default DietasPredefinidas;
