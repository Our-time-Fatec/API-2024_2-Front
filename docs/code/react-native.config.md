---
title: react-native.config.js
description: 'Configurações específicas do React Native para o projeto.'
---

# react-native.config.js

O arquivo `react-native.config.js` é utilizado para definir configurações específicas do React Native para o seu projeto. Ele permite que você personalize o comportamento do React Native, como a configuração de dependências nativas, assets, e outras opções que podem ser necessárias para o funcionamento adequado do aplicativo.

## Estrutura do Arquivo

O conteúdo deste arquivo geralmente inclui:

- **Dependências Nativas**: Configurações para bibliotecas nativas que o projeto pode estar utilizando.
- **Assets**: Definições de onde os assets (imagens, fontes, etc.) estão localizados.
- **Configurações de Build**: Opções que podem afetar o processo de build do aplicativo.

## Exemplo de Configuração

Um exemplo típico de configuração pode ser:

```javascript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
};
```

## Considerações

- Certifique-se de que as configurações estão corretas para evitar problemas durante a construção e execução do aplicativo.
- Consulte a [documentação oficial do React Native](https://reactnative.dev/docs/configuration) para mais detalhes sobre as opções disponíveis.