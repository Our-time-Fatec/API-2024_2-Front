import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useFocusEffect } from "@react-navigation/native";
import FooterMenu from "../../components/menus";
import useUsuario from "../../hooks/useUsuario";
import styles from "./styles";
import useProfilePicture from "../../hooks/useProfilePicture";
import DietaGrafico from "../../components/grafico";
import useGrafico from "../../hooks/useGrafico";

type SelecaoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Selecao"
>;
type SelecaoScreenRouteProp = RouteProp<RootStackParamList, "Selecao">;

type Props = {
  navigation: SelecaoScreenNavigationProp;
  route: SelecaoScreenRouteProp;
};

const Selecao: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const { usuario, refreshUser } = useUsuario();
  const { dietaSemanal, refreshGrafico } = useGrafico();
  const margem = 100;

  const verificarCalorias = () => {
    const consumo = usuario?.totaisAlimentosConsumidos?.valorEnergetico || 0;
    const meta = usuario?.consumoDeCaloriaPorDia || 0;

    if (consumo > meta + margem) {
      return { texto: "Ultrapassou a meta", cor: "red" };
    } else if (consumo < meta - margem) {
      return { texto: "Ainda não atingiu a meta", cor: "orange" };
    } else {
      return { texto: "Você está dentro da meta", cor: "green" };
    }
  };

  const resultado = verificarCalorias();

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        setLoading(true); // Inicia o carregamento
        await refreshUser(); // Aguarda a atualização do usuário
        setLoading(false); // Finaliza o carregamento
      };

      fetchData();
    }, [refreshUser])
  );

  // Atualiza o email quando o usuario muda
  useEffect(() => {
    if (usuario) {
      setEmail(usuario.email);
    }
  }, [usuario]);

  const {
    image,
    loading: loadingImage,
    reloadImage,
  } = useProfilePicture(email || "");

  useFocusEffect(
    useCallback(() => {
      if (email) {
        reloadImage(); // Recarrega os dados do usuário sempre que a tela ganhar foco
      }
    }, [email, reloadImage])
  );

  const openModal = () => {
    refreshGrafico()
    setModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // if (loading || loadingImage) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   ); // Exibe um indicador de carregamento
  // }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar backgroundColor="#ADD8E6" barStyle="dark-content" />
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 60,
                  borderWidth: 2,
                  borderColor: "#FFF",
                }}
              />
            ) : (
              <Ionicons name="person-circle-outline" size={80} color="white" />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Bem vindo!</Text>
              <Text style={styles.usernameText}>{usuario?.nome}</Text>
              <Text style={styles.questionText}>Como você está?</Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.selectText}>Ingestão diária de calorias</Text>

          <TouchableOpacity style={styles.optionContainer} onPress={openModal}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>
                Meta/dia: {usuario?.consumoDeCaloriaPorDia?.toFixed(2)} Kcal
              </Text>
              <Text style={[styles.optionSubtitle, { color: resultado.cor }]}>
                {" "}
                {resultado.texto}{" "}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionContainer} disabled>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>
                Consumido:{" "}
                {usuario?.totaisAlimentosConsumidos?.valorEnergetico?.toFixed(
                  2
                ) || 0}{" "}
                Kcal
              </Text>
              <Text style={styles.optionSubtitle}>
                {usuario?.totaisAlimentosConsumidos?.proteinas?.toFixed(2) || 0}g
                Proteínas
              </Text>
              <Text style={styles.optionSubtitle}>
                {usuario?.totaisAlimentosConsumidos?.carboidratos?.toFixed(2) || 0}g
                Carboidratos
              </Text>
              <Text style={styles.optionSubtitle}>
                {usuario?.totaisAlimentosConsumidos?.fibras?.toFixed(2) || 0}g Fibras
              </Text>
              <Text style={styles.optionSubtitle}>
                {usuario?.totaisAlimentosConsumidos?.lipidios?.toFixed(2) || 0}g
                Lipídios
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {dietaSemanal && (
        <DietaGrafico
          isVisible={isModalVisible}
          dietaSemanal={dietaSemanal} // Passa os dados da dieta
          onClose={closeModal}
          meta={usuario?.consumoDeCaloriaPorDia || 0}
        />
      )}

      <FooterMenu navigation={navigation} />
    </View>
  );
};

export default Selecao;
