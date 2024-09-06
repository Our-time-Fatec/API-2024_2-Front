import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface BotaoAzulProps{
    texto: string;
}

const BotaoAzul: React.FC<BotaoAzulProps> = ({texto}) => {
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