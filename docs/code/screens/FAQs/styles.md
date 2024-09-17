---
title: styles
description: 'Estilos utilizados na tela de FAQs do aplicativo.'
---

# styles

Este arquivo contém a definição dos estilos utilizados na tela de FAQs do aplicativo. Os estilos são criados utilizando a API `StyleSheet` do React Native, que permite a criação de estilos de forma otimizada.

## Estilos Definidos

### container
```javascript
container: {
  flex: 1,
  backgroundColor: '#f5f5f5',
}
```
- **Descrição**: Define o contêiner principal da tela, ocupando todo o espaço disponível e com um fundo cinza claro.

### content
```javascript
content: {
  flex: 1,
  marginTop: 20,
  paddingHorizontal: 20,
}
```
- **Descrição**: Estilo para o conteúdo da tela, com margem superior e preenchimento horizontal.

### selectText
```javascript
selectText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 20,
}
```
- **Descrição**: Estilo para o texto de seleção, com tamanho de fonte maior e negrito.

### optionContainer
```javascript
optionContainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  padding: 15,
  borderRadius: 15,
  marginBottom: 20,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 5 },
  elevation: 5,
}
```
- **Descrição**: Estilo para o contêiner de cada opção, com fundo branco, bordas arredondadas e sombra para efeito de elevação.

### optionImage
```javascript
optionImage: {
  width: 50,
  height: 50,
  marginRight: 15,
}
```
- **Descrição**: Estilo para a imagem da opção, com dimensões fixas e margem à direita.

### optionTextContainer
```javascript
optionTextContainer: {
  flex: 1,
}
```
- **Descrição**: Estilo para o contêiner de texto da opção, ocupando o espaço restante.

### optionTitle
```javascript
optionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
}
```
- **Descrição**: Estilo para o título da opção, com tamanho de fonte e negrito.

### optionSubtitle
```javascript
optionSubtitle: {
  fontSize: 14,
  color: '#888',
}
```
- **Descrição**: Estilo para o subtítulo da opção, com tamanho de fonte menor e cor cinza.

### footer
```javascript
footer: {
  backgroundColor: "#FFFFFF",
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 15,
  borderTopWidth: 1,
  borderColor: '#eee',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: -5 },
  shadowRadius: 5,
  elevation: 5,
}
```
- **Descrição**: Estilo para o rodapé da tela, com fundo branco, disposição em linha e sombra.

### infoText
```javascript
infoText: {
  fontSize: 16,
  lineHeight: 24,
  marginBottom: 20,
  color: '#333',
}
```
- **Descrição**: Estilo para o texto informativo, com tamanho de fonte, altura de linha e cor escura.