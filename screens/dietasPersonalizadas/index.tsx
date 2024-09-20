import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/rootStack";
import styles from './styles';
import colors from '../../components/colors/colors';

type DietasPersonalizadasNavigationProps = StackNavigationProp<RootStackParamList, "DietasPersonalizadas">;
type DietasPersonalizadasRouteProps = RouteProp<RootStackParamList, "DietasPersonalizadas">;

type Props = {
  navigation: DietasPersonalizadasNavigationProps;
  route: DietasPersonalizadasRouteProps;
};

const DietasPersonalizadas: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.background}]}>

      <Text style={styles.header}>Dietas Personalizadas.</Text>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Café da Manhã</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Almoço</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Café da Tarde</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Jantar</Text>
        </View>
      </View>

      {/* Adicionando a imagem ilustrativa */}
      <Image source={{ uri: 'https://via.placeholder.com/250' }} style={styles.largeImage} />
    </ScrollView>
  );
};

export default DietasPersonalizadas;
