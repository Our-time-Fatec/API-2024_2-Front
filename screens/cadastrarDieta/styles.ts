import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  pickerContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
  },

  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  button: {
    backgroundColor: colors.blueButtonCollor,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  groupContainer: {
    marginBottom: 15,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  groupName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  alimentoText: {
    fontSize: 16,
    marginBottom: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  selectContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 5,
    //     flexDirection: "row",
    // justifyContent: "space-around"
  },
  multiSelectDropdown: {
    paddingVertical: 10,
    // paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,

  },
  multiSelectWrapper: {
    height: 'auto', // Deixa o MultiSelect ocupar o espaço necessário
    marginBottom: 5, // Espaço abaixo do componente
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  refeicaoRegistradaText: {
    fontSize: 15,
    color: '#333', // Cor do texto
  },
  refeicaoContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    flexDirection: "row",
    gap: 5
  },
  refeicaoRegistrada:{
    borderColor: "#808080",
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 8
  },
  selectContainerSemana: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    padding: 5,
    flexDirection: "column", // Coloca o checkbox abaixo do MultiSelect
    alignItems: "flex-start" // Alinha o checkbox e o texto à esquerda
  },
  multiSelectDropdownSemana: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
  },
  multiSelectWrapperSemana: {
    height: 'auto',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    width: "100%"
  },
  checkboxBase: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.blueButtonCollor,
    backgroundColor: 'transparent',
    marginBottom: 5, // Adiciona margem inferior para separar do texto
  },
  checkboxChecked: {
    backgroundColor: colors.blueButtonCollor,
  },
  checkArea: {
    flexDirection: "row", // Faz o checkbox e o texto ficarem lado a lado
    alignItems: "center", // Alinha verticalmente
    marginTop: 10,
    width: '100%',
    flexWrap: "wrap", // Permite quebra de linha
  },
  diaSemanaText: {
    fontSize: 14, // Ajusta o tamanho do texto para ficar mais legível
    marginLeft: 8, // Espaço entre o checkbox e o texto
    flexShrink: 1, // Permite que o texto quebre em linhas
  }
});

