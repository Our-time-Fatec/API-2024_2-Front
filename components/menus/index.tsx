import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';

type Props = {
  navigation: any; // Defina o tipo correto do seu stack ou navigation prop aqui
};

const FooterMenu: React.FC<Props> = ({ navigation }) => {
  const [focusedScreen, setFocusedScreen] = useState<string | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      const routeName = navigation.getState().routes[navigation.getState().index].name;
      setFocusedScreen(routeName);
    }, [navigation])
  );

  const handlePress = (screen: string) => {
    setFocusedScreen(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress('Selecao')}
      >
        <Ionicons name={focusedScreen === 'Selecao' ? "home" : "home-outline"} size={24} color={focusedScreen === 'Selecao' ? "black" : "gray"} />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress('UserDietas')}
      >
        <Ionicons name={focusedScreen === 'UserDietas' ? "restaurant" : "restaurant-outline"} size={24} color={focusedScreen === 'UserDietas' ? "black" : "gray"} />
        <Text style={styles.menuText}>Dietas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress('UserDietaDiaria')}
      >
        <Ionicons name={focusedScreen === 'UserDietaDiaria' ? "checkmark-circle" : "checkmark-circle-outline"} size={24} color={focusedScreen === 'UserDietaDiaria' ? "black" : "gray"} />
        <Text style={styles.menuText}>Check-list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress('ListAlimentos')}
      >
        <Ionicons name={focusedScreen === 'ListAlimentos' ? "search" : "search-outline"} size={24} color={focusedScreen === 'ListAlimentos' ? "black" : "gray"} />
        <Text style={styles.menuText}>Alimentos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress('AguaConsumida')}
      >
        <Ionicons name={focusedScreen === 'AguaConsumida' ? "water" : "water-outline"} size={24} color={focusedScreen === 'AguaConsumida' ? "black" : "gray"} />
        <Text style={styles.menuText}>Agua</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handlePress('Profile')}
      >
        <Ionicons name={focusedScreen === 'Profile' ? "person" : "person-outline"} size={24} color={focusedScreen === 'Profile' ? "black" : "gray"} />
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterMenu;