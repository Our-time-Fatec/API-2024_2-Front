---
title: formaterDate
description: 'Classe utilitária para formatação de datas em strings e validação de datas de nascimento.'
---

# formaterDate

A classe `DateFormater` fornece métodos para formatar strings de data e validar datas de nascimento. É uma ferramenta útil para garantir que as entradas de data estejam no formato correto e sejam válidas.

## Métodos

### `formatDateString(text: string): string`

Formata uma string de data no formato `DD/MM/YYYY`. Remove todos os caracteres não numéricos e adiciona as barras (/) nos locais apropriados.

**Parâmetros:**
- `text`: A string de data a ser formatada.

**Retorno:**
- Retorna a string formatada.

### `dateFormater(date: string): Date | null`

Converte uma string de data no formato `DD/MM/YYYY` em um objeto `Date`. Se a data não for válida, retorna `null`.

**Parâmetros:**
- `date`: A string de data a ser convertida.

**Retorno:**
- Retorna um objeto `Date` se a data for válida, ou `null` se não for.

### `isValidBirthDate(date: string): { valid: boolean }`

Valida se uma string de data no formato `DD/MM/YYYY` representa uma data de nascimento válida.

**Parâmetros:**
- `date`: A string de data a ser validada.

**Retorno:**
- Retorna um objeto com a propriedade `valid`, que indica se a data é válida (`true`) ou não (`false`).

## Exemplo de Uso

```javascript
import DateFormater from 'utils/formaterDate';

const formattedDate = DateFormater.formatDateString("31012023"); // "31/01/2023"
const birthDate = DateFormater.dateFormater("31/01/2023"); // Date object
const isValid = DateFormater.isValidBirthDate("31/01/2023"); // { valid: true }
```

## Considerações

- A classe utiliza o componente `Alert` do React Native para notificar o usuário sobre datas inválidas.
- É importante garantir que o ano tenha quatro dígitos para que a validação funcione corretamente.