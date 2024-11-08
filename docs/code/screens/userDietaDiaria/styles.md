---
title: styles
description: 'Estilos para a tela de Dieta Diária, definindo a aparência e o layout dos componentes.'
---

# styles

Este arquivo contém os estilos utilizados na tela de Dieta Diária. Os estilos são definidos utilizando o `StyleSheet` do React Native, permitindo a criação de um design responsivo e consistente.

## Estilos

### container
```javascript
container: {
  flex: 1,
  padding: 16,
  backgroundColor: '#f0f4f8',
  marginTop: 10
}
```
- **Descrição**: Estilo principal do contêiner da tela, com preenchimento, cor de fundo e margem superior.

### title
```javascript
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
}
```
- **Descrição**: Estilo para o título da tela, com tamanho de fonte e peso definidos.

### grupoContainer
```javascript
grupoContainer: {
  marginBottom: 20,
  padding: 10,
  backgroundColor: '#fff',
  borderRadius: 10,
  elevation: 2,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
}
```
- **Descrição**: Estilo para o contêiner de grupos, com margens, preenchimento, cor de fundo, bordas arredondadas e efeitos de sombra.

### grupoTitle
```javascript
grupoTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 12,
  color: colors.blueButtonCollor,
}
```
- **Descrição**: Estilo para o título de cada grupo, com tamanho de fonte, alinhamento e cor.

### itemContainer
```javascript
itemContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 15,
  padding: 6,
}
```
- **Descrição**: Estilo para o contêiner de itens, utilizando flexbox para disposição horizontal.

### itemText
```javascript
itemText: {
  fontSize: 18,
  flex: 1,
  marginLeft: 15,
  color: '#333',
}
```
- **Descrição**: Estilo para o texto dos itens, com tamanho de fonte e cor.

### buttonContainer
```javascript
buttonContainer: {
  flexDirection: 'row',
  alignItems: 'center',
}
```
- **Descrição**: Estilo para o contêiner de botões, utilizando flexbox para disposição horizontal.

### circleButton
```javascript
circleButton: {
  width: 36,
  height: 36,
  borderRadius: 18,
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal: 6,
}
```
- **Descrição**: Estilo para botões circulares, com dimensões e alinhamento centralizado.

### counterText
```javascript
counterText: {
  fontSize: 18,
  color: '#333',
  marginHorizontal: 6,
}
```
- **Descrição**: Estilo para o texto do contador, com tamanho de fonte e cor.

### picker
```javascript
picker: {
  height: 50,
  marginBottom: 20,
  backgroundColor: "#fff",
  borderRadius: 10,
  elevation: 2,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
}
```
- **Descrição**: Estilo para o componente de seleção, com altura, margens e efeitos de sombra.

### pickerText
```javascript
pickerText: {
  fontSize: 18
}
```
- **Descrição**: Estilo para o texto dentro do componente de seleção, com tamanho de fonte.