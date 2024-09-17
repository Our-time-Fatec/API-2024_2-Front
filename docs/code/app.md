---
title: App
description: 'Componente principal da aplicação que gerencia a navegação e autenticação do usuário.'
---

# App

O componente `App` é a entrada principal da aplicação React Native. Ele configura a navegação e o contexto de autenticação, além de garantir que a interface do usuário esteja dentro de uma área segura.

## Estrutura do Componente

### Importações

O componente importa várias bibliotecas e componentes necessários:

- **React**: Biblioteca principal para construção de interfaces.
- **expo-status-bar**: Para gerenciar a barra de status.
- **react-native**: Para componentes nativos como `View` e `StyleSheet`.
- **@react-navigation/native** e **@react-navigation/stack**: Para gerenciar a navegação entre telas.
- **react-native-safe-area-context**: Para garantir que o conteúdo não sobreponha áreas seguras do dispositivo.
- **Componentes de Tela**: Importa as telas que serão utilizadas na navegação.

### Navegação

O componente utiliza um `Stack.Navigator` para definir a navegação entre diferentes telas da aplicação. A navegação é condicionada ao estado de autenticação do usuário:

- **Usuário Autenticado**: Se o usuário estiver autenticado, as seguintes telas são exibidas:
  - Selecao
  - Questionario
  - ListAlimentos
  - Profile
  - EditProfile
  - CadastroAlimento
  - UserAlimentos
  - UserAlimentosConsumidos
  - UserDietas
  - FAQs

- **Usuário Não Autenticado**: Se o usuário não estiver autenticado, as seguintes telas são exibidas:
  - Home
  - Cadastro
  - Login

### Contexto de Autenticação

O `AuthProvider` é utilizado para fornecer o contexto de autenticação a toda a aplicação, permitindo que os componentes acessem o estado de autenticação.

### Estilos

O estilo do componente é definido utilizando `StyleSheet.create`, garantindo que o container principal ocupe todo o espaço disponível.

## Exemplo de Uso

Para utilizar o componente `App`, basta importá-lo e renderizá-lo em um arquivo de entrada, como `index.js` ou `index.tsx`.

```javascript
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

## Conclusão

O componente `App` é fundamental para a estrutura da aplicação, gerenciando a navegação e a autenticação de forma eficiente.