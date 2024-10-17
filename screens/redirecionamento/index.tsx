import React, { useEffect, useState } from "react";
import { View,Text,TextInput, TouchableOpacity, ScrollView,Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { updateRequest } from "../../interfaces/IPassChange";
import useUpdatePass from "../../hooks/useUpdateRegister";

type RedirecionamentoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Redirecionamento"
>;
type RedirecionamentoScreenRouteProp = RouteProp<RootStackParamList, "Redirecionamento">;

type Props = {
  navigation: RedirecionamentoScreenNavigationProp;
  route: RedirecionamentoScreenRouteProp;
};

const Redirecionamento: React.FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Enviamos um e-mail para recuperação de senha, consulte a caixa de entrada e o Spam</Text>
    </View>
  );
};

export default Redirecionamento;