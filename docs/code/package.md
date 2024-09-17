---
title: package.json
description: 'Configuração do projeto FrontEnd, incluindo dependências e scripts.'
---

# package.json

O arquivo `package.json` é um componente essencial de qualquer projeto Node.js, incluindo aplicações React Native. Ele contém metadados relevantes sobre o projeto, como nome, versão, descrição, scripts e dependências.

## Estrutura do arquivo

```json
{
  "name": "api-2024_2-front",
  "version": "1.0.0",
  "description": "FrontEnd",
  "main": "expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@expo-google-fonts/inter": "^0.2.3",
    "@expo-google-fonts/poppins": "^0.2.3",
    "@expo/metro-runtime": "~3.2.3",
    "@react-native-async-storage/async-storage": "^2.0.0",
    "@react-native-picker/picker": "^2.8.0",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/stack": "^6.4.1",
    "axios": "^1.7.7",
    "expo": "^51.0.32",
    "expo-app-loading": "^2.1.1",
    "expo-font": "~12.0.10",
    "expo-splash-screen": "~0.27.5",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.74.5",
    "react-native-datepicker": "^1.7.2",
    "react-native-dotenv": "^3.4.11",
    "react-native-modal-datetime-picker": "^18.0.0",
    "react-native-safe-area-context": "^4.11.0",
    "react-native-web": "~0.19.10",
    "typescript": "~5.3.3"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.45",
    "@types/react-native-datepicker": "^1.7.6",
    "typescript": "^5.1.3"
  }
}
```

## Campos principais

- **name**: Nome do projeto.
- **version**: Versão atual do projeto.
- **description**: Breve descrição do projeto.
- **main**: Ponto de entrada principal da aplicação.
- **scripts**: Comandos que podem ser executados via terminal.
  - `start`: Inicia o servidor de desenvolvimento.
  - `android`: Inicia o aplicativo no emulador Android.
  - `ios`: Inicia o aplicativo no emulador iOS.
  - `web`: Inicia o aplicativo na web.
- **dependencies**: Lista de pacotes necessários para o funcionamento do projeto.
- **devDependencies**: Lista de pacotes necessários apenas para desenvolvimento.

## Dependências

As dependências incluem bibliotecas essenciais para o funcionamento do projeto, como:

- **expo**: Framework para desenvolvimento de aplicações React Native.
- **axios**: Biblioteca para fazer requisições HTTP.
- **@react-navigation/native**: Biblioteca para navegação em aplicações React Native.

## Conclusão

O arquivo `package.json` é fundamental para gerenciar as dependências e scripts de um projeto React Native, facilitando o desenvolvimento e a manutenção da aplicação.