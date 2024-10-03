import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  RefreshControl
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
import GroupModal from "../../components/grupos";

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
  groups: IGrupo[];
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
  const [diaEdit, setDiaEdit] = useState<DiasSemana>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedGrupo, setSelectedGrupo] = useState<IGrupo | null>(null);
  const [refreshing, setRefreshing] = useState(false); 

  const onRefresh = async () => {
    setRefreshing(true);
  
    try {
      // Chame qualquer função que você use para recarregar dados, como buscar alimentos ou dieta
      await refreshAlimentos(); // ou qualquer outra função que recarregue dados
      Alert.alert("Recarregamento", "Página recarregada com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao recarregar a página.");
    } finally {
      setRefreshing(false);
    }
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
          setDiaEdit(dieta.diaSemana ?? "Segunda-feira"); // Garante que seja um array

          const processedGroups: IGrupo[] = Array.isArray(dieta.grupos)
            ? transformGroups(dieta.grupos)
            : [];

          setGroup(processedGroups);

          // Preenche os alimentos selecionados
          const alimentosSelecionados = Array.isArray(dieta.alimentos)
            ? dieta.alimentos
                .map((alimento: { _id: string }) => {
                  return (
                    allAlimentos.find((item) => item._id === alimento._id) ||
                    null
                  );
                })
                .filter(Boolean) // Remove itens nulos
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

  const handleRemoveGroup = (groupId:string) => {
    setGroup((prevState) => prevState.filter((grupo) => grupo._id !== groupId));
  };

  function transformGroups(grupos: IGrupo[]) {
    return grupos.map((group: IGrupo) => {
      const transformedAlimentos = group.alimentos
        .map((alimento: IAlimentoDieta) => {
          if (!alimento || !alimento.alimentoId) {
            console.error(
              `Alimento indefinido ou sem ID no grupo: ${group.nome}`
            );
            return null;
          }

          return {
            alimentoId: alimento.alimentoId,
            nome: alimento.nome,
            preparo: alimento.preparo,
            porcao: alimento.porcao, // Usando porção do grupo
            quantidade: alimento.quantidade, // Usando quantidade do grupo
            categoriaCodigo: alimento.categoriaCodigo,
            detalhes: alimento.detalhes,
          };
        })
        .filter((item) => item !== null); // Filtra alimentos nulos

      return {
        _id: group._id,
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
  
    if (!Array.isArray(alimentoIds) || alimentoIds.length === 0 || !porcao || !quantidade) {
      setErrorMessage("Todos os campos do alimento são obrigatórios.");
      Alert.alert("Erro", "Todos os campos do alimento são obrigatórios.");
      return;
    }
  
    const alimentos: IAlimentoDieta[] = [];
  
    alimentoIds.forEach((alimento) => {
      const alimentoEncontrado = allAlimentos.find((a) => a._id === alimento._id);
  
      if (!alimentoEncontrado) {
        setErrorMessage("Alimento inválido.");
        Alert.alert("Erro", "Alimento inválido.");
        return;
      }
  
      const novoAlimento: IAlimentoDieta = {
        alimentoId: alimentoEncontrado._id,
        nome: alimentoEncontrado.nome,
        preparo: alimentoEncontrado.preparo,
        porcao: parseFloat(porcao), // Converta para float se necessário
        quantidade: parseInt(quantidade, 10), // Converta para inteiro
        categoriaCodigo: alimentoEncontrado.categoriaCodigo,
        detalhes: alimentoEncontrado.detalhes,
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
  
    const groupName = GruposEnum[formState.grupoNome as unknown as keyof typeof GruposEnum];
  
    // Atualiza o estado do grupo
    setGroup((prevState) => {
      const existingGroupIndex = prevState.findIndex((group) => group.nome === groupName);
  
      if (existingGroupIndex !== -1) {
        // Se o grupo existe, adiciona novos alimentos ao grupo existente
        const existingGroup = prevState[existingGroupIndex];
        const updatedAlimentos = [...existingGroup.alimentos, ...alimentos];
  
        // Atualiza o grupo existente na lista
        const updatedGroups = prevState.map((group, index) =>
          index === existingGroupIndex ? { ...existingGroup, alimentos: updatedAlimentos } : group
        );
  
        return updatedGroups;
      } else {
        // Cria um novo grupo se não existir
        const newGroup: IGrupo = {
          nome: groupName,
          alimentos: alimentos,
        };
        return [...prevState, newGroup];
      }
    });
  
    // Limpa o estado do formulário
    setFormState((prev) => ({
      ...prev,
      grupoNome: null, // Limpa o campo de nome do grupo para null
      alimentos: [], // Limpa a lista de alimentos
    }));
  
    Alert.alert("Sucesso", "Refeição cadastrada com sucesso!");
  };
  
  
  

  const openModal = (grupo: IGrupo) => {
    console.log("Grupo selecionado:", grupo); // Adicione esta linha
    setSelectedGrupo(grupo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGrupo(null);
  };

  const handleEditQuantity = (alimentoId: string, newQuantity: number) => {
    setGroup((prevGroups) =>
      prevGroups.map((grupo) => {
        // Atualiza apenas o grupo que contém o alimento
        const updatedAlimentos = grupo.alimentos.map((alimento) => {
          if (alimento.alimentoId === alimentoId) {
            return { ...alimento, quantidade: newQuantity }; // Atualiza a quantidade
          }
          return alimento;
        });

        return { ...grupo, alimentos: updatedAlimentos }; // Retorna o grupo atualizado
      })
    );
  };

  const handleEditPortion = (alimentoId: string, newPortion: number) => {
    // Atualiza a porção do alimento no grupo
    if (selectedGrupo) {
      const updatedAlimentos = selectedGrupo.alimentos.map((alimento) => {
        if (alimento.alimentoId === alimentoId) {
          return { ...alimento, porcao: newPortion }; // Atualiza a quantidade
        }
        return alimento; // Retorna o alimento sem alterações
      });

      // Atualiza o grupo no estado
      const updatedGroup = { ...selectedGrupo, alimentos: updatedAlimentos };

      setGroup((prevGroups) =>
        prevGroups.map((grupo) =>
          grupo._id === updatedGroup._id ? updatedGroup : grupo
        )
      );
    }
  };

  const handleRemoveAlimento = (alimentoId: string, grupoId: string) => {
    setGroup((prevGroups) => {
      // Encontra o grupo correspondente
      const grupo = prevGroups.find((g) => g._id === grupoId);

      if (grupo) {
        // Remove o alimento do grupo
        const updatedAlimentos = grupo.alimentos.filter(
          (alimento) => alimento.alimentoId !== alimentoId
        );

        // Se não houver mais alimentos, remove o grupo
        if (updatedAlimentos.length === 0) {
          // Fechar o modal se o grupo não tiver alimentos
          closeModal();
          return prevGroups.filter((g) => g._id !== grupoId); // Remove o grupo
        }

        // Se ainda houver alimentos, apenas atualiza o grupo
        return prevGroups.map((g) =>
          g._id === grupoId ? { ...g, alimentos: updatedAlimentos } : g
        );
      }

      return prevGroups; // Retorna o estado anterior se o grupo não for encontrado
    });
  };

  const handleUpdateGrupo = (updatedGrupo: IGrupo) => {
    setGroup((prevGrupos) =>
      prevGrupos.map((grupo) =>
        grupo._id === updatedGrupo._id ? updatedGrupo : grupo
      )
    );
  };

  async function createDieta(dieta: IDietaFixa) {
    try {
      await requestWithRefresh({
        method: "POST",
        url: "/dieta",
        data: dieta,
      });
      console.log("Dieta criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar a dieta:", error);
    }
  }

  async function updateDieta(dietaId: string, dieta: IDietaFixa) {
    try {
      await requestWithRefresh({
        method: "PUT",
        url: `/dieta/${dietaId}`,
        data: dieta,
      });
      console.log("Dieta atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar a dieta:", error);
    }
  }

  const cadastrarDieta = async () => {
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (groups.length === 0) {
      setErrorMessage("Todos os campos são obrigatórios.");
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    const groupsOrdenados = groupSorter.sorter(groups);

    // Cria o objeto dieta independentemente de ser edição ou criação
    let dieta: IDietaFixa = {
      diaSemana: formState.diaSemana,
      grupos: groupsOrdenados,
    };

    console.log(JSON.stringify(dieta));

    try {
      // Decide se vai atualizar ou criar a dieta
      if (isEditing) {
        dieta = {
          diaSemana: diaEdit ?? [],
          grupos: groupsOrdenados,
        };
        if (dietaId !== null) {
          await updateDieta(dietaId, dieta);
        }
      } else {
        await createDieta(dieta);
      }

      // Exibe o alerta de sucesso
      Alert.alert(
        "Sucesso",
        `Dieta ${isEditing ? "atualizada" : "cadastrada"} com sucesso!`
      );

      // Limpa os grupos e o estado do formulário
      setGroup([]);
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
    <ScrollView style={styles.container}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
        colors={['#6200ee']} // Cor do círculo de carregamento
        progressBackgroundColor={'#ffffff'} // Cor do fundo do círculo
      />
    }>
      <Text style={styles.title}>Cadastro de Dieta</Text>

      {typeof diaEdit === "undefined" && (
        <>
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
        </>
      )}

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
      <View style={styles.refeicaoContainer}>
        {groups.length > 0 ? (
          groups.map((grupo, index) => (
            <View key={grupo._id || index} style={styles.refeicaoRegistrada}>
              <TouchableOpacity onPress={() => grupo._id && handleRemoveGroup(grupo._id)}>
                <Ionicons name={"close"} size={20} color={"#000"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openModal(grupo)}>
                <Text style={styles.refeicaoRegistradaText}>{grupo.nome}</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text></Text>
        )}
      </View>
      <GroupModal
  visible={modalVisible}
  grupo={selectedGrupo}
  onClose={closeModal}
  onEditPortion={handleEditPortion}
  onEditQuantity={handleEditQuantity}
  onRemoveAlimento={handleRemoveAlimento}
  onUpdateGrupo={handleUpdateGrupo} // Passa a função de atualização
/>

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
