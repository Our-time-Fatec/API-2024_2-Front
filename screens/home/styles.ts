import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  containercima: {
    flex: 0.5,
  },
  containerlogo: {
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins_600SemiBold', // Correção para Poppins_600SemiBold
    fontWeight: 'bold',
    fontSize: 25,
    color: '#223A6A',
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: "Poppins_400Regular", // Correção para Poppins_400Regular
    fontSize: 20,
    color: '#407CE2',
    marginBottom: 20
  },
  welcome: {
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    marginBottom: 20, // Aumentar o marginBottom para dar mais espaço entre o texto e o botão
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 60
  },
  containerButton: {
    marginBottom: 10,
    alignSelf: 'center',
    width: "100%", // Largura do contêiner dos botões
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
