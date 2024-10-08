import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { requestWithRefresh } from "../../services/api";
import { IAlimento, Detalhes } from "../../interfaces/IAlimento";
import ICategoria from "../../interfaces/ICategoria";
import FooterMenu from "../../components/menus";
import nutritionalValidator from "../../utils/nutritionalValidator";

type CadastroAlimentoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CadastroAlimento"
>;
type CadastroAlimentoScreenRouteProp = RouteProp<
  RootStackParamList,
  "CadastroAlimento"
>;

type Props = {
  navigation: CadastroAlimentoScreenNavigationProp;
  route: CadastroAlimentoScreenRouteProp;
};

const CadastroAlimentoScreen: React.FC<Props> = ({ navigation, route }) => {
  const [formState, setFormState] = useState<{
    nome: string;
    preparo: string;
    porcao: string;
    categoriaCodigo: number | null;
    valorEnergetico: string;
    proteinas: string;
    carboidratos: string;
    fibras: string;
    lipidios: string;
  }>({
    nome: "",
    preparo: "",
    porcao: "",
    categoriaCodigo: null,
    valorEnergetico: "",
    proteinas: "",
    carboidratos: "",
    fibras: "",
    lipidios: "",
  });

  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [alimentoId, setAlimentoId] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await requestWithRefresh({
          method: "GET",
          url: "/categoria",
        });
        setCategorias(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
        setIsLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const { alimentoId } = route.params;

    if (alimentoId) {
      setAlimentoId(alimentoId);
      setIsEditing(true);
      const fetchAlimento = async () => {
        try {
          const response = await requestWithRefresh({
            method: "GET",
            url: `/alimento/${alimentoId}`,
          });
          const alimento = response.data;

          setFormState({
            nome: alimento.nome,
            preparo: alimento.preparo,
            porcao: alimento.porcao.toString(),
            categoriaCodigo: alimento.categoriaCodigo,
            valorEnergetico: alimento.detalhes.valorEnergetico.toString(),
            proteinas: alimento.detalhes.proteinas.toString(),
            carboidratos: alimento.detalhes.carboidratos.toString(),
            fibras: alimento.detalhes.fibras.toString(),
            lipidios: alimento.detalhes.lipidios.toString(),
          });
        } catch (error) {
          console.error("Erro ao buscar alimento:", error);
        }
      };

      fetchAlimento();
    }
  }, [route.params]);

  const handleChange = (field: string, value: string | number | null) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  const cadastrarAlimento = async () => {
    const {
      nome,
      preparo,
      porcao,
      categoriaCodigo,
      valorEnergetico,
      proteinas,
      carboidratos,
      fibras,
      lipidios,
    } = formState;

    if (
      !nome ||
      !preparo ||
      !porcao ||
      categoriaCodigo === null ||
      !valorEnergetico ||
      !proteinas ||
      !carboidratos ||
      !fibras ||
      !lipidios
    ) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    const detalhes: Detalhes = {
      valorEnergetico: parseFloat(valorEnergetico),
      proteinas: parseFloat(proteinas),
      carboidratos: parseFloat(carboidratos),
      fibras: parseFloat(fibras),
      lipidios: parseFloat(lipidios),
    };

    const isValid = nutritionalValidator.validateNutrients(detalhes, porcao);
    if (!isValid) return;

    const alimento: IAlimento = {
      nome,
      preparo,
      porcao: parseFloat(porcao),
      categoriaCodigo,
      detalhes,
      _id: ""
    };

    try {
      if (isEditing) {
        await requestWithRefresh({
          method: "PUT",
          url: `/alimento/${alimentoId}`,
          data: alimento,
        });
        Alert.alert("Sucesso", "Alimento atualizado com sucesso!");
      } else {
        await requestWithRefresh({
          method: "POST",
          url: "/alimento",
          data: alimento,
        });
        Alert.alert("Sucesso", "Alimento cadastrado com sucesso!");
      }
      limparFormState;
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao cadastrar/atualizar alimento:", error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar/atualizar o alimento.");
    }
  };

  const limparFormState = async () => {
    setFormState({
      nome: "",
      preparo: "",
      porcao: "",
      categoriaCodigo: null,
      valorEnergetico: "",
      proteinas: "",
      carboidratos: "",
      fibras: "",
      lipidios: "",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          <Text style={styles.title}>
            {isEditing ? "Editar Alimento" : "Cadastro de Alimento"}
          </Text>

          <View style={styles.inputContainer}>
            <Ionicons name="nutrition-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.nome}
              onChangeText={(text) => handleChange("nome", text)}
              placeholder="Digite o nome do alimento"
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="gray"
            />
            <TextInput
              style={styles.input}
              value={formState.preparo}
              onChangeText={(text) => handleChange("preparo", text)}
              placeholder="Digite o preparo"
              placeholderTextColor="rgba(163,162,163,255)"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="resize" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.porcao}
              onChangeText={(text) => handleChange("porcao", text)}
              placeholder="Digite a porção em gramas"
              keyboardType="numeric"
              placeholderTextColor="rgba(163,162,163,255)"
              keyboardAppearance="default"
            />
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formState.categoriaCodigo}
              style={styles.picker}
              onValueChange={(itemValue) =>
                handleChange("categoriaCodigo", itemValue)
              }
            >
              <Picker.Item label="Selecione uma categoria" value={null} />
              {categorias.map((categoria) => (
                <Picker.Item
                  key={categoria.codigo}
                  label={categoria.nome}
                  value={categoria.codigo}
                />
              ))}
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="flame-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.valorEnergetico}
              onChangeText={(text) => handleChange("valorEnergetico", text)}
              placeholder="Digite o valor energético"
              keyboardType="numeric"
              placeholderTextColor="rgba(163,162,163,255)"
              keyboardAppearance="default"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="analytics-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.proteinas}
              onChangeText={(text) => handleChange("proteinas", text)}
              placeholder="Digite a quantidade de proteínas"
              keyboardType="numeric"
              placeholderTextColor="rgba(163,162,163,255)"
              keyboardAppearance="default"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="analytics-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.carboidratos}
              onChangeText={(text) => handleChange("carboidratos", text)}
              placeholder="Digite a quantidade de carboidratos"
              keyboardType="numeric"
              placeholderTextColor="rgba(163,162,163,255)"
              keyboardAppearance="default"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="analytics-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.fibras}
              onChangeText={(text) => handleChange("fibras", text)}
              placeholder="Digite a quantidade de fibras"
              keyboardType="numeric"
              placeholderTextColor="rgba(163,162,163,255)"
              keyboardAppearance="default"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="analytics-outline" size={20} color="gray" />
            <TextInput
              style={styles.input}
              value={formState.lipidios}
              onChangeText={(text) => handleChange("lipidios", text)}
              placeholder="Digite a quantidade de lipídios"
              keyboardType="numeric"
              placeholderTextColor="rgba(163,162,163,255)"
              keyboardAppearance="default"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={cadastrarAlimento}>
            <Text style={styles.buttonText}>
              {isEditing ? "Atualizar" : "Cadastrar"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FooterMenu navigation={navigation} />
    </View>
  );
};

export default CadastroAlimentoScreen;
