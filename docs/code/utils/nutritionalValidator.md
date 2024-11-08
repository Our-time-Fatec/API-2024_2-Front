---
title: nutritionalValidator
description: 'Classe responsável pela validação dos nutrientes de um alimento com base em sua porção.'
---

# NutritionalValidator

A classe `NutritionalValidator` é responsável por validar os nutrientes de um alimento, garantindo que os valores informados estejam dentro de limites aceitáveis. Ela utiliza a interface `Detalhes` para receber as informações nutricionais e realiza cálculos com base na porção informada.

## Métodos

### `validateNutrients(detalhes: Detalhes, porcao: string): boolean`

Este método valida os nutrientes de um alimento. Ele calcula os valores nutricionais por 100g da porção informada e verifica se esses valores estão dentro dos limites estabelecidos.

#### Parâmetros

- `detalhes` (Detalhes): Um objeto que contém os detalhes nutricionais do alimento, incluindo:
  - `valorEnergetico`: Valor energético em kcal.
  - `proteinas`: Quantidade de proteínas em g.
  - `carboidratos`: Quantidade de carboidratos em g.
  - `fibras`: Quantidade de fibras em g.
  - `lipidios`: Quantidade de lipídios em g.
  
- `porcao` (string): A porção do alimento em gramas, que será utilizada para calcular os valores nutricionais.

#### Retorno

- `boolean`: Retorna `true` se todos os valores nutricionais estiverem dentro dos limites aceitáveis, ou `false` caso contrário. Se algum valor estiver fora dos limites, um alerta será exibido com uma mensagem de erro correspondente.

## Exemplo de Uso

```javascript
import NutritionalValidator from './utils/nutritionalValidator';
import { Detalhes } from '../interfaces/IAlimento';

const detalhes: Detalhes = {
  valorEnergetico: 500,
  proteinas: 20,
  carboidratos: 60,
  fibras: 10,
  lipidios: 30,
};

const porcao = "200"; // Porção em gramas

const isValid = NutritionalValidator.validateNutrients(detalhes, porcao);
console.log(isValid); // true ou false
```

## Considerações

- A classe utiliza o componente `Alert` do React Native para exibir mensagens de erro ao usuário.
- Os limites de validação são definidos como:
  - `valorEnergetico`: entre 1 e 900 kcal.
  - `proteinas`: entre 0 e 100 g.
  - `carboidratos`: entre 0 e 100 g.
  - `fibras`: entre 0 e 60 g.
  - `lipidios`: entre 0 e 100 g.