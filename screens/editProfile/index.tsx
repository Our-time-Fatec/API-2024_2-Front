import React, { useState, useEffect } from "react";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { IUsuario } from "../../interfaces/IUsuario";
import useUsuario from "../../hooks/useUsuario";
import useUpdateUser from "../../hooks/useUpdateUser";
import FooterMenu from "../../components/menus";
import formaterDate from "../../utils/formaterDate";
import resultChecker from "../../utils/resultChecker";

type EditProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "EditProfile"
>;
type EditProfileScreenRouteProp = RouteProp<RootStackParamList, "EditProfile">;

type Props = {
  navigation: EditProfileScreenNavigationProp;
  route: EditProfileScreenRouteProp;
};

const EditProfile: React.FC<Props> = ({ navigation }) => {
  const {
    usuario,
    loading: loadingUsuario,
    error: errorUsuario,
  } = useUsuario();

  const { updateUser, loading } = useUpdateUser();

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

  const [dataNascimento, setDataNascimento] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  
  // State para salvar as  informações ATUAIS do estado da data de nascimento
  const [dataFormatada, setDataFormatada] = useState<Date | null | undefined>();

  useEffect(() => {
    if (usuario) {
      setFormState({
        nome: usuario.nome,
        sobrenome: usuario.sobrenome,
        email: usuario.email,
        senha: "",
        confirmarSenha: "",
        dataDeNascimento: new Date(usuario.dataDeNascimento) || new Date(),
        altura: usuario.altura,
        peso: usuario.peso,
        objetivo: usuario.objetivo,
        nivelDeSedentarismo: usuario.nivelDeSedentarismo,
        sexo: usuario.sexo,
      });
      setSelectedDate(new Date(usuario.dataDeNascimento));
    }
  }, [usuario]);

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

  const handleUpdate = async () => {
    if (!resultChecker.checkDateConscile(formState, dataFormatada)) return;

    const validators = [
      resultChecker.checkSenha,
      resultChecker.checkNascimento,
      resultChecker.checkAltura,
      resultChecker.checkPeso,
    ];

    // Se qualquer validação falhar, o fluxo é interrompido
    if (validators.some((validator) => !validator(formState))) return;

    const result = await updateUser(formState);
    if (result.success) {
      Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", result.error);
    }
  };

  if (loadingUsuario) {
    return <Text>Carregando dados...</Text>;
  }

  if (errorUsuario) {
    return <Text>Erro ao carregar dados.</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <View style={styles.containerUp}>
            <Text style={styles.title}>Editar Perfil</Text>
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={formState.nome}
              onChangeText={(text) => handleInputChange("nome", text)}
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Sobrenome"
              value={formState.sobrenome}
              onChangeText={(text) => handleInputChange("sobrenome", text)}
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={formState.email}
              onChangeText={(text) => handleInputChange("email", text)}
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Ionicons name="calendar-outline" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
              placeholder="Data de nascimento (DD/MM/YYYY)"
              style={styles.input}
              value={
                dataNascimento ||
                (formState?.dataDeNascimento
                  ? new Date(formState.dataDeNascimento).toLocaleDateString(
                      "pt-BR"
                    )
                  : "")
              }
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
              placeholder="Altura (em cm)"
              style={styles.input}
              keyboardType="numeric"
              value={formState.altura ? formState.altura.toString() : ""}
              onChangeText={(text) => handleInputChange("altura", text)}
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="fitness-outline" size={24} color="black" />
            <TextInput
              placeholder="Peso (em kg)"
              style={styles.input}
              keyboardType="numeric"
              value={formState.peso ? formState.peso.toString() : ""}
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
            <Ionicons name="star-outline" size={24} color="black" />
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

          <View style={styles.pickerContainer}>
            <Ionicons name="male-outline" size={24} color="black" />
            <Picker
              selectedValue={formState.sexo}
              style={styles.picker}
              onValueChange={(itemValue) =>
                handleInputChange("sexo", itemValue)
              }
            >
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              placeholder="Nova senha (deixe em branco para não alterar)"
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
              placeholder="Confirme a nova senha"
              secureTextEntry
              value={formState.confirmarSenha}
              onChangeText={(text) => handleInputChange("confirmarSenha", text)}
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>
              {loading ? "Atualizando..." : "Atualizar Perfil"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FooterMenu navigation={navigation} />
    </View>
  );
};

export default EditProfile;
