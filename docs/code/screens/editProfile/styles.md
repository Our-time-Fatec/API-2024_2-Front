---
title: styles
description: 'Estilos para a tela de edição de perfil no aplicativo React Native.'
---

# styles

Este arquivo contém a definição de estilos para a tela de edição de perfil em um aplicativo React Native. Os estilos são criados utilizando a API `StyleSheet` do React Native, que permite a criação de estilos de forma otimizada.

## Estrutura dos Estilos

Os estilos são organizados em um objeto que é exportado para ser utilizado em componentes React. Abaixo estão os principais estilos definidos:

- **container**: Estilo principal que define a estrutura da tela, com flexbox para centralização e espaçamento.
- **profileImage**: Estilo para a imagem de perfil, com dimensões e bordas arredondadas.
- **editPhoto**: Estilo para o texto que indica a edição da foto, com alinhamento e cor.
- **containerUp**: Estilo para a parte superior da tela, com espaçamento vertical.
- **containerDown**: Estilo para a parte inferior da tela, com alinhamento ao final.
- **title**: Estilo para o título da tela, com tamanho e peso da fonte.
- **inputContainer**: Estilo para o contêiner de entrada de texto, com bordas e sombreamento.
- **input**: Estilo para o campo de entrada de texto, com margens e tamanho da fonte.
- **link**: Estilo para links, com cor específica.
- **button**: Estilo para botões, com cor de fundo e espaçamento.
- **buttonText**: Estilo para o texto dentro dos botões, com cor e alinhamento.
- **loginText**: Estilo para texto de login, centralizado.
- **pickerContainer**: Estilo para o contêiner do seletor, semelhante ao inputContainer.
- **picker**: Estilo para o seletor, com tamanho de fonte.

## Exportação

Os estilos são exportados como um objeto chamado `styles`, permitindo que sejam importados e utilizados em outros componentes da aplicação. 

```javascript
export { styles };
``` 

Utilize esses estilos para garantir uma aparência consistente e responsiva na tela de edição de perfil do seu aplicativo.