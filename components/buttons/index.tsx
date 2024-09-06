import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'

interface BotaoAzulProps{
    texto: string;
}

const BotaoAzul: React.FC<BotaoAzulProps> = ({texto}) => {
    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular
    })
    if(!fontsLoaded){
        <AppLoading />
    }
    return(
        <View>
            <TouchableOpacity style={styles.botaoazul}>
                <Text style={styles.textobotaoazul}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
};

interface BotaoBrancoProps{
    texto: string;
}

const BotaoBranco: React.FC<BotaoBrancoProps> = ({texto}) => {
    return(
        <View>
            <TouchableOpacity style={styles.botaobranco}>
                <Text style={styles.textobotaobranco}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
};

export { BotaoAzul, BotaoBranco };