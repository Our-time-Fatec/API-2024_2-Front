---
title: styles
description: 'Estilos para o componente de detalhes da alimentação, utilizando React Native.'
---

# styles

Este arquivo contém os estilos para o componente de detalhes da alimentação, utilizando a biblioteca `react-native`. Os estilos são definidos utilizando o `StyleSheet` para garantir uma performance otimizada e uma melhor organização do código.

## Estilos Definidos

### modalContainer
```typescript
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}
```
- **Descrição**: Estilo para o contêiner do modal. Utiliza `flex` para ocupar todo o espaço disponível e centraliza seu conteúdo verticalmente. O fundo é semi-transparente.

### modalContent
```typescript
modalContent: {
  backgroundColor: '#FFFFFF',
  margin: 20,
  padding: 25,
  borderRadius: 15,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
}
```
- **Descrição**: Estilo para o conteúdo do modal. Define um fundo branco, margens, preenchimento e bordas arredondadas. Inclui propriedades de sombra para dar um efeito de elevação.

### modalTitle
```typescript
modalTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 10,
}
```
- **Descrição**: Estilo para o título do modal. Define o tamanho da fonte, peso, cor e margem inferior.

### modalText
```typescript
modalText: {
  fontSize: 16,
  color: '#555',
  textAlign: 'center',
  marginBottom: 5,
}
```
- **Descrição**: Estilo para o texto do modal. Define o tamanho da fonte, cor, alinhamento centralizado e margem inferior.

### closeButton
```typescript
closeButton: {
  marginTop: 10,
  backgroundColor: '#407CE2',
  paddingVertical: 10,
  borderRadius: 10,
  alignItems: 'center',
  width: '80%',
  elevation: 3,
}
```
- **Descrição**: Estilo para o botão de fechar. Define margens, cor de fundo, preenchimento vertical, bordas arredondadas e largura. Inclui uma elevação para efeito de destaque.

### closeButtonText
```typescript
closeButtonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '600',
}
```
- **Descrição**: Estilo para o texto do botão de fechar. Define a cor do texto, tamanho da fonte e peso.