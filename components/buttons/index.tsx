import React, { useEffect, useState } from 'react';
import styles from './styles';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BotaoAzul: React.FC = () => {
    return(
        <View>
            <TouchableOpacity style={styles.botao}>
                <Text>Coiso</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BotaoAzul;