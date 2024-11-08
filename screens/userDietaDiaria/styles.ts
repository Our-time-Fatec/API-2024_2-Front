import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8', // Fundo mais claro
    marginTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
},
  grupoContainer: {
    marginBottom: 20,
    padding: 10, // Adicionando padding ao contêiner do grupo
    backgroundColor: '#fff', // Fundo branco para grupos
    borderRadius: 10, // Arredondar os cantos
    elevation: 2, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  grupoTitle: {
    fontSize: 22, // Tamanho de fonte maior para títulos
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: colors.blueButtonCollor, // Cor do texto do título
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 6,
    // backgroundColor: '#f9f9f9',
    // borderRadius: 10,
    // elevation: 1,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.05,
    // shadowRadius: 1,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleButton: {
    width: 36, // Botão maior para melhor toque
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
    // backgroundColor: '#e0e0e0', // Fundo dos botões
    // // borderWidth: 1,
    // // borderColor: '#ccc', // Cor da borda
    // elevation: 1,
  },
  counterText: {
    fontSize: 18,
    color: '#333',
    marginHorizontal: 6,
  },
  picker: {
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
        shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  pickerText:{
    fontSize: 18
  }
});
