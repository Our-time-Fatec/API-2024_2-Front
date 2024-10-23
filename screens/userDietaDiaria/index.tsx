import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  Modal,
  Image,
  StatusBar,
} from "react-native";
import { RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";
import useDietas from "../../hooks/useDietaDiaria";
import { IAlimento } from "../../interfaces/IAlimento";
import { Ionicons } from "@expo/vector-icons";
import {
  IContagem,
  IGrupoConsumo,
} from "../../interfaces/IDieta";
import FooterMenu from "../../components/menus";
import { styles } from "./styles";
import { requestWithRefresh } from "../../services/api";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { styles as style } from "../../components/alimento/styles";
import { GruposEnum } from "../cadastrarDieta";
import { Picker } from "@react-native-picker/picker";

type UserDietaDiariaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UserDietaDiaria"
>;
type UserDietaDiariaScreenRouteProp = RouteProp<
  RootStackParamList,
  "UserDietaDiaria"
>;

type Props = {
  navigation: UserDietaDiariaScreenNavigationProp;
  route: UserDietaDiariaScreenRouteProp;
};

const UserDietaDiaria: React.FC<Props> = ({ navigation }) => {
  const isFocused = useIsFocused()
  const { dietasDiarias, refreshDietasDiarias, isEmpty } = useDietas();
  const [dietas, setDietas] = useState<IGrupoConsumo[]>([]);
  const [modalVisible, setModalVisible] = useState(false); // Estado do modal
  const [alimentoSelecionado, setAlimentoSelecionado] =
    useState<IAlimento | null>(null); // Alimento selecionado
  const [consumo, setConsumo] = useState<number | null>(null);
  const [grupoSelecionado, setGrupoSelecionado] = useState<string | null>(null); 
  
  useEffect(() => {
    if (isFocused) {
      refreshDietasDiarias();
    }
  }, [isFocused, refreshDietasDiarias]);

  useEffect(() => {
    const handleDietasDiarias = async () => {
      if (Array.isArray(dietasDiarias) && dietasDiarias.length > 0) {
        const todosGrupos = dietasDiarias
          .flatMap((dieta) => dieta.gruposConsumo ?? [])
          .reduce<IGrupoConsumo[]>((acc, grupo) => {
            // Evita grupos duplicados com base no nome
            if (!acc.some((g) => g.grupo === grupo.grupo)) {
              acc.push(grupo);
            }
            return acc;
          }, []); // Tipo do array inicial definido como IGrupoConsumo[]
        setDietas(todosGrupos);
      } else if (isEmpty) {
        navigation.navigate("UserAlimentosConsumidos");
      }
    };
  
    handleDietasDiarias();
  }, [dietasDiarias, navigation]);

  const gruposFiltrados = dietas.filter((grupo) => {
    if (!grupoSelecionado) return true; // Se nenhum grupo estiver selecionado, exibe todos
    return grupo.grupo === grupoSelecionado; // Exibe apenas os grupos selecionados
  });

  const toggleModal = () => {
    setModalVisible(!modalVisible); // Alterna a visibilidade do modal
  };

  const abrirModal = (alimento: IAlimento, consumido: number) => {
    setAlimentoSelecionado(alimento);
    setConsumo(consumido);
    toggleModal();
  };

  const aumentarQuantidade = async (
    alimentoId: string,
    porcao: number,
    nomeGrupo: string
  ) => {

    let alimento = {
      _id: alimentoId,
      porcao,
      quantidade: 1,
      nomeGrupo,
    };

    try {
      await requestWithRefresh({
        method: "POST",
        url: "/alimentoConsumido/",
        data: alimento,
      });
    } catch (error: any) {
      if (error.response?.data?.message) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert(
          "Erro",
          "Ocorreu um erro ao registrar o consumo de alimentos."
        );
      }
      console.error("Erro ao registrar o consumo de alimentos:", error);
    } finally {
      refreshDietasDiarias();
    }
  };

  const diminuirQuantidade = async (
    alimentoId: string,
    porcao: number,
    nomeGrupo: string
  ) => {

    let alimento = {
      _id: alimentoId,
      porcao,
      nomeGrupo,
    };

    try {
      await requestWithRefresh({
        method: "PUT",
        url: "/alimentoConsumido/delete",
        data: alimento,
      });
    } catch (error: any) {
      if (error.response?.data?.message) {
        Alert.alert("Erro", error.response.data.message);
      } else {
        Alert.alert("Erro", "Ocorreu um erro ao criar a dieta.");
      }
      console.error("Erro ao criar a dieta:", error);
    } finally {
      refreshDietasDiarias();
    }
  };

  const renderAlimento = ({
    item,
    grupoNome,
  }: {
    item: IContagem;
    grupoNome: string;
  }) => (
    <TouchableOpacity onPress={() => abrirModal(item.alimento, item.consumido)}>
      <View style={styles.itemContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              diminuirQuantidade(
                item.alimento.alimentoId,
                item.alimento.porcao,
                grupoNome
              )
            }
            style={styles.circleButton}
          >
            <Ionicons name="remove-circle-outline" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.counterText}>{`${item.consumido || 0}/${
            item.paraConsumir || 1
          }`}</Text>
          <TouchableOpacity
            onPress={() =>
              aumentarQuantidade(
                item.alimento.alimentoId,
                item.alimento.porcao,
                grupoNome
              )
            }
            style={styles.circleButton}
          >
            <Ionicons name="add-circle-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemText}>{`${item.alimento.nome} ${
          item.alimento.porcao || 0
        }g`}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderGrupo = ({ item }: { item: IGrupoConsumo }) => (
    <View style={styles.grupoContainer}>
      <Text style={styles.grupoTitle}>{item.grupo}</Text>
      <FlatList
        data={item.alimentos}
        renderItem={({ item: alimentoItem }) =>
          renderAlimento({ item: alimentoItem, grupoNome: item.grupo })
        }
        keyExtractor={(alimento) => alimento.alimento._id}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#f0f4f8" />

      <ScrollView style={styles.container}>
      <Text style={styles.title}>Minha dieta de hoje</Text>
      <Picker
        selectedValue={grupoSelecionado}
        onValueChange={(itemValue) => setGrupoSelecionado(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Todos os Grupos" value={null} style={styles.pickerText} />
        {Object.values(GruposEnum).map((grupo) => (
          <Picker.Item key={grupo} label={grupo} value={grupo} style={styles.pickerText}/>
        ))}
      </Picker>
        <FlatList
          data={gruposFiltrados || []}
          renderItem={renderGrupo}
          keyExtractor={(grupo) => grupo._id || "default-key"}
        />
      </ScrollView>

      {alimentoSelecionado && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={style.modalContainer}>
            <View style={style.modalContent}>
              {alimentoSelecionado.categoriaUrl ? (
                <Image
                  source={{ uri: alimentoSelecionado.categoriaUrl }}
                  style={style.modalImage}
                  resizeMode="cover"
                />
              ) : (
                <View style={style.imagePlaceholder}>
                  <Text style={style.imagePlaceholderText}>
                    Imagem não disponível
                  </Text>
                </View>
              )}
              <Text style={style.modalNome}>{alimentoSelecionado.nome}</Text>
              <Text style={style.modalInfo}>
                Categoria: {alimentoSelecionado.categoriaNome}
              </Text>
              <Text style={style.modalInfo}>
                Preparo: {alimentoSelecionado.preparo}
              </Text>

              {consumo === 0 || consumo === 1 ? (
                <>
                  <Text style={style.modalInfo}>
                    Porção a consumir: {alimentoSelecionado.porcao}g
                  </Text>
                  <Text style={style.modalInfo}>
                    Valor Energético:{" "}
                    {alimentoSelecionado.detalhes.valorEnergetico.toFixed(2)}{" "}
                    kcal
                  </Text>
                  <Text style={style.modalInfo}>
                    Proteínas:{" "}
                    {alimentoSelecionado.detalhes.proteinas.toFixed(2)}g
                  </Text>
                  <Text style={style.modalInfo}>
                    Carboidratos:{" "}
                    {alimentoSelecionado.detalhes.carboidratos.toFixed(2)}g
                  </Text>
                  <Text style={style.modalInfo}>
                    Fibras: {alimentoSelecionado.detalhes.fibras.toFixed(2)}g
                  </Text>
                  <Text style={style.modalInfo}>
                    Lipídios: {alimentoSelecionado.detalhes.lipidios.toFixed(2)}
                    g
                  </Text>
                </>
              ) : (
                <>
                  <Text style={style.modalInfo}>
                    Porção consumida:{" "}
                    {alimentoSelecionado.porcao * (consumo ?? 1)}g
                  </Text>
                  <Text style={style.modalInfo}>
                    Valor Energético total:{" "}
                    {Number(
                      (
                        alimentoSelecionado.detalhes.valorEnergetico *
                        (consumo ?? 1)
                      ).toFixed(2)
                    )}{" "}
                    kcal
                  </Text>
                  <Text style={style.modalInfo}>
                    Proteínas totais:{" "}
                    {Number(
                      alimentoSelecionado.detalhes.proteinas * (consumo ?? 1)
                    ).toFixed(2)}
                    g
                  </Text>
                  <Text style={style.modalInfo}>
                    Carboidratos totais:{" "}
                    {Number(
                      alimentoSelecionado.detalhes.carboidratos * (consumo ?? 1)
                    ).toFixed(2)}
                    g
                  </Text>
                  <Text style={style.modalInfo}>
                    Fibras totais:{" "}
                    {Number(
                      alimentoSelecionado.detalhes.fibras * (consumo ?? 1)
                    ).toFixed(2)}
                    g
                  </Text>
                  <Text style={style.modalInfo}>
                    Lipídios totais:{" "}
                    {Number(
                      alimentoSelecionado.detalhes.lipidios * (consumo ?? 1)
                    ).toFixed(2)}
                    g
                  </Text>
                </>
              )}

              <TouchableOpacity style={style.closeButton} onPress={toggleModal}>
                <Text style={style.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <FooterMenu navigation={navigation} />
    </View>
  );
};

export default UserDietaDiaria;
