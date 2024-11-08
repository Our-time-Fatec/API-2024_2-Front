---
title: styles
description: 'Estilos para a tela de questionário, definindo a aparência e o layout dos componentes.'
---

# styles

Este arquivo contém os estilos utilizados na tela de questionário. Os estilos são definidos utilizando o `StyleSheet` do React Native, permitindo a criação de um design consistente e responsivo.

## Estilos Definidos

### container
```javascript
container: {
  flex: 1,
  backgroundColor: colors.background,
  padding: 20,
  marginTop: 12,
  justifyContent: "flex-start",
}
```
- **Descrição**: Estilo principal do contêiner da tela, ocupando todo o espaço disponível com um fundo definido por `colors.background`.

### header
```javascript
header: {
  fontSize: 22,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 20,
}
```
- **Descrição**: Estilo para o cabeçalho, com fonte em negrito e centralizada.

### profileImage
```javascript
profileImage: {
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf: "center",
  marginBottom: 10,
}
```
- **Descrição**: Estilo para a imagem de perfil, com formato circular e centralizada.

### editPhoto
```javascript
editPhoto: {
  textAlign: "center",
  color: "#00f",
  marginBottom: 20,
}
```
- **Descrição**: Estilo para o texto de edição da foto, centralizado e com cor azul.

### inputContainer
```javascript
inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 10,
  padding: 13,
  marginBottom: 15,
  backgroundColor: "#f9f9f9",
  width: "80%",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
}
```
- **Descrição**: Estilo para o contêiner de entrada, com bordas arredondadas e sombra para destaque.

### input
```javascript
input: {
  flex: 1,
  marginLeft: 10,
  fontSize: 16,
}
```
- **Descrição**: Estilo para o campo de entrada, permitindo que ocupe o espaço disponível.

### iconButton
```javascript
iconButton: {
  alignItems: "center",
}
```
- **Descrição**: Estilo para o botão de ícone, centralizando seu conteúdo.

### button
```javascript
button: {
  backgroundColor: colors.blueButtonCollor,
  paddingVertical: 18,
  paddingHorizontal: "23%",
  borderRadius: 20,
  marginBottom: 10,
  width: "100%",
  maxWidth: 400,
  alignSelf: "center",
}
```
- **Descrição**: Estilo para o botão principal, com cor de fundo definida por `colors.blueButtonCollor` e bordas arredondadas.

### buttonText
```javascript
buttonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
}
```
- **Descrição**: Estilo para o texto do botão, com cor branca e centralizado.

## Exportação
Os estilos são exportados para serem utilizados em outros componentes da aplicação:
```javascript
export { styles }
```