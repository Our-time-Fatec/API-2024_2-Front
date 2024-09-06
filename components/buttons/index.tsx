import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading'

interface BotaoAzulProps{
    texto: string;
    onPress: () => void;
}

const BotaoAzul: React.FC<BotaoAzulProps> = ({texto,onPress}) => {
    return(
        <View>
            <TouchableOpacity style={styles.botaoazul} onPress={onPress}>
                <Text style={styles.textobotaoazul}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
};

interface BotaoBrancoProps{
    texto: string;
    onPress: () => void;
}

const BotaoBranco: React.FC<BotaoBrancoProps> = ({texto,onPress}) => {
    return(
        <View>
            <TouchableOpacity style={styles.botaobranco} onPress={onPress}>
                <Text style={styles.textobotaobranco}>{texto}</Text>
            </TouchableOpacity>
        </View>
    );
};

export { BotaoAzul, BotaoBranco };