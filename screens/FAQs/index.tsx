import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import FooterMenu from '../../components/menus';

type FAQsScreenNavigationProp = StackNavigationProp<RootStackParamList, "FAQs">;
type FAQsScreenRouteProp = RouteProp<RootStackParamList, "FAQs">;

type Props = {
  navigation: FAQsScreenNavigationProp;
  route: FAQsScreenRouteProp;
};

const FAQs: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.selectText}>Como calculamos nossas informações</Text>
          <Text style={styles.infoText}>
            Para homens:
            {'\n'}TMB = 88,36 + (13,4 × peso em kg) + (4,8 × altura em cm) - (5,7 × idade em anos)
            {'\n'}Para mulheres:
            {'\n'}TMB = 447,6 + (9,2 × peso em kg) + (3,1 × altura em cm) - (4,3 × idade em anos)
            {'\n'}Ajuste pelo Nível de Atividade
            {'\n'}Depois de calcular a TMB, ajustamos o valor pelo nível de atividade física para obter o gasto energético total diário:
            {'\n'}• Sedentário (pouco ou nenhum exercício): TMB × 1,2
            {'\n'}• Levemente ativo (exercício leve 1-3 dias/semana): TMB × 1,375
            {'\n'}• Moderadamente ativo (exercício moderado 3-5 dias/semana): TMB × 1,55
            {'\n'}• Altamente ativo (exercício intenso 6-7 dias/semana): TMB × 1,725
            {'\n'}• Extremamente ativo (exercício físico intenso e trabalho físico): TMB × 1,9
            {'\n'}
            {'\n'}Dietas
            {'\n'}• Dieta de Emagrecimento: Geralmente reduzimos as calorias totais diárias em 15-25% para criar um déficit calórico.
            {'\n'}• Dieta de Ganho de Massa Muscular: Aumentamos as calorias totais em 10-20% para fornecer energia extra para o crescimento muscular.
            {'\n'}• Dieta Low Carb: Mantém o foco em reduzir a ingestão de carboidratos, normalmente limitando a 20-50% das calorias diárias, dependendo da meta (perda de peso, manutenção ou ganho muscular).
            {'\n'}
            {'\n'}1. Dieta de Emagrecimento
            {'\n'}Para uma dieta focada em emagrecimento, é importante manter um déficit calórico, com uma boa quantidade de proteínas para preservar a massa muscular.
            {'\n'}• Proteínas: 25-30% das calorias totais
            {'\n'}• Carboidratos: 40-50% das calorias totais
            {'\n'}• Gorduras: 20-30% das calorias totais
            {'\n'}
            {'\n'}2. Dieta de Ganho de Massa Muscular
            {'\n'}Para ganho de massa muscular, o foco é consumir um pouco mais de calorias e proteínas para suportar o crescimento muscular.
            {'\n'}• Proteínas: 25-30% das calorias totais
            {'\n'}• Carboidratos: 45-55% das calorias totais (essenciais para energia durante os treinos)
            {'\n'}• Gorduras: 20-25% das calorias totais
            {'\n'}
            {'\n'}3. Dieta Low Carb
            {'\n'}A dieta low carb foca em reduzir significativamente os carboidratos, aumentando a ingestão de proteínas e/ou gorduras, dependendo do objetivo.
            {'\n'}• Proteínas: 20-30% das calorias totais
            {'\n'}• Carboidratos: 10-20% das calorias totais (ou até menos, em casos de cetogênica)
            {'\n'}• Gorduras: 50-60% das calorias totais
          </Text>

          <Text style={styles.selectText}>Nossa base de dados de alimentos</Text>
          <Text style={styles.infoText}>
            Alimentos extraídos da tabela TACO brasileira e alimentos cadastrados pelos usuários.
          </Text>

          <Text style={styles.selectText}>Suporte</Text>
          <Text style={styles.infoText}>
            Email: davincicode.fatec@gmail.com
          </Text>
        </ScrollView>
      </View>
      <FooterMenu navigation={navigation} />
    </View>
  );
}

export default FAQs;
