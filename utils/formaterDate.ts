import { Alert } from "react-native";

class DateFormater {
  public formatDateString = (text: string) => {
    let formattedDate = text.replace(/\D/g, "");
    if (formattedDate.length > 2) {
      formattedDate = `${formattedDate.substring(
        0,
        2
      )}/${formattedDate.substring(2)}`;
    }
    if (formattedDate.length > 5) {
      formattedDate = `${formattedDate.substring(
        0,
        5
      )}/${formattedDate.substring(5, 9)}`;
    }
    return formattedDate;
  };

  public dateFormater = (date: string) => {
    const dateString = date;

    const [day, month, year] = dateString
      .split("/")
      .map((part) => parseInt(part, 10));

    if (!day || !month || !year) {
      return null;
    }

    const tamanhoYear = year.toString();
    if (tamanhoYear.length < 4) {
      return;
    }

    if (day < 1 || day > 31) {
      Alert.alert("Dia inválido", "O dia deve estar entre 1 e 31.");
      return;
    }

    if (month < 1 || month > 12) {
      Alert.alert("Mês inválido", "O mês deve estar entre 1 e 12.");
      return;
    }

    const birthDate = new Date(year, month - 1, day);

    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    birthDate.setHours(hours, minutes, seconds, 0);

    return birthDate;
  };

  public isValidBirthDate = (date: string): { valid: boolean } => {
    const [day, month, year] = date
      .split("/")
      .map((part) => parseInt(part, 10));

    if (!day || !month || !year) {
      return { valid: false };
    }

    if (day < 1 || day > 31) {
      return { valid: false };
    }

    if (month < 1 || month > 12) {
      return { valid: false };
    }

    const tamanhoYear = year.toString();
    if (tamanhoYear.length !== 4) {
      return { valid: false };
    }

    return { valid: true };
  };

}

export default new DateFormater();
