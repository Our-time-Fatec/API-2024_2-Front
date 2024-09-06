import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  botaoazul: {
    width: "100%", // Definindo largura para 80% da tela
    backgroundColor: "#407CE2",
    borderRadius: 40,
    textAlign: "center",
    alignItems: "center",
    paddingVertical: 14, 
    paddingHorizontal: 100, 
},
  textobotaoazul: {
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
    fontSize: 20,
  },
  botaobranco: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    alignItems: "center",
    paddingVertical: 14, 
    paddingHorizontal: 60, 
    borderColor: "#407CE2",
    borderWidth: 2,
    marginTop: 15,
  },
  textobotaobranco: {
    fontFamily: "Poppins_700Bold",

    fontSize: 20,
    color: "#407CE2",
  },
});

export default styles;
