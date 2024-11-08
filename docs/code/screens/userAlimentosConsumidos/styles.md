---
title: styles
description: 'Estilos para a tela de Alimentos Consumidos do aplicativo.'
---

# styles

Este arquivo contém os estilos utilizados na tela de Alimentos Consumidos do aplicativo. Os estilos são definidos utilizando a API `StyleSheet` do React Native, que permite a criação de estilos de forma otimizada.

## Estilos Definidos

### container
```typescript
container: {
  flex: 1,
  padding: 16,
  backgroundColor: "#f0f4f8"
}
```
- **flex**: Define o layout flexível, ocupando todo o espaço disponível.
- **padding**: Adiciona um espaçamento interno de 16 unidades.
- **backgroundColor**: Define a cor de fundo como um tom claro.

### title
```typescript
title: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 10,
}
```
- **fontSize**: Define o tamanho da fonte como 24 unidades.
- **fontWeight**: Define o peso da fonte como negrito.
- **marginBottom**: Adiciona uma margem inferior de 10 unidades.

### row
```typescript
row: {
  justifyContent: "space-between",
}
```
- **justifyContent**: Alinha os itens dentro da linha com espaço igual entre eles.

### loadMoreButton
```typescript
loadMoreButton: {
  padding: 10,
  alignItems: "center",
}
```
- **padding**: Adiciona um espaçamento interno de 10 unidades.
- **alignItems**: Centraliza os itens dentro do botão.

### loadMoreText
```typescript
loadMoreText: {
  fontSize: 16,
  color: "#007bff",
}
```
- **fontSize**: Define o tamanho da fonte como 16 unidades.
- **color**: Define a cor do texto como um tom de azul.

### loadingText
```typescript
loadingText: {
  textAlign: "center",
  paddingVertical: 10,
  fontSize: 16,
}
```
- **textAlign**: Centraliza o texto.
- **paddingVertical**: Adiciona um espaçamento vertical de 10 unidades.
- **fontSize**: Define o tamanho da fonte como 16 unidades.