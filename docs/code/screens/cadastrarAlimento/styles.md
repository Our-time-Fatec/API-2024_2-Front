---
title: styles
description: 'Estilos para a tela de cadastro de alimento, utilizando React Native e StyleSheet.'
---

# styles

Este arquivo contém os estilos utilizados na tela de cadastro de alimento. Os estilos são definidos utilizando o `StyleSheet` do React Native e incluem configurações para layout, cores e tipografia.

## Estilos

### container
```javascript
{
  flex: 1,
  flexDirection: "column",
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: colors.background
}
```
Define o contêiner principal da tela, com flexibilidade e alinhamento centralizado.

### profileImage
```javascript
{
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf: "center",
  marginBottom: 5,
}
```
Estilo para a imagem de perfil, com dimensões fixas e bordas arredondadas.

### editPhoto
```javascript
{
  textAlign: "center",
  color: "#00f",
  marginBottom: 30,
}
```
Estilo para o texto de edição da foto, centralizado e com cor azul.

### containerUp
```javascript
{
  paddingVertical: 40,
  flex: 0.5,
}
```
Estilo para a parte superior do contêiner, com espaçamento vertical.

### containerDown
```javascript
{
  flex: 0.5,
  justifyContent: "flex-end",
  paddingVertical: 40,
}
```
Estilo para a parte inferior do contêiner, alinhando os itens ao final.

### title
```javascript
{
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 30,
  marginTop: 10,
}
```
Estilo para o título, com tamanho de fonte grande e negrito.

### inputContainer
```javascript
{
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 8,
  marginBottom: 25,
  height: 60,
  width: "100%",
  maxWidth: 500,
  minWidth: 300,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
}
```
Estilo para o contêiner de entrada, com bordas, sombra e dimensões responsivas.

### input
```javascript
{
  flex: 1,
  marginLeft: 10,
  fontSize: 16,
  paddingVertical: 10,
}
```
Estilo para o campo de entrada, permitindo flexibilidade e espaçamento.

### link
```javascript
{
  color: "#007bff",
}
```
Estilo para links, com cor azul.

### button
```javascript
{
  backgroundColor: colors.blueButtonCollor,
  paddingVertical: 18,
  paddingHorizontal: "30%",
  borderRadius: 30,
  marginBottom: 10,
  width: "100%",
  maxWidth: 400,
  alignSelf: "center",
}
```
Estilo para botões, com cor de fundo e bordas arredondadas.

### buttonText
```javascript
{
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
}
```
Estilo para o texto do botão, com cor branca e centralizado.

### loginText
```javascript
{
  textAlign: "center",
}
```
Estilo para o texto de login, centralizado.

### pickerContainer
```javascript
{
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  paddingHorizontal: 10,
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 8,
  marginBottom: 25,
  height: 60,
  width: "100%",
  maxWidth: 500,
  minWidth: 300,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
}
```
Estilo para o contêiner do seletor, semelhante ao contêiner de entrada.

### picker
```javascript
{
  flex: 1,
  fontSize: 16,
}
```
Estilo para o seletor, permitindo flexibilidade e tamanho de fonte.