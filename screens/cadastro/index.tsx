import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
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
                        <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={30} color="gray" />
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
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Cadastro;
