---
title: styles
description: 'Estilos para a tela de cadastro, definindo a aparência e o layout dos componentes.'
---

# styles

Este arquivo contém a definição dos estilos utilizados na tela de cadastro. Os estilos são criados utilizando a API `StyleSheet` do React Native, permitindo a personalização da aparência dos componentes da interface.

## Estilos Definidos

### container
- **Tipo**: `View`
- **Descrição**: Estilo principal do contêiner da tela.
- **Propriedades**:
  - `flex`: 1
  - `flexDirection`: "column"
  - `backgroundColor`: "#fff"
  - `paddingHorizontal`: 20
  - `justifyContent`: "center"
  - `alignItems`: "center"

### profileImage
- **Tipo**: `Image`
- **Descrição**: Estilo para a imagem de perfil.
- **Propriedades**:
  - `width`: 100
  - `height`: 100
  - `borderRadius`: 50
  - `alignSelf`: "center"
  - `marginBottom`: 5

### editPhoto
- **Tipo**: `Text`
- **Descrição**: Estilo para o texto de edição da foto.
- **Propriedades**:
  - `textAlign`: "center"
  - `color`: "#00f"
  - `marginBottom`: 30

### containerUp
- **Tipo**: `View`
- **Descrição**: Estilo para a parte superior do contêiner.
- **Propriedades**:
  - `paddingVertical`: 40
  - `flex`: 0.5

### containerDown
- **Tipo**: `View`
- **Descrição**: Estilo para a parte inferior do contêiner.
- **Propriedades**:
  - `flex`: 0.5
  - `justifyContent`: "flex-end"
  - `paddingVertical`: 40

### title
- **Tipo**: `Text`
- **Descrição**: Estilo para o título da tela.
- **Propriedades**:
  - `fontSize`: 24
  - `fontWeight`: "bold"
  - `textAlign`: "center"
  - `marginBottom`: 30

### inputContainer
- **Tipo**: `View`
- **Descrição**: Estilo para o contêiner de entrada de texto.
- **Propriedades**:
  - `flexDirection`: "row"
  - `alignItems`: "center"
  - `backgroundColor`: "#f2f2f2"
  - `paddingHorizontal`: 10
  - `borderWidth`: 1
  - `borderColor`: "#ddd"
  - `borderRadius`: 8
  - `marginBottom`: 25
  - `height`: 60
  - `width`: "100%"
  - `maxWidth`: 500
  - `minWidth`: 300
  - `shadowColor`: "#000"
  - `shadowOffset`: { width: 0, height: 1 }
  - `shadowOpacity`: 0.1
  - `shadowRadius`: 2
  - `elevation`: 2

### input
- **Tipo**: `TextInput`
- **Descrição**: Estilo para o campo de entrada de texto.
- **Propriedades**:
  - `flex`: 1
  - `marginLeft`: 10
  - `fontSize`: 16
  - `paddingVertical`: 10

### link
- **Tipo**: `Text`
- **Descrição**: Estilo para links.
- **Propriedades**:
  - `color`: "#007bff"

### button
- **Tipo**: `TouchableOpacity`
- **Descrição**: Estilo para botões.
- **Propriedades**:
  - `backgroundColor`: "#007bff"
  - `paddingVertical`: 18
  - `paddingHorizontal`: "30%"
  - `borderRadius`: 30
  - `marginBottom`: 10
  - `width`: "100%"
  - `maxWidth`: 400
  - `alignSelf`: "center"

### buttonText
- **Tipo**: `Text`
- **Descrição**: Estilo para o texto dentro dos botões.
- **Propriedades**:
  - `color`: "#fff"
  - `fontSize`: 16
  - `fontWeight`: "bold"
  - `textAlign`: "center"

### loginText
- **Tipo**: `Text`
- **Descrição**: Estilo para o texto de login.
- **Propriedades**:
  - `textAlign`: "center"

### pickerContainer
- **Tipo**: `View`
- **Descrição**: Estilo para o contêiner do seletor.
- **Propriedades**:
  - `flexDirection`: "row"
  - `alignItems`: "center"
  - `backgroundColor`: "#f2f2f2"
  - `paddingHorizontal`: 10
  - `borderWidth`: 1
  - `borderColor`: "#ddd"
  - `borderRadius`: 8
  - `marginBottom`: 25
  - `height`: 60
  - `width`: "100%"
  - `maxWidth`: 500
  - `minWidth`: 300
  - `shadowColor`: "#000"
  - `shadowOffset`: { width: 0, height: 1 }
  - `shadowOpacity`: 0.1
  - `shadowRadius`: 2
  - `elevation`: 2

### picker
- **Tipo**: `Picker`
- **Descrição**: Estilo para o seletor.
- **Propriedades**:
  - `flex`: 1
  - `fontSize`: 16

## Exportação
Os estilos são exportados como um objeto chamado `styles`, permitindo que sejam utilizados em outros componentes da aplicação.