---
title: styles
description: 'Estilos para o componente Dieta, utilizando React Native e StyleSheet.'
---

# styles

Este arquivo contém os estilos para o componente Dieta, utilizando a biblioteca `react-native` e o método `StyleSheet.create`. Os estilos são organizados em um objeto que define a aparência de diferentes partes do componente.

## Estilos Definidos

### card
- **Descrição**: Estilo principal do cartão que contém as informações da dieta.
- **Propriedades**:
  - `flex`: 1
  - `borderWidth`: 1
  - `borderColor`: "#ddd"
  - `borderRadius`: 8
  - `overflow`: "hidden"
  - `margin`: 8
  - `backgroundColor`: cores do tema
  - `shadowColor`: "#000"
  - `shadowOffset`: { width: 0, height: 2 }
  - `shadowOpacity`: 0.1
  - `shadowRadius`: 4
  - `elevation`: 2

### detailsContainer
- **Descrição**: Contêiner para os detalhes da dieta.
- **Propriedades**:
  - `padding`: 8

### nome
- **Descrição**: Estilo para o nome da dieta.
- **Propriedades**:
  - `fontSize`: 16
  - `fontWeight`: "bold"
  - `marginBottom`: 4

### info
- **Descrição**: Estilo para informações adicionais da dieta.
- **Propriedades**:
  - `fontSize`: 14
  - `color`: "#555"
  - `marginBottom`: 2

### modalContainer
- **Descrição**: Estilo para o contêiner do modal.
- **Propriedades**:
  - `flex`: 1
  - `justifyContent`: "center"
  - `alignItems`: "center"
  - `backgroundColor`: "rgba(0, 0, 0, 0.5)"

### modalContent
- **Descrição**: Estilo para o conteúdo do modal.
- **Propriedades**:
  - `width`: "90%"
  - `padding`: 20
  - `backgroundColor`: cores do tema
  - `borderRadius`: 10
  - `alignItems`: "center"
  - `shadowColor`: "#000"
  - `shadowOffset`: { width: 0, height: 2 }
  - `shadowOpacity`: 0.3
  - `shadowRadius`: 5
  - `elevation`: 5
  - `maxHeight`: "80%"

### scrollViewContent
- **Descrição**: Estilo para o conteúdo do ScrollView.
- **Propriedades**:
  - `paddingBottom`: 20

### minimodalContent
- **Descrição**: Estilo para o conteúdo do mini modal.
- **Propriedades**: (vazio)

### modalNome
- **Descrição**: Estilo para o nome no modal.
- **Propriedades**:
  - `fontSize`: 18
  - `fontWeight`: "bold"
  - `marginBottom`: 10

### minimodalNome
- **Descrição**: Estilo para o nome no mini modal.
- **Propriedades**:
  - `fontSize`: 15
  - `fontWeight`: "bold"

### modalInfo
- **Descrição**: Estilo para informações no modal.
- **Propriedades**:
  - `fontSize`: 16
  - `color`: "#555"
  - `marginBottom`: 8

### minimodalInfo
- **Descrição**: Estilo para informações no mini modal.
- **Propriedades**:
  - `fontSize`: 13
  - `color`: "#555"
  - `marginBottom`: 5

### closeButton
- **Descrição**: Estilo para o botão de fechar.
- **Propriedades**:
  - `marginTop`: 15
  - `backgroundColor`: "#2d74da"
  - `paddingVertical`: 8
  - `borderRadius`: 5
  - `alignItems`: "center"
  - `width`: "100%"

### closeButtonText
- **Descrição**: Estilo para o texto do botão de fechar.
- **Propriedades**:
  - `color`: "#fff"
  - `fontSize`: 16

### buttonContainer
- **Descrição**: Estilo para o contêiner de botões.
- **Propriedades**:
  - `flexDirection`: "column"
  - `justifyContent`: "space-between"
  - `paddingHorizontal`: 10
  - `paddingVertical`: 1
  - `marginBottom`: 10
  - `gap`: 3

### editButton
- **Descrição**: Estilo para o botão de editar.
- **Propriedades**:
  - `marginTop`: 5
  - `backgroundColor`: "#2d74da"
  - `paddingVertical`: 8
  - `borderRadius`: 5
  - `alignItems`: "center"
  - `flex`: 0.5

### deleteButton
- **Descrição**: Estilo para o botão de deletar.
- **Propriedades**:
  - `marginTop`: 5
  - `backgroundColor`: "#e13f2f"
  - `paddingVertical`: 8
  - `borderRadius`: 5
  - `alignItems`: "center"
  - `flex`: 0.5