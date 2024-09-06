import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
 import Home from './screens/home';
import Cadastro from './screens/cadastro';
import Questionario from './screens/questionario';

export default function App() {
  return (
    <View style={styles.container}>
        <Questionario/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
