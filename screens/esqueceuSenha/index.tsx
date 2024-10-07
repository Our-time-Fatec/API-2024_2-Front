import React, { useState } from "react";
import { View,Text,TextInput, TouchableOpacity, ScrollView,Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { IUsuario } from "../../interfaces/IUsuario";
import useRegister from "../../hooks/useRegister";

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
  const { register, loading } = useRegister();
  const [formState, setFormState] = useState<IUsuario>({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataDeNascimento: new Date(),
    altura: 0,
    peso: 0,
    objetivo: "Dieta de emagrecimento",
    nivelDeSedentarismo: "Sedentário",
    sexo: "Masculino",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (name: keyof IUsuario, value: any) => {
    if (name === "altura" || name === "peso") {
      const numericValue = value.trim() === "" ? 0 : parseFloat(value);
      setFormState((prevState) => ({ ...prevState, [name]: isNaN(numericValue) ? 0 : numericValue }));
    } else {
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleDateConfirm = (date: Date) => {
    handleInputChange("dataDeNascimento", date);
    setShowDatePicker(false);
  };

  const handleRegister = async () => {

    if (formState.senha !== formState.confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem. Verifique e tente novamente.");
      return;
    }

    const result = await register(formState);
    if (result.success) {
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate('Selecao');
    }
    else {
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
          <Text style={styles.title}>Esqueceu a senha</Text>

          {/* <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.profileImage}
          />

          <TouchableOpacity>
            <Text style={styles.editPhoto}>Editar foto</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu email cadastrado"
            keyboardType="email-address"
            value={formState.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>
          {loading ? "Carregando..." : "Cadastrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EsqueceuSenha;
