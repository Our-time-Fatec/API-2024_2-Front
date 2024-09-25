import { Alert } from "react-native";
import { Detalhes } from "../interfaces/IAlimento";

class NutritionalValidator {

    public validateNutrients(detalhes: Detalhes, porcao: string) {

      const checkout: Detalhes = {
        valorEnergetico: (detalhes.valorEnergetico * 100) / parseFloat(porcao),
        proteinas: (detalhes.proteinas * 100) / parseFloat(porcao),
        carboidratos: (detalhes.carboidratos * 100) / parseFloat(porcao),
        fibras: (detalhes.fibras * 100) / parseFloat(porcao),
        lipidios: (detalhes.lipidios * 100) / parseFloat(porcao),
      };
  
      const messages = [
        { field: 'valorEnergetico', value: checkout.valorEnergetico, max: 900, min: 1, message: "Tem certeza que esse é o valor energético?" },
        { field: 'proteinas', value: checkout.proteinas, max: 100, min: 0, message: "Tem certeza que esse é o valor de proteínas?" },
        { field: 'carboidratos', value: checkout.carboidratos, max: 100, min: 0, message: "Tem certeza que esse é o valor de carboidratos?" },
        { field: 'fibras', value: checkout.fibras, max: 60, min: 0, message: "Tem certeza que esse é o valor de fibras?" },
        { field: 'lipidios', value: checkout.lipidios, max: 100, min: 0, message: "Tem certeza que esse é o valor de lipídios?" },
      ];
  
      for (const { field, value, max, min, message } of messages) {
        if (value > max || value < min) {
          Alert.alert("Erro", message);
          return false;
        }
      }
      return true;
    }
  }
  
export default new NutritionalValidator()