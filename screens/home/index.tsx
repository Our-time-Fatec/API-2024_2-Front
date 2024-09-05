import React, { useEffect, useState } from 'react';
import styles from './styles';
import {BotaoAzul,BotaoBranco} from '../../components/buttons';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import logo from "../../assets/logo.png"

const Home: React.FC = () => {
    return (
        <View>
            <Image style={styles.logo} source={logo}></Image>
            <Text style={styles.title}>Da Vinci Care</Text>
            <Text style={styles.subtitle}>Seu agente pessoal de saúde.</Text>
            <Text style={styles.welcome}>Bem Vindo!</Text>
            <BotaoAzul texto='Entrar' />
            <BotaoBranco texto='Sign Up'/>
        </View>
    );
};

export default Home;
