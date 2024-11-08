---
title: babel.config.js
description: 'Configuração do Babel para um projeto React Native utilizando Expo e suporte a variáveis de ambiente.'
---

# babel.config.js

Este arquivo contém a configuração do Babel para o projeto. O Babel é uma ferramenta que permite usar as últimas funcionalidades do JavaScript, convertendo o código para uma versão compatível com navegadores e ambientes mais antigos.

## Estrutura do arquivo

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
```

## Descrição dos componentes

- **api.cache(true)**: Habilita o cache para melhorar o desempenho da compilação, evitando recompilações desnecessárias.
  
- **presets**: Define um conjunto de pré-configurações que o Babel deve usar. Neste caso, está utilizando o preset `babel-preset-expo`, que é otimizado para projetos Expo.

- **plugins**: Permite adicionar funcionalidades adicionais ao Babel. Neste arquivo, o plugin `react-native-dotenv` é utilizado para carregar variáveis de ambiente a partir de um arquivo `.env`.

### Configuração do plugin `react-native-dotenv`

- **moduleName**: Define o nome do módulo que será utilizado para importar as variáveis de ambiente. Neste caso, é `@env`.

- **path**: Especifica o caminho do arquivo que contém as variáveis de ambiente. O padrão é `.env`.

- **blacklist**: Permite especificar variáveis que não devem ser importadas. Aqui, está definido como `null`, o que significa que não há variáveis excluídas.

- **whitelist**: Permite especificar variáveis que devem ser importadas. Também está definido como `null`, permitindo todas as variáveis.

- **safe**: Se definido como `true`, garante que todas as variáveis de ambiente sejam definidas no arquivo `.env`. Aqui, está definido como `false`.

- **allowUndefined**: Se definido como `true`, permite que variáveis de ambiente não definidas sejam utilizadas sem gerar erros. Neste caso, está definido como `true`.