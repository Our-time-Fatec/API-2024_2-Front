---
title: styles
description: 'Estilos para a tela de questionário, definindo a aparência e o layout dos componentes.'
---

# styles

Este arquivo contém os estilos utilizados na tela de questionário. Os estilos são definidos utilizando a API `StyleSheet` do React Native, que permite a criação de estilos de forma otimizada.

## Estilos Definidos

### container
- **Descrição**: Estilo principal do contêiner da tela.
- **Propriedades**:
  - `flex`: 1
  - `backgroundColor`: "#fff"
  - `padding`: 20
  - `marginTop`: 12
  - `justifyContent`: "flex-start"

### header
- **Descrição**: Estilo para o cabeçalho da tela.
- **Propriedades**:
  - `fontSize`: 22
  - `fontWeight`: "bold"
  - `textAlign`: "center"
  - `marginBottom`: 20

### profileImage
- **Descrição**: Estilo para a imagem de perfil.
- **Propriedades**:
  - `width`: 100
  - `height`: 100
  - `borderRadius`: 50
  - `alignSelf`: "center"
  - `marginBottom`: 10

### editPhoto
- **Descrição**: Estilo para o texto de edição da foto.
- **Propriedades**:
  - `textAlign`: "center"
  - `color`: "#00f"
  - `marginBottom`: 10

### inputContainer
- **Descrição**: Estilo para o contêiner de entrada de texto.
- **Propriedades**:
  - `flexDirection`: "row"
  - `alignItems`: "center"
  - `borderWidth`: 1
  - `borderColor`: "#ddd"
  - `borderRadius`: 10
  - `padding`: 13
  - `marginBottom`: 15
  - `backgroundColor`: "#f9f9f9"
  - `width`: "80%"
  - `shadowColor`: "#000"
  - `shadowOffset`: { width: 0, height: 1 }
  - `shadowOpacity`: 0.1
  - `shadowRadius`: 2
  - `elevation`: 2

### input
- **Descrição**: Estilo para o campo de entrada de texto.
- **Propriedades**:
  - `flex`: 1
  - `marginLeft`: 10
  - `fontSize`: 16

### iconButton
- **Descrição**: Estilo para o botão de ícone.
- **Propriedades**:
  - `alignItems`: "center"

### button
- **Descrição**: Estilo para o botão principal.
- **Propriedades**:
  - `backgroundColor`: "#007bff"
  - `paddingVertical`: 18
  - `paddingHorizontal`: "23%"
  - `borderRadius`: 20
  - `marginBottom`: 10
  - `width`: "100%"
  - `maxWidth`: 400
  - `alignSelf`: "center"

### buttonText
- **Descrição**: Estilo para o texto dentro do botão.
- **Propriedades**:
  - `color`: "#fff"
  - `fontSize`: 16
  - `fontWeight`: "bold"
  - `textAlign`: "center"

## Exportação
Os estilos são exportados como um objeto chamado `styles`, que pode ser utilizado em componentes React Native para aplicar os estilos definidos.