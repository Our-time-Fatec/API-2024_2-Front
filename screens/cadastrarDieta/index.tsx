import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { requestWithRefresh } from "../../services/api";
import FooterMenu from "../../components/menus";
import { IAlimentoDieta, IDietaFixa, IGrupo } from "../../interfaces/IDieta";
import { DiasSemana } from "../../enums/diasSemana";
import { IAlimento } from "../../interfaces/IAlimento";
import MultiSelect from "react-native-multiple-select";
import { Picker } from "@react-native-picker/picker";
import useAlimentos from "../../hooks/useAlimentos";

enum GruposEnum {
  cafedamanha = "Café da Manhã",
  almoco = "Almoço",
  cafedatarde = "Café da Tarde",
  janta = "Janta",
}

type CadastroDietaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CadastroDieta"
>;
type CadastroDietaScreenRouteProp = RouteProp<
  RootStackParamList,
  "CadastroDieta"
>;

type Props = {
  navigation: CadastroDietaScreenNavigationProp;
  route: CadastroDietaScreenRouteProp;
};

const CadastroDietaScreen: React.FC<Props> = ({ navigation, route }) => {
  const [formState, setFormState] = useState<{
    diaSemana: DiasSemana[];
    grupos: IGrupo[];
    grupoNome: GruposEnum | null;
    alimentos: IAlimentoDieta[];
    alimentoId: string | null;
    porcao: string;
    quantidade: string;
  }>({
    diaSemana: [],
    grupos: [],
    grupoNome: null,
    alimentos: [],
    alimentoId: null,
    porcao: "",
    quantidade: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [dietaId, setDietaId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { alimentos: allAlimentos, refreshAlimentos } =
    useAlimentos(searchTerm);

  const [selectedDiasSemana, setSelectedDiasSemana] = useState<DiasSemana[]>(
    []
  );
  const [selectedAlimentos, setSelectedAlimentos] = useState<IAlimento[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    refreshAlimentos();
  }, [searchTerm]);

  useEffect(() => {
    const { dietaId } = route.params;

    if (dietaId) {
      setDietaId(dietaId);
      setIsEditing(true);
      const fetchDieta = async () => {
        try {
          const response = await requestWithRefresh({
            method: "GET",
            url: `/dieta/${dietaId}`,
          });
          const dieta = response.data;

          setFormState({
            diaSemana: dieta.diaSemana || [],
            grupos: dieta.grupos || [],
            grupoNome: null,
            alimentos: [],
            alimentoId: null,
            porcao: "",
            quantidade: "",
          });
        } catch (error) {
          console.error("Erro ao buscar dieta:", error);
          Alert.alert("Erro", "Ocorreu um erro ao buscar a dieta.");
        }
      };

      fetchDieta();
    }
  }, [route.params]);

  const handleChange = (field: string, value: any) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
    setErrorMessage(null); // Limpa mensagem de erro ao alterar campos
  };

  const handleAddGroup = () => {
    const { grupoNome, alimentos } = formState;

    if (grupoNome === null || alimentos.length === 0) {
      setErrorMessage("Todos os campos do grupo são obrigatórios.");
      Alert.alert("Erro","Todos os campos da refeição são obrigatórios.")
      return;
    }

    setFormState((prevState) => ({
      ...prevState,
      grupos: [...prevState.grupos, { nome: grupoNome, alimentos }],
      grupoNome: null,
      alimentos: [],
    }));
  };

  const handleAddAlimento = () => {
    const { alimentoId, porcao, quantidade } = formState;

    if (!alimentoId || !porcao || !quantidade) {
      setErrorMessage("Todos os campos do alimento são obrigatórios.");
      Alert.alert("Erro","Todos os campos do alimento são obrigatórios.")
      return;
    }

    const alimento = allAlimentos.find((a) => a._id === alimentoId);

    if (alimento) {
      const novoAlimento: IAlimentoDieta = {
        _id: alimento._id,
        nome: alimento.nome,
        preparo: alimento.preparo,
        porcao: parseFloat(porcao),
        quantidade: parseInt(quantidade, 10),
        categoriaCodigo: alimento.categoriaCodigo,
        detalhes: alimento.detalhes,
      };

      setFormState((prevState) => ({
        ...prevState,
        alimentos: [...prevState.alimentos, novoAlimento],
        alimentoId: null,
        porcao: "",
        quantidade: "",
      }));
    }
  };

  const cadastrarDieta = async () => {
    const { diaSemana, grupos } = formState;

    if (diaSemana.length === 0 || grupos.length === 0) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }

    const dieta: IDietaFixa = {
      diaSemana,
      grupos,
    };

    try {
      if (isEditing) {
        await requestWithRefresh({
          method: "PUT",
          url: `/dieta/${dietaId}`,
          data: dieta,
        });
        Alert.alert("Sucesso", "Dieta atualizada com sucesso!");
      } else {
        await requestWithRefresh({
          method: "POST",
          url: "/dieta",
          data: dieta,
        });
        Alert.alert("Sucesso", "Dieta cadastrada com sucesso!");
      }
      limparFormState();
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao cadastrar/atualizar dieta:", error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar/atualizar a dieta.");
    }
  };

  const limparFormState = () => {
    setFormState({
      diaSemana: [],
      grupos: [],
      grupoNome: null,
      alimentos: [],
      alimentoId: null,
      porcao: "",
      quantidade: "",
    });
    setErrorMessage(null); // Limpa mensagem de erro ao limpar o formulário
  };

  const handleSelectDiaSemana = (selectedItems: string[]) => {
    const validDiasSemana = selectedItems.map(
      (id) => DiasSemana[id as keyof typeof DiasSemana]
    );
    setSelectedDiasSemana(validDiasSemana);
  };
  

  const handleSelectAlimentos = (selectedItems: string[]) => {
    const alimentosSelecionados = allAlimentos.filter((alimento) =>
      selectedItems.includes(alimento._id ? alimento._id : "")
    );
    setSelectedAlimentos(alimentosSelecionados);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cadastro de Dieta</Text>

      <Text style={styles.pickerLabel}>Dias da Semana</Text>
  <View style={styles.pickerContainer}>
    <MultiSelect
      items={Object.keys(DiasSemana).map((dia) => ({
        id: dia,
        name: DiasSemana[dia as keyof typeof DiasSemana],
      }))}
      uniqueKey="id"
      onSelectedItemsChange={handleSelectDiaSemana}
      selectedItems={selectedDiasSemana.map((dia) =>
        Object.keys(DiasSemana).find(
          (key) => DiasSemana[key as keyof typeof DiasSemana] === dia
        )
      )}
      selectText="Selecione os dias da semana"
      searchInputPlaceholderText="Buscar dias"
      tagRemoveIconColor="#CCC"
      tagBorderColor="#CCC"
      tagTextColor="#000"
      selectedItemTextColor="#007BFF"
      selectedItemIconColor="#007BFF"
      itemTextColor="#000"
      displayKey="name"
      searchInputStyle={{ color: "#CCC" }}
      submitButtonColor="#007BFF"
      submitButtonText="Adicionar"
      styleDropdownMenuSubsection={styles.multiSelectDropdown}
      styleMainWrapper={styles.multiSelectWrapper}
      fontSize={15}
    />
  </View>



      {/* Nome do Grupo */}
      <Text style={styles.pickerLabel}> Nome da Refeição</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={formState.grupoNome}
          style={styles.picker}
          onValueChange={(itemValue) => handleChange("grupoNome", itemValue)}
        >
          <Picker.Item label="Selecione o grupo" value={null} />
          {Object.keys(GruposEnum).map((grupo) => (
            <Picker.Item
              key={grupo}
              label={GruposEnum[grupo as keyof typeof GruposEnum]}
              value={grupo}
            />
          ))}
        </Picker>
      </View>

      {/* Buscar Alimentos */}
      <Text style={styles.pickerLabel}>Buscar Alimentos</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar alimentos"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <Text style={styles.pickerLabel}>Selecione os alimentos</Text>
      <View style={styles.pickerContainer}>
        <MultiSelect
          items={allAlimentos.map((alimento) => ({
            id: alimento._id,
            name: alimento.nome,
          }))}
          uniqueKey="id"
          onSelectedItemsChange={handleSelectAlimentos}
          selectedItems={selectedAlimentos.map((alimento) => alimento._id)}
          selectText="Selecione os alimentos"
          searchInputPlaceholderText="Buscar alimentos"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#000"
          selectedItemTextColor="#007BFF"
          selectedItemIconColor="#007BFF"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="#007BFF"
          submitButtonText="Adicionar"
          styleDropdownMenuSubsection={styles.multiSelectDropdown}
          styleMainWrapper={styles.multiSelectWrapper}
        />
      </View>

      {/* Porção */}
      <Text style={styles.pickerLabel}>Porção (g)</Text>
      <TextInput
        style={styles.input}
        placeholder="Porção"
        value={formState.porcao}
        onChangeText={(text) => handleChange("porcao", text)}
        keyboardType="numeric"
      />

      {/* Quantidade */}
      <Text style={styles.pickerLabel}>Quantidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={formState.quantidade}
        onChangeText={(text) => handleChange("quantidade", text)}
        keyboardType="numeric"
      />

      {/* Botões */}
      <TouchableOpacity style={styles.button} onPress={handleAddAlimento}>
        <Text style={styles.buttonText}>Adicionar Alimento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAddGroup}>
        <Text style={styles.buttonText}>Adicionar refeição</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={cadastrarDieta}>
        <Text style={styles.buttonText}>Cadastrar Dieta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CadastroDietaScreen;
