import { View, Text, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import FooterMenu from '../../components/menus';
import useUsuario from '../../hooks/useUsuario';
import styles from './styles';

type SelecaoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Selecao">;
type SelecaoScreenRouteProp = RouteProp<RootStackParamList, "Selecao">;

type Props = {
  navigation: SelecaoScreenNavigationProp;
  route: SelecaoScreenRouteProp;
};

const Selecao: React.FC<Props> = ({ navigation }) => {
  const { usuario, refreshUser } = useUsuario();
  const margem = 100;

  const verificarCalorias = () => {
    const consumo = usuario?.totaisAlimentosConsumidos?.valorEnergetico || 0;
    const meta = usuario?.consumoDeCaloriaPorDia || 0;

    if (consumo > meta + margem) {
      return { texto: 'Ultrapassou a meta', cor: 'red' };
    } else if (consumo < meta - margem) {
      return { texto: 'Ainda não atingiu a meta', cor: 'orange' };
    } else {
      return { texto: 'Você está dentro da meta', cor: 'green' };
    }
  };

  const resultado = verificarCalorias();

  useFocusEffect(
    useCallback(() => {
      refreshUser();
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Ionicons name="person-circle-outline" size={50} color="white" />
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Bem vindo!</Text>
              <Text style={styles.usernameText}>{usuario?.nome}</Text>
              <Text style={styles.questionText}>Como você está?</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.selectText}>Ingestão diária de calorias</Text>

          <TouchableOpacity style={styles.optionContainer} disabled>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Meta/dia: {usuario?.consumoDeCaloriaPorDia?.toFixed(2)} Kcal</Text>
              <Text style={[styles.optionSubtitle, { color: resultado.cor }]}> {resultado.texto} </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionContainer} disabled>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Consumido: {usuario?.totaisAlimentosConsumidos?.valorEnergetico.toFixed(2)} Kcal</Text>
              <Text style={styles.optionSubtitle}>{usuario?.totaisAlimentosConsumidos?.proteinas.toFixed(2)}g Proteínas</Text>
              <Text style={styles.optionSubtitle}>{usuario?.totaisAlimentosConsumidos?.carboidratos.toFixed(2)}g Carboidratos</Text>
              <Text style={styles.optionSubtitle}>{usuario?.totaisAlimentosConsumidos?.fibras.toFixed(2)}g Fibras</Text>
              <Text style={styles.optionSubtitle}>{usuario?.totaisAlimentosConsumidos?.lipidios.toFixed(2)}g Lipídios</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <FooterMenu navigation={navigation} />
    </View>
  );
}

export default Selecao;
