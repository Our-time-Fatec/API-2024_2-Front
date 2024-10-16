import React, { useEffect, useState } from "react";
import { View,Text,TextInput, TouchableOpacity, ScrollView,Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { updateRequest } from "../../interfaces/IPassChange";
import useUpdatePass from "../../hooks/useUpdateRegister";

type RecuperarSenhaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RecuperarSenha"
>;
type RecuperarSenhaScreenRouteProp = RouteProp<RootStackParamList, "RecuperarSenha">;

type Props = {
  navigation: RecuperarSenhaScreenNavigationProp;
  route: RecuperarSenhaScreenRouteProp;
};

const RecuperarSenha: React.FC<Props> = ({ navigation, route }) => {
  const { email } = route.params;
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const { updatePass, loading } = useUpdatePass();

  useEffect(() => {
    const validateEmail = async () => {
      const response = await fetch(`http://localhost:3010/validate-email?email=${email}`);
      const data = await response.json();

      if (!data.valid) {
        Alert.alert("Erro", "O email não é válido ou não está registrado.");
        navigation.navigate("Login");
      }
    };

    validateEmail();
  }, [email, navigation]);

  const handleUpdatePassword = async () => {
    if (!senha || !confirmarSenha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }

    const updateRequest = { email, senha };
    const result = await updatePass(updateRequest);

    if (result.success) {
      Alert.alert("Sucesso", "Senha alterada com sucesso!");
      navigation.navigate("Login");
    } else {
      Alert.alert("Erro", result.error);
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
          <Text style={styles.title}>Altere sua senha</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua nova senha"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleUpdatePassword}>
        <Text style={styles.buttonText}>
          {loading ? "Carregando..." : "Alterar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecuperarSenha;