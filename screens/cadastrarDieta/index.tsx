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
import { requestWithRefresh } from "../../services/api";
import { IAlimentoDieta, IDietaFixa, IGrupo } from "../../interfaces/IDieta";
import { DiasSemana } from "../../enums/diasSemana";
import { IAlimento } from "../../interfaces/IAlimento";
import MultiSelect from "react-native-multiple-select";
import { Picker } from "@react-native-picker/picker";
import useAlimentos from "../../hooks/useAlimentos";
import useDietaStorage from "../../hooks/useDietaStorage";

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
  const {
    getItem,
    saveGrupo,
    removeGrupo,
    clearStorage,
  } = useDietaStorage();

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

  useEffect(() => {

    return () => {
      const clearData = async () => {
        try {
          await clearStorage(); 
        } catch (error) {
          console.error("Erro ao limpar o armazenamento:", error);
        }
      };
  
      clearData(); 
    };
  }, []);

  const handleChange = (field: string, value: any) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
    setErrorMessage(null);
  };

  const handleAddGroup = async () => {
    if (!formState.grupoNome || formState.alimentos.length === 0) {
      setErrorMessage("Todos os campos do grupo são obrigatórios.");
      Alert.alert("Erro", "Todos os campos da refeição são obrigatórios");
      return;
    }
  
    // Cria um novo grupo com os dados do formulário
    const newGroup: IGrupo = {
      nome: formState.grupoNome,
      alimentos: formState.alimentos,
    };
  
    // Salva o novo grupo no AsyncStorage
    try {
      await saveGrupo(newGroup.nome, newGroup.alimentos); // Chama a função para salvar o grupo
      setFormState((prev) => ({
        ...prev,
        grupos: [...prev.grupos, newGroup], // Atualiza o estado com o novo grupo
        grupoNome: null, // Limpa o campo de nome do grupo para null
        alimentos: [], // Limpa a lista de alimentos
      }));
  
      Alert.alert("Sucesso", "Refeição cadastrada com sucesso!");
      
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar o grupo.");
    }
  };
  

  const handleAddAlimento = () => {
    const { porcao, quantidade } = formState;
    const alimentoIds = selectedAlimentos;

    if (alimentoIds.length === 0 || !porcao || !quantidade) {
      setErrorMessage("Todos os campos do alimento são obrigatórios.");
      return;
    }

    alimentoIds.forEach((id) => {
      const alimento = allAlimentos.find((a) => a._id === id._id);
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

        // Atualiza o estado do formulário sem sobrescrever o estado inteiro
        setFormState((prevState) => {
          const newAlimentos = [...prevState.alimentos, novoAlimento];
          const updatedState = { ...prevState, alimentos: newAlimentos };
          return updatedState; // Retorna o estado atualizado
        });
      }
    });

    // Limpa os campos de entrada
    setFormState((prevState) => ({
      ...prevState,
      alimentoId: null,
      porcao: "",
      quantidade: "",
    }));

    // Limpa os alimentos selecionados
    Alert.alert("Sucesso", "Alimentos adicionados com sucesso!");
    setSelectedAlimentos([]);
  };

  const cadastrarDieta = async () => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (formState.diaSemana.length === 0 || formState.grupos.length === 0) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }
  
    try {
      // Obtém os grupos cadastrados do AsyncStorage
      const gruposCadastrados = await getItem('grupos');
      
      const dieta: IDietaFixa = {
        diaSemana: formState.diaSemana,
        grupos: gruposCadastrados, // Usa os grupos do AsyncStorage
      };
  
      // Faz a requisição para cadastrar ou atualizar a dieta
      await requestWithRefresh({
        method: isEditing ? "PUT" : "POST",
        url: isEditing ? `/dieta/${dietaId}` : "/dieta",
        data: dieta,
      });
  
      Alert.alert(
        "Sucesso",
        `Dieta ${isEditing ? "atualizada" : "cadastrada"} com sucesso!`
      );
  
      // Limpa o AsyncStorage relacionado a grupos de comida
      await clearStorage(); // Limpa apenas os grupos
  
      // Limpa o estado do formulário
      limparFormState();
      navigation.goBack();
    } catch (error) {
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
    setErrorMessage(null);
  };

  const handleSelectDiaSemana = (selectedItems: string[]) => {
    const validDiasSemana = selectedItems.map(
      (id) => DiasSemana[id as keyof typeof DiasSemana]
    );
    setSelectedDiasSemana(validDiasSemana);
    handleChange("diaSemana", validDiasSemana);
  };

  const handleSelectAlimentos = (selectedItems: string[]) => {
    console.log(selectedItems);

    const alimentosSelecionados = allAlimentos.filter(
      (alimento) => selectedItems.includes(alimento._id) // Filtra os alimentos com base nos IDs selecionados
    );

    setSelectedAlimentos(alimentosSelecionados); // Atualiza o estado com os alimentos selecionados
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
            id: alimento._id, // Identificador único
            name: alimento.nome, // Nome do alimento
          }))}
          uniqueKey="id"
          onSelectedItemsChange={handleSelectAlimentos} // Função chamada quando a seleção muda
          selectedItems={selectedAlimentos.map((alimento) => alimento._id)} // IDs dos alimentos selecionados
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

      <Text style={styles.pickerLabel}>Porção (g)</Text>
      <TextInput
        style={styles.input}
        placeholder="Porção"
        value={formState.porcao}
        onChangeText={(text) => handleChange("porcao", text)}
        keyboardType="numeric"
      />

      <Text style={styles.pickerLabel}>Quantidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={formState.quantidade}
        onChangeText={(text) => handleChange("quantidade", text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddAlimento}>
        <Text style={styles.buttonText}>Adicionar Alimento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAddGroup}>
        <Text style={styles.buttonText}>Adicionar Refeição</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={cadastrarDieta}>
        <Text style={styles.buttonText}>Cadastrar Dieta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CadastroDietaScreen