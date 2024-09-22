import { Alert } from "react-native";
import { IUsuario } from "../interfaces/IUsuario";

class ResultChecker {
  public checkSenha = (formState: IUsuario) => {
    if (formState.senha !== formState.confirmarSenha) {
      Alert.alert(
        "Erro",
        "As senhas não coincidem. Verifique e tente novamente."
      );
      return false;
    }
    return true
  };

  public checkNascimento = (formState: IUsuario) => {
    const today = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    const birthDate = formState.dataDeNascimento;

    if (
      birthDate.getFullYear() === today.getFullYear() &&
      birthDate.getMonth() === today.getMonth() &&
      birthDate.getDate() === today.getDate()
    ) {
      Alert.alert("Data inválida", "Formato ou valor incorreto.");
      return false;
    }

    // Validações de idade
    if (birthDate > today) {
      Alert.alert(
        "Data inválida",
        "Tem certeza que você nasceu daqui a pouco?"
      );
      return false;
    } else if (birthDate > oneYearAgo) {
      Alert.alert("Data inválida", "Um pouco novo demais, não acha?");
      return false;
    }
    return true
  };

  public checkAltura = (formState:IUsuario) => {
    if (formState.altura >= 250) {
        Alert.alert("Altura inválida", "Acho que nosso aplicativo não será suficiente para um gigante como você!")
        return false;
      }
      if (formState.altura <= 80) {
        Alert.alert("Altura inválida", "Tem certeza que essa é sua altura?");
        return false
      }
      return true
  }

  public checkPeso = (formState:IUsuario) => {
    if (formState.peso >= 500 || formState.peso <= 20) {
        Alert.alert("Peso inválido", "Espertinho, tome cuidado com os seus dados!");
        return false
      }
      return true
  }
}

export default new ResultChecker();
