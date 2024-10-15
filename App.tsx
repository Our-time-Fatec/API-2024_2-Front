import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/home';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Questionario from './screens/questionario';
import Selecao from './screens/selecao';
import AlimentosScreen from './screens/listAlimentos';
import PerfilScreen from './screens/profile';
import EditProfile from './screens/editProfile';
import CadastroAlimentoScreen from './screens/cadastrarAlimento';
import UserAlimentosScreen from './screens/userAlimentos';
import FAQs from './screens/FAQs';
import { AuthProvider, useAuth } from './context/AuthContext';
import { RootStackParamList } from './types/rootStack';
import UserDietasScreen from './screens/userDietas';
import UserAlimentosConsumidosScreen from './screens/userAlimentosConsumidos';
import DietasPredefinidas from './screens/dietasPredefinidas';
import DietasPersonalizadas from './screens/dietasPersonalizadas';
import CadastroDietaScreen from './screens/cadastrarDieta';
import SuppressWarnings from './errors/SupressedWarnings';
import AguaConsumida from './screens/aguaConsumida';
import UserDietaDiaria from './screens/userDietaDiaria';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  const { isAuthenticated } = useAuth();
  

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Selecao" component={Selecao}  />
          <Stack.Screen name="Questionario" component={Questionario} />
          <Stack.Screen name="ListAlimentos" component={AlimentosScreen} />
          <Stack.Screen name="Profile" component={PerfilScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="CadastroAlimento" component={CadastroAlimentoScreen} />
          <Stack.Screen name="UserAlimentos" component={UserAlimentosScreen} />
          <Stack.Screen name="UserAlimentosConsumidos" component={UserAlimentosConsumidosScreen} />
          <Stack.Screen name="UserDietas" component={UserDietasScreen} />
          <Stack.Screen name="FAQs" component={FAQs} />
          <Stack.Screen name="DietasPredefinidas" component={DietasPredefinidas} />
          <Stack.Screen name="DietasPersonalizadas" component={DietasPersonalizadas} />
          <Stack.Screen name="CadastroDieta" component={CadastroDietaScreen} />
          <Stack.Screen name="AguaConsumida" component={AguaConsumida} />
          <Stack.Screen name="UserDietaDiaria" component={UserDietaDiaria}/>
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" backgroundColor="#fff" />
          <SafeAreaView style={styles.container}>
          <SuppressWarnings />
            <AuthenticatedStack />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
