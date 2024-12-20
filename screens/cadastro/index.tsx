import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import { IUsuario } from "../../interfaces/IUsuario";
import useRegister from "../../hooks/useRegister";
import formaterDate from "../../utils/formaterDate";
import resultChecker from "../../utils/resultChecker";
import useProfilePicture from "../../hooks/useProfilePicture";
import {styles as style} from "../../screens/editProfile/styles"

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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [dataFormatada, setDataFormatada] = useState<Date | null | undefined>();

  const { image, saveProfileImage, pickImage, takePhoto, removeProfileImage } = useProfilePicture(formState.email);

  const handlePickImage = () => {
    if (formState.email) {
      pickImage(); // Chama a função se o email não estiver vazio
    } else {
      Alert.alert("Erro", "Por favor, preencha seu email antes de selecionar uma imagem.");
      return
    }
  };

  const handleTakePhoto = () => {
    if (formState.email) {
      takePhoto(); // Chama a função se o email não estiver vazio
    } else {
      Alert.alert("Erro", "Por favor, preencha seu email antes de tirar uma foto.");
      return
    }
  };

  const handleInputChange = (name: keyof IUsuario, value: any) => {
    if (name === "altura" || name === "peso") {
      const numericValue = value.trim() === "" ? 0 : parseFloat(value);
      setFormState((prevState) => ({
        ...prevState,
        [name]: isNaN(numericValue) ? 0 : numericValue,
      }));
    } else {
      setFormState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleDateChange = (text: string) => {
    const formattedDateString = formaterDate.formatDateString(text);
    const isValidDate = formaterDate.isValidBirthDate(formattedDateString);
    let formattedDate: Date | null | undefined = isValidDate
      ? formaterDate.dateFormater(formattedDateString)
      : new Date();
    setDataNascimento(formattedDateString);
    setDataFormatada(formattedDate);
    formattedDate && handleInputChange("dataDeNascimento", formattedDate);
    formattedDate && setSelectedDate(formattedDate);
  };

  const handleDateConfirm = (date: Date) => {
    handleInputChange("dataDeNascimento", date);
    setDataNascimento(date.toLocaleDateString("pt-BR"));
    setShowDatePicker(false);
    setSelectedDate(date);
    setDataFormatada(date);
  };

  const handleRegister = async () => {
    // Verificação de todas as validações
    if (!resultChecker.checkDateConscile(formState, dataFormatada)) return;

    const validators = [
      resultChecker.checkSenha,
      resultChecker.checkNascimento,
      resultChecker.checkAltura,
      resultChecker.checkPeso,
    ];

    // Se qualquer validação falhar, o fluxo é interrompido
    if (validators.some((validator) => !validator(formState))) return;
    if(image){
      saveProfileImage(image, formState.email)
    }
    
    if (validators.some((validator) => !validator(formState))) return;
    const updatedFormState = {
      ...formState,
      nome: formState.nome.trim(),
      sobrenome: formState.sobrenome.trim(),
    };

    // Executa o cadastro
    const result = await register(updatedFormState);
    if (result.success) {
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Selecao");
    } else {
      Alert.alert("Erro", result.error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor="#FFF"/>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
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

        <View style={{ alignItems: "center", marginBottom: 20 }}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
            ) : (
              <Ionicons name="person-circle-outline" size={120} color="gray" />
            )}
               <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity onPress={handlePickImage} style={style.iconButton}>
                <Ionicons name="folder-outline" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleTakePhoto} style={style.iconButton}>
                <Ionicons name="camera-outline" size={30} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={removeProfileImage}
                style={style.iconButton}
              >
                <Ionicons name="trash-outline" size={30} color="black" />
              </TouchableOpacity>
            </View>
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
            spellCheck={false}
            autoCapitalize="none"
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
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Ionicons name="calendar-outline" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            placeholder="Data de nascimento (DD/MM/YYYY)"
            style={[styles.input, { fontSize: 14 }]}
            value={dataNascimento}
            keyboardType="numeric"
            onChangeText={handleDateChange}
            maxLength={10} // Limita a entrada para o formato DD/MM/YYYY
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          date={selectedDate}
          onConfirm={handleDateConfirm}
          onCancel={() => setShowDatePicker(false)}
        />

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
            <Picker.Item
              label="Moderadamente ativo"
              value="Moderadamente ativo"
            />
            <Picker.Item label="Altamente ativo" value="Altamente ativo" />
            <Picker.Item
              label="Extremamente ativo"
              value="Extremamente ativo"
            />
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
            onValueChange={(itemValue) =>
              handleInputChange("objetivo", itemValue)
            }
          >
            <Picker.Item
              label="Dieta de emagrecimento"
              value="Dieta de emagrecimento"
            />
            <Picker.Item
              label="Dieta de Ganho de Massa Muscular"
              value="Dieta de Ganho de Massa Muscular"
            />
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
