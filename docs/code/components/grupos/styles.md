---
title: styles
description: 'Estilos para o componente de grupos, definindo a aparência e o layout dos elementos na interface.'
---

# styles

Este arquivo contém a definição de estilos para o componente de grupos, utilizando a biblioteca `react-native` para estilização. Os estilos são organizados em um objeto criado pela função `StyleSheet.create`, que otimiza o desempenho e a manutenção dos estilos.

## Estilos Definidos

### modalContainer
```typescript
modalContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}
```
- **Descrição**: Estilo para o contêiner do modal, centralizando seu conteúdo e aplicando um fundo semi-transparente.

### modalContent
```typescript
modalContent: {
  width: "90%",
  padding: 20,
  backgroundColor: colors.background,
  borderRadius: 10,
  maxHeight: "80%",
}
```
- **Descrição**: Estilo para o conteúdo do modal, com largura de 90%, padding, cor de fundo definida a partir do arquivo de cores, bordas arredondadas e altura máxima.

### scrollViewContent
```typescript
scrollViewContent: {
  paddingBottom: 20,
}
```
- **Descrição**: Estilo para o conteúdo do ScrollView, adicionando um padding inferior.

### modalNome
```typescript
modalNome: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 10,
  alignSelf: "center",
}
```
- **Descrição**: Estilo para o nome no modal, com tamanho de fonte, peso e margens definidas.

### modalSubNome
```typescript
modalSubNome: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 10,
}
```
- **Descrição**: Estilo para o subtítulo no modal, com tamanho de fonte e peso.

### modalInfo
```typescript
modalInfo: {
  fontSize: 16,
  color: "#555",
  width: '85%',          
  maxWidth: '85%',       
  flexWrap: 'wrap',     
}
```
- **Descrição**: Estilo para informações no modal, com cor, largura e comportamento de quebra de linha.

### closeButton
```typescript
closeButton: {
  marginTop: 8,
  backgroundColor: "#2d74da",
  paddingVertical: 8,
  borderRadius: 5,
  alignItems: "center",
  width: "100%",
}
```
- **Descrição**: Estilo para o botão de fechar, com margens, cor de fundo, padding e bordas arredondadas.

### closeButtonText
```typescript
closeButtonText: {
  color: "#fff",
  fontSize: 16,
}
```
- **Descrição**: Estilo para o texto do botão de fechar, definindo a cor e o tamanho da fonte.

### alimentoContainer
```typescript
alimentoContainer: {
  paddingVertical: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
}
```
- **Descrição**: Estilo para o contêiner de alimentos, organizando os elementos em linha e distribuindo o espaço entre eles.

### editContainer
```typescript
editContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginTop: 5,
}
```
- **Descrição**: Estilo para o contêiner de edição, organizando os elementos em linha e alinhando-os verticalmente.

### input
```typescript
input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 5,
  padding: 5,
  flex: 1,
  marginRight: 5,
}
```
- **Descrição**: Estilo para o campo de entrada, definindo bordas, padding e comportamento flexível.

### saveButton
```typescript
saveButton: {
  backgroundColor: "#2d74da",
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 5,
}
```
- **Descrição**: Estilo para o botão de salvar, com cor de fundo e padding.

### saveButtonText
```typescript
saveButtonText: {
  color: "#fff",
  fontSize: 16,
}
```
- **Descrição**: Estilo para o texto do botão de salvar, definindo a cor e o tamanho da fonte.

### deleteButton
```typescript
deleteButton: {
  marginTop: 15,
  backgroundColor: "#ff4f4f",
  paddingVertical: 8,
  borderRadius: 5,
  alignItems: "center",
  width: "100%",
  borderColor: "#ff4242",
  borderWidth: 1
}
```
- **Descrição**: Estilo para o botão de deletar, com margens, cor de fundo, padding e bordas.

### deleteButtonText
```typescript
deleteButtonText: {
  color: "#fff",
  fontSize: 16
}
```
- **Descrição**: Estilo para o texto do botão de deletar, definindo a cor e o tamanho da fonte.

### contentModal
```typescript
contentModal: {
  backgroundColor: "#fafafc",
  padding: 6,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#f1f1f1",
}
```
- **Descrição**: Estilo para o conteúdo do modal, com cor de fundo, padding e bordas.

### contentWrapper
```typescript
contentWrapper: {
  gap: 5
}
```
- **Descrição**: Estilo para o wrapper de conteúdo, definindo um espaço entre os elementos.