import React, { useState } from "react";
import { View,Text,TextInput, TouchableOpacity, ScrollView,Alert,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import sendPasswordResetEmail from "../../hooks/email";

type RecuperarSenhaScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "RecuperarSenha"
>;
type RecuperarSenhaScreenRouteProp = RouteProp<RootStackParamList, "RecuperarSenha">;

type Props = {
  navigation: RecuperarSenhaScreenNavigationProp;
  route: RecuperarSenhaScreenRouteProp;
};

const RecuperarSenha: React.FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <View style={styles.containerUp}>
          <Text style={styles.title}>Altere sua senha</Text>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="key" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Entre com a nova senha"
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="key" size={20} color="gray" />
          <TextInput
            style={styles.input}
            placeholder="Confirme a sua nova senha"
            placeholderTextColor="rgba(163,162,163,255)"
          />
        </View>
      </ScrollView>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {loading ? "Carregando..." : "Alterar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecuperarSenha;
