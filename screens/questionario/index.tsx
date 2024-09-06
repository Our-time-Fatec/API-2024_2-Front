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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 12,
    justifyContent: "flex-start",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
  editPhoto: {
    textAlign: "center",
    color: "#00f",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 13,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  iconButton: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 18,
    paddingHorizontal: "23%",
    borderRadius: 20,
    marginBottom: 10,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  }
});
