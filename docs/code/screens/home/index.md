---
title: Home
description: 'Componente principal da tela inicial do aplicativo, que exibe informações e navegação para outras telas.'
---

# Home

O componente `Home` é a tela inicial do aplicativo, responsável por apresentar informações ao usuário e permitir a navegação para outras telas, como Login e Cadastro.

## Estrutura do Componente

O componente é construído utilizando React e React Native, e utiliza fontes personalizadas do Google Fonts. Abaixo estão os principais elementos e funcionalidades do componente:

### Importações

- **React e Hooks**: Importa `React`, `useEffect` e `useCallback` para gerenciar o ciclo de vida do componente.
- **Componentes do React Native**: Importa `View`, `Text`, `Image`, e `StatusBar` para a construção da interface.
- **Fontes**: Utiliza `useFonts` do `@expo-google-fonts/poppins` para carregar fontes personalizadas.
- **Splash Screen**: Utiliza `SplashScreen` do `expo-splash-screen` para gerenciar a tela de carregamento.
- **Botões**: Importa `BotaoAzul` e `BotaoBranco` de componentes personalizados.
- **Estilos**: Importa estilos do arquivo `styles`.
- **Logo**: Importa a imagem do logo do aplicativo.
- **Navegação**: Importa tipos de navegação do `@react-navigation/stack` e `@react-navigation/native`.

### Tipos

Define os tipos de navegação e rota para o componente:

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

O componente renderiza uma estrutura que inclui:

- **StatusBar**: Configura a cor de fundo da barra de status.
- **Logo e Títulos**: Exibe o logo do aplicativo e textos de boas-vindas.
- **Botões de Navegação**: Dois botões que permitem ao usuário navegar para as telas de Login e Cadastro.

### Exemplo de Uso

```javascript
<Home navigation={navigation} route={route} />
```

## Conclusão

O componente `Home` é essencial para a experiência do usuário, fornecendo uma interface amigável e opções de navegação para as funcionalidades principais do aplicativo.