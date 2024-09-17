---
title: FooterMenu
description: 'Componente de menu de rodapé para navegação entre telas no aplicativo.'
---

# FooterMenu

O componente `FooterMenu` é um menu de rodapé que permite a navegação entre diferentes telas do aplicativo. Ele utiliza ícones do pacote `Ionicons` para representar visualmente cada opção de menu.

## Props

### `navigation`

- **Tipo**: `any`
- **Descrição**: Propriedade que representa o objeto de navegação. Deve ser passado a partir do stack de navegação do React Navigation.

## Estrutura do Componente

O componente é composto por uma `View` que contém vários `TouchableOpacity`, cada um representando uma opção de menu. Ao clicar em uma opção, o usuário é redirecionado para a tela correspondente.

### Opções de Menu

- **Home**: Navega para a tela 'Selecao'.
- **Dietas**: Navega para a tela 'UserDietas'.
- **Check-list**: Navega para a tela 'UserAlimentosConsumidos'.
- **Alimentos**: Navega para a tela 'ListAlimentos'.
- **Perfil**: Navega para a tela 'Profile'.

## Estilos

Os estilos são definidos utilizando `StyleSheet` do React Native:

- **footer**: Estilo do contêiner do menu, com fundo branco, disposição em linha e sombra.
- **menuItem**: Estilo para cada item do menu, centralizando o conteúdo.
- **menuText**: Estilo do texto do menu, com tamanho de fonte e cor definidos.

## Exemplo de Uso

```jsx
import FooterMenu from './components/menus/index';

const App = () => {
  return (
    <NavigationContainer>
      {/* Outras telas */}
      <FooterMenu navigation={navigation} />
    </NavigationContainer>
  );
};
```

## Exportação

O componente é exportado como padrão para ser utilizado em outras partes do aplicativo.