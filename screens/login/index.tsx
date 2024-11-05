import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from "../../assets/googleicon.png";
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import useLogin from '../../hooks/useLogin';
import { ILoginRequest } from '../../interfaces/ILogin';
import styles from './styles';
import { BotaoAzul } from '../../components/buttons';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
    const [formState, setFormState] = useState<ILoginRequest>({ email: '', senha: '' });
    const { login, error, loading } = useLogin();

    const handleLogin = async () => {
        const result = await login(formState);
        if (result.success) {
            navigation.navigate('Selecao');
        }
    };

    const handleChange = (name: keyof ILoginRequest, value: string) => {
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Entre</Text>

            <View style={styles.containerinput}>
                <Ionicons name="mail-outline" size={20} color="rgba(163,162,163,255)" />
                <TextInput
                    style={styles.textoinput}
                    placeholder='Entre com seu email'
                    value={formState.email}
                    onChangeText={text => handleChange('email', text)}
                    placeholderTextColor="rgba(163,162,163,255)"
                />
            </View>

            <View style={styles.containerinput}>
                <Ionicons name="lock-closed-outline" size={20} color="gray" />
                <TextInput
                    style={styles.textoinput}
                    placeholder='Entre com sua senha'
                    secureTextEntry={true}
                    value={formState.senha}
                    onChangeText={text => handleChange('senha', text)}
                    placeholderTextColor="rgba(163,162,163,255)"
                />
            </View>

            {error && (
                <Text style={{ color: 'red', marginTop: 10, marginLeft: 10 }}>
                    {error}
                </Text>
            )}

            {/* <Text style={styles.textoesqueceu}>Esqueceu a senha?</Text> //Descomentar quando implementar funcionalidade */}

            <View style={styles.botaocontainer}>
                <BotaoAzul
                    texto='Entrar'
                    onPress={handleLogin}
                    style={{ paddingHorizontal: 14 }}
                    textStyle={{ fontSize: 18 }}
                />
            </View>

            <Text style={styles.textocadastro}>
                Não possui uma conta?
                <Text
                    style={styles.linkcadastro}
                    onPress={() => navigation.navigate("Cadastro")}
                >
                    Cadastre-se
                </Text>
            </Text>

            <Text style={styles.textocadastro}>
                <Text
                    style={styles.linkcadastro}
                    onPress={() => navigation.navigate("Redirecionamento")}
                >
                    Esqueceu a senha
                </Text>
            </Text>

            {/* <View style={styles.containerline}> //Descomentar quando implementar funcionalidade 
                <View style={styles.line} />
                <Text style={styles.ortext}>OR</Text>
                <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.button}>
                <View style={styles.iconContainer}>
                    <Image
                        source={logo}
                        style={styles.googleIcon}
                    />
                </View>
                <Text style={styles.buttonText}>Login com Google</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default Login;
