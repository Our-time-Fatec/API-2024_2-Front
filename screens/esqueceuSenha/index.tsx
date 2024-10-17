import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import sendPasswordResetEmail from "../../hooks/email";
import checkEmailExists from "../../hooks/checkEmail"; // Importando a função de verificação

type EsqueceuSenhaScreenNavigationProp = StackNavigationProp<RootStackParamList, "EsqueceuSenha">;
type EsqueceuSenhaScreenRouteProp = RouteProp<RootStackParamList, "EsqueceuSenha">;

type Props = {
  navigation: EsqueceuSenhaScreenNavigationProp;
  route: EsqueceuSenhaScreenRouteProp;
};

const EsqueceuSenha: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendEmail = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, insira um email.");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError(true); // Define erro de e-mail como verdadeiro
      return;
    } else {
      setEmailError(false); // Reseta o erro se o e-mail for válido
    }

    setLoading(true);

    const emailExists = await checkEmailExists(email);
    if (!emailExists) {
      Alert.alert("Erro", "Este e-mail não está cadastrado.");
      setEmailError(true);
      setLoading(false);
      return;
    }

    const success = await sendPasswordResetEmail(email);

    setLoading(false);

    if (success) {
      Alert.alert("Sucesso", "Email de redefinição de senha enviado com sucesso!");
      navigation.navigate("Login"); // Verifique se "Login" é uma rota válida
    } else {
      Alert.alert("Erro", "Ocorreu um erro ao enviar o email. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={styles.containerUp}>
          <Text style={styles.title}>Esqueceu a senha</Text>
        </View>

        <View style={emailError ? styles.inputError : styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="gray" />
          <TextInput
            style={[styles.input]}
            placeholder="Entre com seu email cadastrado"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>
        {emailError && <Text style={styles.errorMessage}>E-mail inválido</Text>}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>
          {loading ? "Carregando..." : "Enviar Email"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EsqueceuSenha;
