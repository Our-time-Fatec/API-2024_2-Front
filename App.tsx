import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Questionario from './screens/questionario';
import Selecao from './screens/selecao';
import AlimentosScreen from './screens/listAlimentos';
import PerfilScreen from './screens/profile';
import EditProfile from './screens/editProfile';
import CadastroAlimentoScreen from './screens/cadastrarAlimento';
import { RootStackParamList } from './types/rootStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAlimentosScreen from './screens/userAlimentos';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          style="dark"
          backgroundColor="#eee"
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Questionario" component={Questionario} />
          <Stack.Screen name="Selecao" component={Selecao} />
          <Stack.Screen name="ListAlimentos" component={AlimentosScreen} />
          <Stack.Screen name="Profile" component={PerfilScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="CadastroAlimento" component={CadastroAlimentoScreen} />
          <Stack.Screen name="UserAlimentos" component={UserAlimentosScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
