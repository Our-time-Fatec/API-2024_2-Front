import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/home';
import EsqueceuSenha from './screens/esqueceuSenha';
import RecuperarSenha from './screens/recuperarSenha';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Questionario from './screens/questionario';
import Selecao from './screens/selecao';
import AlimentosScreen from './screens/listAlimentos';
import PerfilScreen from './screens/profile';
import EditProfile from './screens/editProfile';
import CadastroAlimentoScreen from './screens/cadastrarAlimento';
import UserAlimentosScreen from './screens/userAlimentos';
import Redirecionamento from './screens/redirecionamento';
import FAQs from './screens/FAQs';
import { AuthProvider, useAuth } from './context/AuthContext';
import { RootStackParamList } from './types/rootStack';
import UserDietasScreen from './screens/userDietas';
import UserAlimentosConsumidosScreen from './screens/userAlimentosConsumidos';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Selecao" component={Selecao} />
          <Stack.Screen name="Questionario" component={Questionario} />
          <Stack.Screen name="ListAlimentos" component={AlimentosScreen} />
          <Stack.Screen name="Profile" component={PerfilScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="CadastroAlimento" component={CadastroAlimentoScreen} />
          <Stack.Screen name="UserAlimentos" component={UserAlimentosScreen} />
          <Stack.Screen name="UserAlimentosConsumidos" component={UserAlimentosConsumidosScreen} />
          <Stack.Screen name="UserDietas" component={UserDietasScreen} />
          <Stack.Screen name="FAQs" component={FAQs} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
          <Stack.Screen name="Redirecionamento" component={Redirecionamento} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  const linking = {
    prefixes: ['app://'],
    config: {
      screens: {
        Home: 'home',
        Cadastro: 'cadastro',
        Login: 'login',
        EsqueceuSenha: 'esqueceu-senha',
        RecuperarSenha: 'recuperar-senha',
      },
    },
  };

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer linking={linking}>
          <StatusBar style="dark" backgroundColor="#fff" />
          <DeepLinkHandler />
          <SafeAreaView style={styles.container}>
            <AuthenticatedStack />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const DeepLinkHandler = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const handleDeepLink = (url: string) => {
      const route = url.replace(/.*?:\/\//g, '');
      const emailMatch = route.match(/email=([^&]+)/);
      const email = emailMatch ? decodeURIComponent(emailMatch[1]) : null;

      if (route.includes('recuperar-senha') && email) {
        navigation.navigate('RecuperarSenha', { email });
      } else {
        Alert.alert('Link inválido');
      }
    };

    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleDeepLink(url);
    });

    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink(url);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [navigation]);

  return null; // Este componente não precisa renderizar nada
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
