import React, { useEffect, useState } from 'react';
import styles from './styles';
import {BotaoAzul,BotaoBranco} from '../../components/buttons';
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logo from "../../assets/googleicon.png"
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;
type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

type Props = {
    navigation: LoginScreenNavigationProp;
    route: LoginScreenRouteProp;
  };

const Login: React.FC<Props> = ({navigation, route}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return(
        <View style={styles.container}>
            <View style={styles.containercima}>
                <Text style={styles.titulo}>Entre</Text>
            <View style={styles.containerinput}>
                <Ionicons name="mail-outline" size={20} color="rgba(163,162,163,255)" />
                <TextInput
                    style={styles.textoinput}
                    placeholder='Entre com seu email'
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="rgba(163,162,163,255)"
                />
            </View>
            <View style={styles.containerinput}>
                <Ionicons name="lock-closed-outline" size={20} color="gray" />
                <TextInput
                    style={styles.textoinput}
                    placeholder='Entre com sua senha'
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="rgba(163,162,163,255)"
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="gray" />
                </TouchableOpacity>
            </View>
                <Text style={styles.textoesqueceu}> Esqueceu a senha?</Text>
            <View style={styles.botaocontainer}>
                <BotaoAzul texto='Entre'/>
            </View>
                <Text style={styles.textocadastro}>Não possui uma conta? 
                    <Text style={styles.linkcadastro} onPress={() => navigation.navigate("Cadastro")}> Cadastre-se</Text>
                </Text>
            </View>
            <View style={styles.containerline}>
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
                <Text style={styles.buttonText}>Login google</Text>
            </TouchableOpacity>
            <View style={styles.containerbaixo}>
            </View>
        </View>
    )
}

export default Login;