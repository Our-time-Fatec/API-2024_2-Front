import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 5,
  },
  editPhoto: {
    textAlign: "center",
    color: "#00f",
    marginBottom: 30,
  },
  containerUp: {
    paddingVertical: 40,
    flex: 0.5,
  },
  containerDown: {
    flex: 0.5,
    justifyContent: "flex-end",
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",    
    borderRadius: 8,
    marginBottom: 25,
    height: 60,
    width: "100%", // Altere para 100% para usar toda a largura disponível
    maxWidth: 500, // Aumente o valor do limite máximo para 500
    minWidth: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  inputNome: {
    flex: 0.6,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    paddingVertical: 10,
  },
  link: {
    color: "#007bff",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 18,
    paddingHorizontal: "30%",
    borderRadius: 30,
    marginBottom: 10,
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
  },
});

export { styles };
