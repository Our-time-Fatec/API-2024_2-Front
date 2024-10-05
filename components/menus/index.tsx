import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {styles} from './styles';

type Props = {
  navigation: any; // Defina o tipo correto do seu stack ou navigation prop aqui
};

const FooterMenu: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Selecao')}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserDietas')}>
        <Ionicons name="restaurant-outline" size={24} color="black" />
        <Text style={styles.menuText}>Dietas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UserAlimentosConsumidos')}>
        <Ionicons name="checkmark-circle-outline" size={24} color="black" />
        <Text style={styles.menuText}>Check-list</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ListAlimentos')}>
        <Ionicons name="search-outline" size={24} color="black" />
        <Text style={styles.menuText}>Alimentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.menuText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;
