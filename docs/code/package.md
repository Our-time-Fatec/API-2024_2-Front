---
title: package.json
description: 'Configuração do projeto FrontEnd, incluindo dependências, scripts e configurações de teste.'
---

# package.json

O arquivo `package.json` é um componente essencial de qualquer projeto Node.js, que contém metadados relevantes sobre o projeto, incluindo suas dependências, scripts e configurações.

## Estrutura do arquivo

### Metadados

- **name**: Nome do projeto.
- **version**: Versão atual do projeto.
- **description**: Descrição breve do projeto.
- **main**: Ponto de entrada principal do aplicativo.
- **author**: Autor do projeto.
- **license**: Licença sob a qual o projeto é distribuído.

### Scripts

Os scripts definidos no `package.json` permitem executar comandos comuns de forma simplificada:

- **start**: Inicia o servidor de desenvolvimento com o Expo.
- **android**: Executa o aplicativo no ambiente Android.
- **ios**: Executa o aplicativo no ambiente iOS.
- **web**: Inicia o aplicativo para a web.
- **test**: Executa os testes utilizando Jest.

### Dependências

As dependências do projeto são listadas sob a chave `dependencies`. Aqui estão algumas das principais:

- `react`: Biblioteca principal para construção de interfaces.
- `react-native`: Framework para desenvolvimento de aplicativos móveis.
- `expo`: Conjunto de ferramentas e serviços para desenvolvimento com React Native.
- `axios`: Biblioteca para realizar requisições HTTP.
- `@react-navigation/native`: Biblioteca para navegação em aplicativos React Native.

### DevDependencies

As dependências de desenvolvimento são listadas sob a chave `devDependencies`, que incluem ferramentas necessárias apenas durante o desenvolvimento:

- `jest`: Framework de testes.
- `typescript`: Suporte para TypeScript no projeto.
- `@testing-library/react-native`: Biblioteca para testes de componentes React Native.

### Configuração do Jest

A configuração do Jest é definida na chave `jest`, que inclui:

- **preset**: Define o preset a ser utilizado, neste caso, `jest-expo`.
- **transformIgnorePatterns**: Padrões de arquivos que o Jest deve ignorar durante a transformação.
- **setupFiles**: Arquivos que devem ser executados antes dos testes.

## Conclusão

O `package.json` é fundamental para gerenciar as dependências e scripts do projeto, facilitando o desenvolvimento e a manutenção do código. É importante mantê-lo atualizado conforme novas dependências são adicionadas ou removidas do projeto.