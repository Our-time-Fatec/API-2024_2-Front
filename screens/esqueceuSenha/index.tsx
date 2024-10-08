import React, { useState } from "react";
import { View,Text,TextInput, TouchableOpacity, ScrollView,Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import sendPasswordResetEmail from "../../hooks/email";

type EsqueceuSenhaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EsqueceuSenha"
>;
type EsqueceuSenhaScreenRouteProp = RouteProp<RootStackParamList, "EsqueceuSenha">;

type Props = {
  navigation: EsqueceuSenhaScreenNavigationProp;
  route: EsqueceuSenhaScreenRouteProp;
};

const EsqueceuSenha: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }

    setLoading(true);
    
    const verificationLink = "http://example.com/reset-password"; // Replace with actual reset link logic
    const success = await sendPasswordResetEmail(email, verificationLink);

    setLoading(false);
    
    if (success) {
      Alert.alert("Sucesso", "Email de redefinição de senha enviado com sucesso!");
      navigation.navigate("Login"); // Ensure "Login" is a valid route in your navigation stack
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

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu email cadastrado"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>
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
