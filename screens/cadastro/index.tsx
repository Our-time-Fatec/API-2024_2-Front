import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type CadastroScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Cadastro"
>;
type CadastroScreenRouteProp = RouteProp<RootStackParamList, "Cadastro">;

type Props = {
  navigation: CadastroScreenNavigationProp;
  route: CadastroScreenRouteProp;
};

const Cadastro: React.FC<Props> = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [birthdate, setBirthdate] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBirthdateChange = (text: string) => {
    const numbersOnly = text.replace(/\D/g, "");
    let formattedText = "";

    if (numbersOnly.length > 0) {
      formattedText += numbersOnly.substring(0, 2);
    }
    if (numbersOnly.length > 2) {
      formattedText += "/" + numbersOnly.substring(2, 4);
    }
    if (numbersOnly.length > 4) {
      formattedText += "/" + numbersOnly.substring(4, 8);
    }

    setBirthdate(formattedText);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: keyboardVisible ? 100 : 0,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={styles.containerUp}>
          <Text style={styles.title}>Cadastre-se</Text>

          <Image
            source={{ uri: "https://via.placeholder.com/150" }} // Substitua pela URL da imagem do usuário
            style={styles.profileImage}
          />

          <TouchableOpacity>
            <Text style={styles.editPhoto}>Editar foto</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu nome"
            value={name}
            onChangeText={setName}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu sobrenome"
            value={surname}
            onChangeText={setSurname}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="rgba(163,162,163,255)"
          />
          <TextInput
            style={styles.input}
            placeholder="Entre com seu email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com sua senha"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="rgba(163,162,163,255)"
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={30}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="calendar-outline" size={24} color="black" />
          <TextInput
            placeholder="Data de nascimento (dd/mm/aaaa)"
            style={styles.input}
            keyboardType="numeric"
            value={birthdate}
            onChangeText={handleBirthdateChange}
            maxLength={10}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="barbell-outline" size={24} color="black" />
          <TextInput
            placeholder="Sua altura"
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="fitness-outline" size={24} color="black" />
          <TextInput
            placeholder="Seu peso"
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="flag-outline" size={24} color="black" />
          <TextInput
            placeholder="Seu objetivo"
            style={styles.input}
            value={goal}
            onChangeText={setGoal}
          />
        </View>

        <View style={styles.containerDown}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Questionario")}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            <Text style={styles.link} onPress={() => navigation.navigate("Home")}>
              Voltar
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cadastro;
