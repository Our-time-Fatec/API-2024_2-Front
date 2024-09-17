---
title: babel.config.js
description: 'Configuração do Babel para um projeto React Native utilizando Expo e variáveis de ambiente.'
---

# babel.config.js

Este arquivo contém a configuração do Babel para o projeto. O Babel é uma ferramenta que permite usar as últimas funcionalidades do JavaScript, convertendo o código para uma versão compatível com navegadores e ambientes mais antigos.

## Estrutura do Arquivo

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
      }],
    ],
  };
};
```

### Descrição dos Componentes

- **api.cache(true)**: Habilita o cache para melhorar o desempenho da compilação, evitando recompilações desnecessárias.
  
- **presets**: Define um conjunto de pré-configurações que o Babel deve usar. Neste caso, está utilizando o preset `babel-preset-expo`, que é otimizado para projetos Expo.

- **plugins**: Permite adicionar funcionalidades adicionais ao Babel. Aqui, o plugin `react-native-dotenv` é utilizado para carregar variáveis de ambiente a partir de um arquivo `.env`. As opções configuradas incluem:
  - **moduleName**: Define o nome do módulo que será utilizado para importar as variáveis de ambiente.
  - **path**: Especifica o caminho do arquivo `.env` que contém as variáveis de ambiente.