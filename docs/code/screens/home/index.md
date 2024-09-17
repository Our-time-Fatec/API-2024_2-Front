---
title: Home
description: 'Componente principal da tela inicial do aplicativo, apresentando informações e opções de navegação.'
---

# Home

O componente `Home` é a tela inicial do aplicativo, projetada para fornecer uma interface amigável ao usuário, com opções de navegação para as telas de login e cadastro.

## Estrutura do Componente

O componente é construído utilizando React e React Native, e utiliza fontes personalizadas do Google Fonts. Abaixo estão os principais elementos e funcionalidades do componente:

### Importações

- **React e Hooks**: Importa `React`, `useEffect` e `useCallback` para gerenciar o ciclo de vida do componente.
- **Componentes do React Native**: Importa `View`, `Text`, e `Image` para a construção da interface.
- **Fontes**: Utiliza `useFonts` do `@expo-google-fonts/poppins` para carregar fontes personalizadas.
- **Splash Screen**: Importa `SplashScreen` da biblioteca `expo-splash-screen` para gerenciar a tela de carregamento.
- **Botões**: Importa `BotaoAzul` e `BotaoBranco` de componentes personalizados.
- **Estilos**: Importa estilos do arquivo `styles`.
- **Logo**: Importa a imagem do logo do aplicativo.
- **Navegação**: Importa tipos de navegação do `@react-navigation/stack` e `@react-navigation/native`.

### Tipos

Define os tipos de navegação e rota para garantir a tipagem correta das propriedades:

```typescript
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};
```

### Ciclo de Vida

- **Carregamento de Fontes**: Utiliza `useEffect` para ocultar a tela de splash assim que as fontes estão carregadas.
- **Renderização Condicional**: Retorna `null` enquanto as fontes não estão carregadas.

### Renderização

O componente renderiza a seguinte estrutura:

- Um `View` principal que contém:
  - Um `View` superior com o logo e títulos.
  - Um `Text` de boas-vindas.
  - Botões para navegação para as telas de "Login" e "Cadastro".

### Exemplo de Uso

```javascript
<Home navigation={navigation} route={route} />
```

### Estilos

Os estilos são importados do arquivo `styles` e aplicados aos componentes para garantir uma apresentação visual consistente.

## Conclusão

O componente `Home` serve como a porta de entrada para o aplicativo, oferecendo uma interface clara e opções de navegação para os usuários. É um exemplo de como integrar fontes personalizadas e gerenciar o ciclo de vida de um componente em um aplicativo React Native.