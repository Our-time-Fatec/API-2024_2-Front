import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types/rootStack';
import { createStackNavigator } from '@react-navigation/stack';
import Questionario from './screens/questionario';
import Selecao from './screens/selecao';
import AlimentosScreen from './screens/listAlimentos';
import PerfilScreen from './screens/profile';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Questionario" component={Questionario} />
        <Stack.Screen name="Selecao" component={Selecao} />
        <Stack.Screen name="ListAlimentos" component={AlimentosScreen} />
        <Stack.Screen name="Profile" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
