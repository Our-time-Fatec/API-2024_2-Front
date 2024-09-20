import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { IUsuario } from "../../interfaces/IUsuario";
import useRegister from "../../hooks/useRegister";

type CadastroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Cadastro"
>;
type CadastroScreenRouteProp = RouteProp<RootStackParamList, "Cadastro">;

type Props = {
  navigation: CadastroScreenNavigationProp;
  route: CadastroScreenRouteProp;
};

const Cadastro: React.FC<Props> = ({ navigation }) => {
  const { register, loading } = useRegister();
  const [dataNascimento, setDataNascimento] = useState<string>("");
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

  const handleInputChange = (name: keyof IUsuario, value: any) => {
    if (name === "altura" || name === "peso") {
      const numericValue = value.trim() === "" ? 0 : parseFloat(value);
      setFormState((prevState) => ({ ...prevState, [name]: isNaN(numericValue) ? 0 : numericValue }));
    } else {
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // Função para formatar a data automaticamente conforme o usuário digita
  const formatDateString = (text: string) => {
    let formattedDate = text.replace(/\D/g, ""); // Remove tudo que não for número
    if (formattedDate.length >= 2) {
      formattedDate = `${formattedDate.substring(
        0,
        2
      )}/${formattedDate.substring(2)}`;
    }
    if (formattedDate.length >= 5) {
      formattedDate = `${formattedDate.substring(
        0,
        5
      )}/${formattedDate.substring(5, 9)}`;
    }
    return formattedDate;
  };

  const dateFormater = (date: string) => {
    const dateString = date;

    const [day, month, year] = dateString
      .split("/")
      .map((part) => parseInt(part, 11));

    const birthDate = new Date(year, month - 1, day);

    const isValidDate =
      birthDate.getDate() === day &&
      birthDate.getMonth() === month - 1 &&
      birthDate.getFullYear() === year;

    const today = new Date();

    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    if (!isValidDate) {
      Alert.alert("Erro", "Data inválida: formato ou valor incorreto");
      return;
    } else if (birthDate >= today) {
      Alert.alert("Erro", "Data inválida: não pode ser no futuro");
      return;
    } else if (birthDate > oneYearAgo) {
      Alert.alert(
        "Erro",
        "Data inválida: não pode ser de menos de 1 ano atrás"
      );
      return;
    } else{
      return birthDate
    }
}


  const handleDateChange = (text: string) => {
    const formattedDate = formatDateString(text);
    const nascimento = dateFormater(formattedDate)
    setDataNascimento(formattedDate)
    handleInputChange("dataDeNascimento", nascimento);
  };

 
  const handleRegister = async () => {
    if (formState.senha !== formState.confirmarSenha) {
      Alert.alert(
        "Erro",
        "As senhas não coincidem. Verifique e tente novamente."
      );
      return;
    }

    // Executa o cadastro
    const result = await register(formState);
    if (result.success) {
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Selecao");
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
          <Text style={styles.title}>Cadastre-se</Text>

          {/* <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            style={styles.profileImage}
          />

          <TouchableOpacity>
            <Text style={styles.editPhoto}>Editar foto</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu nome"
            value={formState.nome}
            onChangeText={(text) => handleInputChange("nome", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu sobrenome"
            value={formState.sobrenome}
            onChangeText={(text) => handleInputChange("sobrenome", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu email"
            keyboardType="email-address"
            value={formState.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com sua senha"
            secureTextEntry
            value={formState.senha}
            onChangeText={(text) => handleInputChange("senha", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            secureTextEntry
            value={formState.confirmarSenha}
            onChangeText={(text) => handleInputChange("confirmarSenha", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={24} color="black" />
          <TextInput
            placeholder="Data de nascimento (DD/MM/YYYY)"
            style={styles.input}
            value={dataNascimento}
            keyboardType="numeric"
            onChangeText={handleDateChange}
            maxLength={10} // Limita a entrada para o formato DD/MM/YYYY
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="barbell-outline" size={24} color="black" />
          <TextInput
            placeholder="Sua altura (em cm)"
            style={styles.input}
            keyboardType="numeric"
            value={formState.altura ? formState.altura.toString() : ""} // Converte o número para string
            onChangeText={(text) => handleInputChange("altura", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="fitness-outline" size={24} color="black" />
          <TextInput
            placeholder="Seu peso (em kg)"
            style={styles.input}
            keyboardType="numeric"
            value={formState.peso ? formState.peso.toString() : ""} // Converte o número para string
            onChangeText={(text) => handleInputChange("peso", text)}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.pickerContainer}>
          <Ionicons name="walk-outline" size={24} color="black" />
          <Picker
            selectedValue={formState.nivelDeSedentarismo}
            style={styles.picker}
            onValueChange={(itemValue) =>
              handleInputChange("nivelDeSedentarismo", itemValue)
            }
          >
            <Picker.Item label="Sedentário" value="Sedentário" />
            <Picker.Item label="Levemente ativo" value="Levemente ativo" />
            <Picker.Item label="Moderadamente ativo" value="Moderadamente ativo" />
            <Picker.Item label="Altamente ativo" value="Altamente ativo" />
            <Picker.Item label="Extremamente ativo" value="Extremamente ativo" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Ionicons name="male-female-outline" size={24} color="black" />
          <Picker
            selectedValue={formState.sexo}
            style={styles.picker}
            onValueChange={(itemValue) => handleInputChange("sexo", itemValue)}
          >
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Ionicons name="flag-outline" size={24} color="black" />
          <Picker
            selectedValue={formState.objetivo}
            style={styles.picker}
            onValueChange={(itemValue) => handleInputChange("objetivo", itemValue)}
          >
            <Picker.Item label="Dieta de emagrecimento" value="Dieta de emagrecimento" />
            <Picker.Item label="Dieta de Ganho de Massa Muscular" value="Dieta de Ganho de Massa Muscular" />
            <Picker.Item label="Dieta Low Carb" value="Dieta Low Carb" />
          </Picker>
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

export default Cadastro;