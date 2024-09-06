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

export default function Questionario() {
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Finalizar cadastro</Text>
        </TouchableOpacity>

    </View>
  );
}

