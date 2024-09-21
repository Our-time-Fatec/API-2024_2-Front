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
  const [dataNascimento, setDataNascimento] = useState("");
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
    formattedDate = `${formattedDate.substring(0, 2)}/${formattedDate.substring(2)}`;
  }
  if (formattedDate.length >= 5) {
    formattedDate = `${formattedDate.substring(0, 5)}/${formattedDate.substring(5, 9)}`;
  }
  return formattedDate;
};

// Função para validar e formatar a data para o formato ISO
const dateFormater = (date: string) => {
  const dateString = date;

  // Divide a data pelo separador "/"
  const [day, month, year] = dateString.split("/").map((part) => parseInt(part, 10));

  // Verifica se os valores são válidos
  if (!day || !month || !year) {
    return null; // Retorna null se a data for inválida
  }

  const tamanhoYear = year.toString();
  if (tamanhoYear.length < 4) {
    return;
  }

  // Verifica se o dia está entre 1 e 31
  if (day < 1 || day > 31) {
    Alert.alert("Dia inválido", "O dia deve estar entre 1 e 31.");
    return;
  }

  // Verifica se o mês está entre 1 e 12
  if (month < 1 || month > 12) {
    Alert.alert("Mês inválido", "O mês deve estar entre 1 e 12.");
    return;
  }

  // Cria o objeto Date, pois temos certeza que os valores são válidos
  const birthDate = new Date(year, month - 1, day); // Lembre-se que o mês em JavaScript começa do 0 (Janeiro é 0)

  // Ajusta as horas para o horário atual
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  birthDate.setHours(hours, minutes, seconds, 0);

  return birthDate;
};
const isValidBirthDate = (date: string): { valid: boolean } => {
  // Verifica se é um objeto Date ou string
  let birthDate: Date;

    const [day, month, year] = date.split("/").map((part) => parseInt(part, 10));

    if (!day || !month || !year) {
      return { valid: false };
    }

    if (day < 1 || day > 31) {
      return { valid: false};
    }

    if (month < 1 || month > 12) {
      return { valid: false };
    }

    const tamanhoYear = year.toString();
    if (tamanhoYear.length !== 4) {
      return { valid: false };
    }


    birthDate = new Date(year, month - 1, day);
  
  // Se tudo estiver correto
  return { valid: true };
};

const handleDateChange = (text: string) => {
  const formattedDateString = formatDateString(text);
  const isValidDate = isValidBirthDate(formattedDateString);
  let formattedDate
  if(isValidDate){
   formattedDate = dateFormater(formattedDateString)
  }else{
    formattedDate = new Date()
  };
  setDataNascimento(formattedDateString);

  if (formattedDate) {
    handleInputChange("dataDeNascimento", formattedDate);
  }
};

const handleRegister = async () => {
  // Validação de senha
  if (formState.senha !== formState.confirmarSenha) {
    Alert.alert("Erro", "As senhas não coincidem. Verifique e tente novamente.");
    return;
  }

  // Validação de data de nascimento
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const birthDate = formState.dataDeNascimento;

  if (birthDate.getFullYear() === today.getFullYear() &&
      birthDate.getMonth() === today.getMonth() &&
      birthDate.getDate() === today.getDate()) {
    Alert.alert("Data inválida", "Formato ou valor incorreto.");
    return;
  }

  // Validações de idade
  if (birthDate > today) {
    Alert.alert("Data inválida", "Tem certeza que você nasceu daqui a pouco?");
    return;
  } else if (birthDate > oneYearAgo) {
    Alert.alert("Data inválida", "Um pouco novo demais, não acha?");
    return;
  }

  // Validações de altura e peso
  if (formState.altura >= 250) {
    return Alert.alert("Altura inválida", "Acho que nosso aplicativo não será suficiente para um gigante como você!");
  }
  if (formState.altura <= 80) {
    return Alert.alert("Altura inválida", "Tem certeza que essa é sua altura?");
  }

  if (formState.peso >= 500 || formState.peso <= 20) {
    return Alert.alert("Peso inválido", "Espertinho, tome cuidado com os seus dados!");
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