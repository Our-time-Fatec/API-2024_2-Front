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
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { IUsuario } from "../../interfaces/IUsuario";
import useUsuario from "../../hooks/useUsuario";
import useUpdateUser from "../../hooks/useUpdateUser";
import FooterMenu from "../../components/menus";

type EditProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "EditProfile">;
type EditProfileScreenRouteProp = RouteProp<RootStackParamList, "EditProfile">;

type Props = {
    navigation: EditProfileScreenNavigationProp;
    route: EditProfileScreenRouteProp;
};

const EditProfile: React.FC<Props> = ({ navigation }) => {
    const { usuario, loading: loadingUsuario, error: errorUsuario } = useUsuario();
    const { updateUser, loading } = useUpdateUser();

    const [formState, setFormState] = useState<IUsuario>({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        dataDeNascimento: new Date(),
        altura: 0,
        peso: 0,
        objetivo: "Dieta de emagrecimento",
        nivelDeSedentarismo: "Sedentário",
        sexo: "Masculino",
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        if (usuario) {
            setFormState({
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                email: usuario.email,
                senha: "",
                confirmarSenha: "",
                dataDeNascimento: new Date(usuario.dataDeNascimento),
                altura: usuario.altura,
                peso: usuario.peso,
                objetivo: usuario.objetivo,
                nivelDeSedentarismo: usuario.nivelDeSedentarismo,
                sexo: usuario.sexo,
            });
        }
    }, [usuario]);

    const handleInputChange = (name: keyof IUsuario, value: any) => {
        if (name === "altura" || name === "peso") {
            const numericValue = value.trim() === "" ? 0 : parseFloat(value);
            setFormState((prevState) => ({ ...prevState, [name]: isNaN(numericValue) ? 0 : numericValue }));
        } else {
            setFormState((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleDateConfirm = (date: Date) => {
        handleInputChange("dataDeNascimento", date);
        setShowDatePicker(false);
    };

    const handleUpdate = async () => {
        if (formState.senha !== formState.confirmarSenha) {
            Alert.alert("Erro", "As senhas não coincidem. Verifique e tente novamente.");
            return;
        }

        const result = await updateUser(formState);
        if (result.success) {
            Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
            navigation.goBack();
        } else {
            Alert.alert("Erro", result.error);
        }
    };

    if (loadingUsuario) {
        return <Text>Carregando dados...</Text>;
    }

    if (errorUsuario) {
        return <Text>Erro ao carregar dados.</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}
                >
                    <View style={styles.containerUp}>
                        <Text style={styles.title}>Editar Perfil</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Nome"
                            value={formState.nome}
                            onChangeText={(text) => handleInputChange("nome", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Sobrenome"
                            value={formState.sobrenome}
                            onChangeText={(text) => handleInputChange("sobrenome", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            keyboardType="email-address"
                            value={formState.email}
                            onChangeText={(text) => handleInputChange("email", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="calendar-outline" size={24} color="black" />
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            style={styles.input}
                        >
                            <Text>
                                {formState.dataDeNascimento
                                    ? formState.dataDeNascimento.toLocaleDateString("pt-BR")
                                    : "Selecionar data"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <DateTimePickerModal
                        isVisible={showDatePicker}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={() => setShowDatePicker(false)}
                    />

                    <View style={styles.inputContainer}>
                        <Ionicons name="barbell-outline" size={24} color="black" />
                        <TextInput
                            placeholder="Altura (em cm)"
                            style={styles.input}
                            keyboardType="numeric"
                            value={formState.altura ? formState.altura.toString() : ""}
                            onChangeText={(text) => handleInputChange("altura", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="fitness-outline" size={24} color="black" />
                        <TextInput
                            placeholder="Peso (em kg)"
                            style={styles.input}
                            keyboardType="numeric"
                            value={formState.peso ? formState.peso.toString() : ""}
                            onChangeText={(text) => handleInputChange("peso", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <View style={styles.pickerContainer}>
                        <Ionicons name="walk-outline" size={24} color="black" />
                        <Picker
                            selectedValue={formState.nivelDeSedentarismo}
                            style={styles.picker}
                            onValueChange={(itemValue) =>
                                handleInputChange("nivelDeSedentarismo", itemValue)
                            }
                        >
                            <Picker.Item label="Sedentário" value="Sedentário" />
                            <Picker.Item label="Levemente ativo" value="Levemente ativo" />
                            <Picker.Item label="Moderadamente ativo" value="Moderadamente ativo" />
                            <Picker.Item label="Altamente ativo" value="Altamente ativo" />
                            <Picker.Item label="Extremamente ativo" value="Extremamente ativo" />
                        </Picker>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Ionicons name="star-outline" size={24} color="black" />
                        <Picker
                            selectedValue={formState.objetivo}
                            style={styles.picker}
                            onValueChange={(itemValue) =>
                                handleInputChange("objetivo", itemValue)
                            }
                        >
                            <Picker.Item label="Dieta de emagrecimento" value="Dieta de emagrecimento" />
                            <Picker.Item label="Dieta de Ganho de Massa Muscular" value="Dieta de Ganho de Massa Muscular" />
                            <Picker.Item label="Dieta Low Carb" value="Dieta Low Carb" />
                        </Picker>
                    </View>

                    <View style={styles.pickerContainer}>
                        <Ionicons name="male-outline" size={24} color="black" />
                        <Picker
                            selectedValue={formState.sexo}
                            style={styles.picker}
                            onValueChange={(itemValue) => handleInputChange("sexo", itemValue)}
                        >
                            <Picker.Item label="Masculino" value="Masculino" />
                            <Picker.Item label="Feminino" value="Feminino" />
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Nova senha (deixe em branco para não alterar)"
                            secureTextEntry
                            value={formState.senha}
                            onChangeText={(text) => handleInputChange("senha", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="gray" />
                        <TextInput
                            style={styles.input}
                            placeholder="Confirme a nova senha"
                            secureTextEntry
                            value={formState.confirmarSenha}
                            onChangeText={(text) => handleInputChange("confirmarSenha", text)}
                            placeholderTextColor="rgba(163,162,163,255)"
                        />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                        <Text style={styles.buttonText}>
                            {loading ? "Atualizando..." : "Atualizar Perfil"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <FooterMenu navigation={navigation} />
        </View>
    );
};

export default EditProfile;
