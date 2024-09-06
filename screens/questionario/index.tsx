import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type QuestionarioScreenNavigationProp = StackNavigationProp<RootStackParamList, "Questionario">;
type QuestionarioScreenRouteProp = RouteProp<RootStackParamList, "Questionario">;

type Props = {
    navigation: QuestionarioScreenNavigationProp;
    route: QuestionarioScreenRouteProp;
  };

const Questionario: React.FC<Props> = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Informações básicas</Text>

      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Substitua pela URL da imagem do usuário
        style={styles.profileImage}
      />

      <TouchableOpacity>
        <Text style={styles.editPhoto}>Editar foto</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="black" />
        <TextInput placeholder="Seu nome" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="calendar-outline" size={24} color="black" />
        <TextInput
          placeholder="Sua idade"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="barbell-outline" size={24} color="black" />
        <TextInput
          placeholder="Sua altura"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="fitness-outline" size={24} color="black" />
        <TextInput
          placeholder="Seu peso"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="flag-outline" size={24} color="black" />
        <TextInput placeholder="Seu objetivo" style={styles.input} />
      </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Finalizar cadastro</Text>
        </TouchableOpacity>

    </View>
  );
}

export default Questionario;