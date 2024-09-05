import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerUp}>
                <Text style={styles.title}>Cadastre-se</Text>

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
                    <Ionicons name="mail-outline" size={20} color="rgba(163,162,163,255)" />
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
                        <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerDown}>

{/* Alterar para botao da outra branch depois */}

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>

                <Text style={styles.loginText}>
                     <Text style={styles.link}>Voltar</Text>
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        paddingHorizontal: 20,

        justifyContent: 'center',
    },
    containerUp: {
        paddingVertical: 40,
        flex: 0.5
    },
    containerDown: {
        flex: 0.5,
        justifyContent: "flex-end",
        paddingVertical: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 25,
        height: 60,
    },
    inputNome: {
        flex: 0.6,
        flexDirection: "row"
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        padding: 20
    },
    link: {
        color: '#007bff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 20,
        borderRadius: 30,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginText: {
        textAlign: 'center',
    },
});

export default Cadastro;
