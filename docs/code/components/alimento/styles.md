---
title: styles
description: 'Estilos para o componente Alimento, definindo a aparência e o layout dos elementos.'
---

# styles

Este arquivo contém os estilos utilizados no componente Alimento, implementados com o `StyleSheet` do React Native. Os estilos são organizados em um objeto que define a aparência de diferentes partes do componente.

## Estilos Definidos

### card
- **Descrição**: Estilo principal do cartão que contém o alimento.
- **Propriedades**:
  - `flex`: 1
  - `borderWidth`: 1
  - `borderColor`: '#ddd'
  - `borderRadius`: 8
  - `overflow`: 'hidden'
  - `margin`: 8
  - `backgroundColor`: '#fff'
  - `shadowColor`: '#000'
  - `shadowOffset`: { width: 0, height: 2 }
  - `shadowOpacity`: 0.1
  - `shadowRadius`: 4
  - `elevation`: 2
  - `justifyContent`: 'space-between'

### imageContainer
- **Descrição**: Contêiner para a imagem do alimento.
- **Propriedades**:
  - `width`: '100%'
  - `height`: 100
  - `justifyContent`: 'center'
  - `alignItems`: 'center'
  - `backgroundColor`: '#f0f0f0'

### image
- **Descrição**: Estilo da imagem do alimento.
- **Propriedades**:
  - `width`: '100%'
  - `height`: '100%'
  - `borderRadius`: 8

### imagePlaceholder
- **Descrição**: Estilo para o espaço reservado da imagem.
- **Propriedades**:
  - `width`: '100%'
  - `height`: '100%'
  - `justifyContent`: 'center'
  - `alignItems`: 'center'
  - `backgroundColor`: '#e0e0e0'
  - `borderRadius`: 8

### imagePlaceholderText
- **Descrição**: Texto exibido no espaço reservado da imagem.
- **Propriedades**:
  - `color`: '#888'
  - `fontSize`: 14

### detailsContainer
- **Descrição**: Contêiner para os detalhes do alimento.
- **Propriedades**:
  - `padding`: 8

### nome
- **Descrição**: Estilo para o nome do alimento.
- **Propriedades**:
  - `fontSize`: 16
  - `fontWeight`: 'bold'
  - `marginBottom`: 4

### info
- **Descrição**: Estilo para informações adicionais do alimento.
- **Propriedades**:
  - `fontSize`: 14
  - `color`: '#555'
  - `marginBottom`: 2

### modalContainer
- **Descrição**: Estilo do contêiner do modal.
- **Propriedades**:
  - `flex`: 1
  - `justifyContent`: 'center'
  - `alignItems`: 'center'
  - `backgroundColor`: 'rgba(0, 0, 0, 0.5)'

### modalContent
- **Descrição**: Estilo do conteúdo do modal.
- **Propriedades**:
  - `width`: '90%'
  - `padding`: 20
  - `backgroundColor`: '#fff'
  - `borderRadius`: 10
  - `alignItems`: 'center'
  - `shadowColor`: '#000'
  - `shadowOffset`: { width: 0, height: 2 }
  - `shadowOpacity`: 0.3
  - `shadowRadius`: 5
  - `elevation`: 5

### modalImage
- **Descrição**: Estilo da imagem no modal.
- **Propriedades**:
  - `width`: '100%'
  - `height`: 150
  - `borderRadius`: 10
  - `marginBottom`: 15

### modalNome
- **Descrição**: Estilo do nome no modal.
- **Propriedades**:
  - `fontSize`: 18
  - `fontWeight`: 'bold'
  - `marginBottom`: 10

### modalInfo
- **Descrição**: Estilo das informações no modal.
- **Propriedades**:
  - `fontSize`: 16
  - `color`: '#555'
  - `marginBottom`: 8
  - `textAlign`: 'center'
  - `flexWrap`: 'wrap'
  - `maxWidth`: '80%'

### closeButton
- **Descrição**: Estilo do botão de fechar no modal.
- **Propriedades**:
  - `marginTop`: 5
  - `backgroundColor`: '#e13f2f'
  - `paddingVertical`: 10
  - `borderRadius`: 5
  - `alignItems`: 'center'
  - `width`: '100%'

### closeButtonText
- **Descrição**: Estilo do texto do botão de fechar.
- **Propriedades**:
  - `color`: '#fff'
  - `fontSize`: 16

### buttonContainer
- **Descrição**: Contêiner para os botões de ação.
- **Propriedades**:
  - `flexDirection`: 'column'
  - `justifyContent`: 'space-between'
  - `paddingHorizontal`: 10
  - `paddingVertical`: 1
  - `marginBottom`: 10
  - `gap`: 3
  - `width`: "100%"

### editButton
- **Descrição**: Estilo do botão de editar.
- **Propriedades**:
  - `marginTop`: 5
  - `backgroundColor`: '#2d74da'
  - `paddingVertical`: 10
  - `borderRadius`: 5
  - `alignItems`: 'center'
  - `flex`: 0.5

### deleteButton
- **Descrição**: Estilo do botão de deletar.
- **Propriedades**:
  - `marginTop`: 5
  - `backgroundColor`: '#e13f2f'
  - `paddingVertical`: 10
  - `borderRadius`: 5
  - `alignItems`: 'center'
  - `flex`: 0.5

### input
- **Descrição**: Estilo do campo de entrada.
- **Propriedades**:
  - `width`: '100%'
  - `padding`: 10
  - `borderColor`: '#ddd'
  - `borderWidth`: 1
  - `borderRadius`: 5
  - `marginBottom`: 10
  - `textAlign`: 'center'

### confirmButton
- **Descrição**: Estilo do botão de confirmação.
- **Propriedades**:
  - `backgroundColor`: '#2d74da'
  - `paddingVertical`: 10
  - `borderRadius`: 5
  - `alignItems`: 'center'
  - `width`: '100%'

### contentWrapper
- **Descrição**: Estilo do contêiner de conteúdo.
- **Propriedades**:
  - `flex`: 1
  - `justifyContent`: "flex-start"

### picker
- **Descrição**: Estilo do seletor.
- **Propriedades**:
  - `height`: 50
  - `marginBottom`: 5
  - `borderColor`: '#ddd'
  - `borderWidth`: 1
  - `borderRadius`: 5
  - `width`: "100%"

### pickerContainer
- **Descrição**: Estilo do contêiner do seletor.
- **Propriedades**:
  - `marginBottom`: 10
  - `borderWidth`: 1
  - `borderColor`: '#ddd'
  - `borderRadius`: 5
  - `padding`: 5
  - `width`: "100%"