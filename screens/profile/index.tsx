import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/rootStack";
import { RouteProp } from "@react-navigation/native";
import FooterMenu from "../../components/menus";
import useUsuario from "../../hooks/useUsuario"; // Certifique-se de que o caminho está correto
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { styles } from "./styles";
import useProfilePicture from "../../hooks/useProfilePicture";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const PerfilScreen: React.FC<Props> = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_400Regular,
  });

  const { usuario, loading, error, refreshUser } = useUsuario(); // Adicione a função de refreshUser aqui
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useFocusEffect(
    useCallback(() => {
      refreshUser(); // Recarrega os dados do usuário sempre que a tela ganhar foco
    }, [refreshUser])
  );

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("refreshToken");
      await AsyncStorage.removeItem("usuario");
      setIsAuthenticated(false);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível realizar o logout. Tente novamente."
      );
    }
  };

  const handleEdit = async () => {
    navigation.navigate("EditProfile");
  };

  const { image, reloadImage } = useProfilePicture(
    usuario ? usuario.email : ""
  );

  useFocusEffect(
    useCallback(() => {
      reloadImage(); // Recarrega os dados do usuário sempre que a tela ganhar foco
    }, [reloadImage])
  );

  // if (loading) {
  //     return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  // }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
          <StatusBar backgroundColor="#f0f4f8" />

      <ScrollView style={styles.content}>
        <View style={styles.profileSection}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={[{ width: 120, height: 120, borderRadius: 60, marginBottom: 2, borderWidth: 2, borderColor: "#FFF" }]}
            />
          ) : loading ? (
            <View
              style={{
                width: 120,
                height: 120,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="small" color="gray" />
            </View>
          ) : (
            <Ionicons name="person-circle-outline" size={120} color="gray" style={{marginBottom: 2}}/>
          )}
          <Text style={styles.profileName}>
            {usuario?.nome} {usuario?.sobrenome}
          </Text>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="calendar-outline" size={24} color="#2d74da" />

            <Text style={styles.infoLabel}>Idade</Text>
            <Text style={styles.infoValue}>{usuario?.idade ?? "N/A"}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="man-outline" size={24} color="#2d74da" />
            <Text style={styles.infoLabel}>Altura</Text>
            <Text style={styles.infoValue}>{usuario?.altura} cm</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="scale-outline" size={24} color="#2d74da" />
            <Text style={styles.infoLabel}>Peso</Text>
            <Text style={styles.infoValue}>{usuario?.peso} Kg</Text>
          </View>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="trophy-outline" size={24} color="#2d74da" />
            <Text style={styles.infoLabel}>Objetivo</Text>
            <Text style={styles.infoValue}>{usuario?.objetivo ?? "N/A"}</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="people-outline" size={24} color="#2d74da" />
            <Text style={styles.infoLabel}>Nível de Sedentarismo</Text>
            <Text style={styles.infoValue}>
              {usuario?.nivelDeSedentarismo ?? "N/A"}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="flame-outline" size={24} color="#2d74da" />
            <Text style={styles.infoLabel}>Gasto de Calorias/dia</Text>
            <Text style={styles.infoValue}>
              {usuario?.gastoDeCaloria?.toFixed(2) ?? "N/A"}
            </Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <TouchableOpacity style={styles.menuItem} onPress={handleEdit}>
            <View style={styles.circle}>
              <SimpleLineIcons name="pencil" size={22} color="#2d74da" />
            </View>
            <Text style={styles.menuText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("UserDietas")}
          >
            <View style={styles.circle}>
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                size={24}
                color="#2d74da"
              />
            </View>
            <Text style={styles.menuText}>Minhas Dietas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("UserAlimentos")}
          >
            <View style={styles.circle}>
              <Ionicons
                name="document-text-outline"
                size={24}
                color="#2d74da"
              />
            </View>
            <Text style={styles.menuText}>Alimentos Cadastrados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate("FAQs")}
          >
            <View style={styles.circle}>
              <Ionicons name="chatbubble-outline" size={24} color="#2d74da" />
            </View>
            <Text style={styles.menuText}>FAQs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <View style={styles.circle}>
              <Ionicons name="log-out-outline" size={24} color="#2d74da" />
            </View>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <FooterMenu navigation={navigation} />
    </View>
  );
};

export default PerfilScreen;
