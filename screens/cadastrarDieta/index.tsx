import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
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
import groupSorter from "../../utils/groupSorter";


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
  const [groups, setGroup] = useState<IGrupo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  
  const handleAlimentoSelect = (alimentoNome: string) => {
    // Define searchTerm como a primeira letra do nome do alimento
    const firstLetter = alimentoNome.charAt(0).toLowerCase();
    setSearchTerm(firstLetter);
};
  
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
  
          // Verificação para garantir que as propriedades existem antes de acessá-las
          setFormState({
            diaSemana: Array.isArray(dieta.diaSemana) ? dieta.diaSemana : [], // Garante que seja um array
            grupos: Array.isArray(dieta.grupos) ? dieta.grupos : [], // Garante que seja um array
            grupoNome: dieta.grupoNome || null,
            alimentos: Array.isArray(dieta.alimentos) ? dieta.alimentos : [], // Garante que seja um array
            alimentoId: null,
            porcao: dieta.porcao || "",
            quantidade: dieta.quantidade || "",
          });
  
          // Configura dias da semana selecionados
          setSelectedDiasSemana(Array.isArray(dieta.diaSemana) ? dieta.diaSemana : []); // Garante que seja um array
  
          const processedGroups:IGrupo[] = Array.isArray(dieta.grupos)
          ? transformGroups(dieta.grupos, allAlimentos, searchTerm)
          : [];
        
        setGroup(processedGroups);
  
          // Preenche os alimentos selecionados
          const alimentosSelecionados = Array.isArray(dieta.alimentos)
            ? dieta.alimentos.map((alimento: { _id: string; }) => {
                return allAlimentos.find((item) => item._id === alimento._id) || null;
              }).filter(Boolean) // Remove itens nulos
            : [];
  
          setSelectedAlimentos(alimentosSelecionados as IAlimento[]);
  
        } catch (error) {
          console.error("Erro ao buscar dieta:", error);
          setErrorMessage("Ocorreu um erro ao buscar a dieta.");
          Alert.alert("Erro", "Ocorreu um erro ao buscar a dieta.");
        }
      };
  
      fetchDieta();
    }
  }, [route.params, allAlimentos]);

  function transformGroups(grupos: IGrupo[], allAlimentos: IAlimento[], searchTerm: string) {
    // Normalize the search term
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return grupos.map((group: IGrupo) => {
        const transformedAlimentos = group.alimentos.map((alimento: IAlimentoDieta) => {
            // Normalize the food name from the group
            if (!alimento || !alimento.nome) {
              throw new Error(`Alimento indefinido ou sem nome.`);
          }
            const normalizedAlimentoNome = alimento.nome.trim().toLowerCase();
            handleAlimentoSelect(normalizedAlimentoNome)

            // Check if the normalized food name matches the search term
            if (normalizedAlimentoNome.includes(normalizedSearchTerm)) {
                // Find the food by name in allAlimentos
                const alimentoEncontrado = allAlimentos.find((a) => a.nome.trim().toLowerCase() === normalizedAlimentoNome);

                // If food is not found by name, throw an error
                if (!alimentoEncontrado) {
                    throw new Error(`Alimento inválido: ${alimento.nome}. Disponíveis: ${JSON.stringify(allAlimentos.map(a => a.nome))}`);
                }

                // Transform the found food
                return {
                    alimentoId: alimentoEncontrado._id,
                    nome: alimentoEncontrado.nome,
                    preparo: alimentoEncontrado.preparo,
                    porcao: alimento.porcao, // Using porcao from the group
                    quantidade: alimento.quantidade, // Using quantidade from the group
                    categoriaCodigo: alimentoEncontrado.categoriaCodigo,
                    detalhes: alimentoEncontrado.detalhes,
                };
            }

            // If the name does not match the search term, return null or an empty object
            return null; // or you could filter these out later
        }).filter((item) => item !== null); // Filter out null items

        return {
            nome: group.nome,
            alimentos: transformedAlimentos,
        };
    });
}

  
  

  const handleChange = (field: string, value: any) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
    setErrorMessage("");
  };

  const handleAddGroup = async () => {
    const { porcao, quantidade } = formState;
    const alimentoIds = selectedAlimentos;

    if (
      !Array.isArray(alimentoIds) ||
      alimentoIds.length === 0 ||
      !porcao ||
      !quantidade
    ) {
      setErrorMessage("Todos os campos do alimento são obrigatórios.");
      Alert.alert("Erro", "Todos os campos do alimento são obrigatórios.");
      return;
    }

    const alimentos:IAlimentoDieta[] = []

    alimentoIds.forEach((id) => {
      const alimento = allAlimentos.find((a) => a._id === id._id);

      if (!alimento) {
        setErrorMessage("Alimento inválido.");
        Alert.alert("Erro", "Alimento inválido.");
        return;
      }

        const novoAlimento: IAlimentoDieta = {
          alimentoId: alimento._id,
          nome: alimento.nome,
          preparo: alimento.preparo,
          porcao: parseFloat(porcao),
          quantidade: parseInt(quantidade, 10),
          categoriaCodigo: alimento.categoriaCodigo,
          detalhes: alimento.detalhes,
        };

      alimentos.push(novoAlimento);
    });

    // Limpa os campos de entrada
    setFormState((prevState) => ({
      ...prevState,
      alimentoId: null,
      porcao: "",
      quantidade: "",
    }));
    setSelectedAlimentos([]);

    if (!formState.grupoNome || alimentos.length === 0) {
      setErrorMessage("Todos os campos do grupo são obrigatórios.");
      Alert.alert("Erro", "Todos os campos do grupo são obrigatórios.");
      return;
    }

    const groupName =
      GruposEnum[formState.grupoNome as unknown as keyof typeof GruposEnum];

    // Cria um novo grupo com os dados do formulário
    const newGroup: IGrupo = {
      nome: groupName,
      alimentos: alimentos,
    };

    // Salva o novo grupo no AsyncStorage
    try {
      setGroup((prevState) => {
        const existingGroupIndex = prevState.findIndex(
          (group) => group.nome === newGroup.nome
        );

        if (existingGroupIndex !== -1) {
          const updatedGroups = [...prevState];
          updatedGroups[existingGroupIndex] = newGroup;
          return updatedGroups;
        } else {
          return [...prevState, newGroup];
        }   
      });
      setFormState((prev) => ({
        ...prev,
        grupos: [...prev.grupos, newGroup], // Atualiza o estado com o novo grupo
        grupoNome: null, // Limpa o campo de nome do grupo para null
        alimentos: [], // Limpa a lista de alimentos
      }));
      console.log(groups);
      Alert.alert("Sucesso", "Refeição cadastrada com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar o grupo.");
    }
  }



  const cadastrarDieta = async () => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (groups.length === 0) {
      setErrorMessage("Todos os campos são obrigatórios.");
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    if (!Array.isArray(formState.diaSemana) || formState.diaSemana.length === 0) {
      setFormState((prevState) => ({
        ...prevState,
        diaSemana: Object.values(DiasSemana), // Preenche com todos os dias da semana
      }));
    }


    const groupsOrdenados = groupSorter.sorter(groups)

    try {
      const dieta: IDietaFixa = {
        diaSemana: formState.diaSemana,
        grupos: groupsOrdenados,
      };
      console.log(JSON.stringify(dieta));

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

      setGroup([]);

      // Limpa o estado do formulário
      limparFormState();
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Erro",
        `Ocorreu um erro ao ${isEditing ? "atualizar" : "cadastrar"} a dieta.`
      );
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
    setErrorMessage("");
  };

  const handleSelectDiaSemana = (selectedItems: string[]) => {
    const validDiasSemana = selectedItems.map(
      (id) => DiasSemana[id as keyof typeof DiasSemana]
    );

    // Atualiza o estado de dias da semana e do formState ao mesmo tempo
    setSelectedDiasSemana(validDiasSemana);
    setFormState((prevState) => ({
      ...prevState,
      diaSemana: validDiasSemana,
    }));
  };
  const handleSelectAlimentos = (selectedItems: string[]) => {
    const alimentosSelecionados = allAlimentos.filter(
      (alimento) => selectedItems.includes(alimento._id) // Filtra os alimentos com base nos IDs selecionados
    );

    setSelectedAlimentos(alimentosSelecionados); // Atualiza o estado com os alimentos selecionados
  };

  return (

    <ScrollView style={styles.container}  >
     
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
      {groups.length > 0 ? (
         <Text style={styles.registeredMealText}>
         {groups.map((grupo) => grupo.nome).join(', ')}
       </Text>
      ) : (
        <Text></Text>
      )}

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

      <TouchableOpacity style={styles.button} onPress={handleAddGroup}>
        <Text style={styles.buttonText}>Adicionar Refeição</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={cadastrarDieta}>
        <Text style={styles.buttonText}>Cadastrar Dieta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CadastroDietaScreen;
