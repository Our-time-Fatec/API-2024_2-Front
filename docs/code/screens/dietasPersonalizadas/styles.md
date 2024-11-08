---
title: styles
description: 'Estilos para a tela de Dietas Personalizadas no aplicativo.'
---

# styles

Este arquivo contém os estilos utilizados na tela de Dietas Personalizadas do aplicativo. Os estilos são definidos utilizando a API `StyleSheet` do React Native, que permite a criação de estilos de forma otimizada.

## Estilos Definidos

### container
```javascript
container: {
  flex: 1,
  paddingHorizontal: 16,
  backgroundColor: colors.background,
}
```
- **Descrição**: Estilo principal do contêiner da tela, ocupando todo o espaço disponível (`flex: 1`), com um preenchimento horizontal de 16 e um fundo definido pela cor de fundo do tema.

### header
```javascript
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginVertical: 20,
  alignSelf: 'center',
}
```
- **Descrição**: Estilo para o cabeçalho da tela, com tamanho de fonte 24, negrito, margem vertical de 20 e centralizado.

### card
```javascript
card: {
  flexDirection: 'row',
  backgroundColor: '#F9F9F9',
  borderRadius: 8,
  padding: 16,
  marginBottom: 20,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 8,
  elevation: 2,
}
```
- **Descrição**: Estilo para os cartões exibidos na tela, com direção de flexão em linha, fundo cinza claro, bordas arredondadas, preenchimento de 16, margem inferior de 20 e efeitos de sombra.

### image
```javascript
image: {
  width: 60,
  height: 60,
  borderRadius: 8,
}
```
- **Descrição**: Estilo para as imagens dentro dos cartões, com largura e altura de 60 e bordas arredondadas.

### textContainer
```javascript
textContainer: {
  flex: 1,
  marginLeft: 16,
  justifyContent: 'center',
  alignItems: 'center',
}
```
- **Descrição**: Estilo para o contêiner de texto, ocupando o espaço restante, com margem à esquerda de 16 e centralizando o conteúdo.

### title
```javascript
title: {
  fontSize: 18,
  fontWeight: 'bold',
}
```
- **Descrição**: Estilo para o título, com tamanho de fonte 18 e negrito.

### subtitle
```javascript
subtitle: {
  fontSize: 14,
  color: '#888',
  marginTop: 4,
}
```
- **Descrição**: Estilo para o subtítulo, com tamanho de fonte 14, cor cinza e margem superior de 4.

### description
```javascript
description: {
  fontSize: 12,
  color: '#888',
  marginTop: 8,
}
```
- **Descrição**: Estilo para a descrição, com tamanho de fonte 12, cor cinza e margem superior de 8.

### largeImage
```javascript
largeImage: {
  width: '100%',
  height: 200,
  borderRadius: 8,
  marginTop: 20,
  alignSelf: 'center',
}
```
- **Descrição**: Estilo para imagens grandes, ocupando 100% da largura, altura de 200, bordas arredondadas, margem superior de 20 e centralizado.