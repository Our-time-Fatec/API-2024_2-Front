import React, { useEffect, useState } from 'react';
import styles from './styles';
import {BotaoAzul,BotaoBranco} from '../../components/buttons';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import logo from "../../assets/logo.png"
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type Props = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
  };

const Home: React.FC<Props> = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containercima}>
                <View style={styles.containerlogo}>
                    <Image style={styles.logo} source={logo}></Image>
                </View>
                <Text style={styles.title}>Da Vinci Care</Text>
                <Text style={styles.subtitle}>Seu agente pessoal de saúde.</Text>
            </View>
            <View>
                <Text style={styles.welcome}>Bem-Vindo!</Text>
                    <View style={styles.containerButton}>
                    <BotaoAzul texto='Entrar' onPress={() => navigation.navigate("Login")}/>
                    <BotaoBranco texto='Sign Up'/>
                </View>
            </View>
        </View>
    );
};

export default Home;
