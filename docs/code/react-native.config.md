---
title: react-native.config.js
description: 'Configuração do React Native para o projeto.'
---

# react-native.config.js

O arquivo `react-native.config.js` é utilizado para configurar aspectos específicos do projeto React Native. Ele permite que você defina configurações como caminhos de assets, dependências nativas e outras opções que podem ser necessárias para o funcionamento adequado do aplicativo.

## Estrutura do Arquivo

Embora o conteúdo específico deste arquivo não esteja disponível, a estrutura típica pode incluir:

- **assets**: Diretórios de assets que devem ser vinculados ao projeto.
- **dependencies**: Dependências nativas que precisam ser integradas.
- **project**: Configurações específicas do projeto, como nome e versão.

## Exemplo de Configuração

Um exemplo básico de configuração pode ser:

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

- Certifique-se de que o caminho para os assets esteja correto para evitar problemas de carregamento.
- Este arquivo é essencial para a integração de bibliotecas nativas que não são automaticamente vinculadas pelo React Native.

Para mais informações, consulte a [documentação oficial do React Native](https://reactnative.dev/docs/configuration).