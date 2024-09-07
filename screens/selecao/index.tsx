import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from "../../types/rootStack";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type SelecaoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Selecao">;
type SelecaoScreenRouteProp = RouteProp<RootStackParamList, "Selecao">;

type Props = {
    navigation: SelecaoScreenNavigationProp;
    route: SelecaoScreenRouteProp;
  };

const Selecao: React.FC<Props> = ({navigation, route}) => {
    return(
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Ionicons name="person-circle-outline" size={50} color="white" />
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>Bem vindo!</Text>
              <Text style={styles.usernameText}>Lucas Roberto</Text>
              <Text style={styles.questionText}>Como você está?</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#ccc" />
            <TextInput style={styles.searchInput} placeholder="Procurar dietas..." />
        </View>
        <View style={styles.content}>
        <Text style={styles.selectText}>Selecione um tipo de dieta:</Text>

        <TouchableOpacity style={styles.optionContainer}>
          <Image
          />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Dieta Predefinida</Text>
            <Text style={styles.optionSubtitle}>Dieta de especialistas.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <Image
          />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Dieta Personalizada</Text>
            <Text style={styles.optionSubtitle}>Dieta montada por você.</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="restaurant-outline" size={24} color="black" />
        <Ionicons name="checkmark-circle-outline" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>
    </View>
    )
}

export default Selecao;