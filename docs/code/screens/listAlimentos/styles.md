---
title: styles
description: 'Estilos para a tela de listagem de alimentos no aplicativo.'
---

# styles

Este arquivo contém as definições de estilo para a tela de listagem de alimentos. Utiliza o `StyleSheet` do React Native para criar um conjunto de estilos que são aplicados aos componentes da interface.

## Estilos Definidos

### container
```javascript
container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f8"
}
```
- **Descrição**: Estilo principal do contêiner da tela, ocupando todo o espaço disponível com um padding de 16 e um fundo claro.

### title
```javascript
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
}
```
- **Descrição**: Estilo para o título, com tamanho de fonte 24, negrito e uma margem inferior de 10.

### picker
```javascript
picker: {
    height: 50,
    width: '100%',
    marginBottom: 1,
    backgroundColor: "#FFF",
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
}
```
- **Descrição**: Estilo para o componente de seleção, com altura de 50, largura total, fundo branco e leve sombra.

### row
```javascript
row: {
    justifyContent: 'space-between',
}
```
- **Descrição**: Estilo para organizar elementos em uma linha, distribuindo o espaço entre eles.

### loadMoreButton
```javascript
loadMoreButton: {
    padding: 10,
    alignItems: 'center',
}
```
- **Descrição**: Estilo para o botão de carregar mais, com padding de 10 e alinhamento centralizado.

### loadMoreText
```javascript
loadMoreText: {
    fontSize: 16,
    color: '#007bff',
}
```
- **Descrição**: Estilo para o texto do botão de carregar mais, com tamanho de fonte 16 e cor azul.

### button
```javascript
button: {
    backgroundColor: colors.blueButtonCollor,
    paddingVertical: 9,
    paddingHorizontal: "25%",
    borderRadius: 30,
    marginBottom: 10,
    width: "100%",
    maxWidth: 400,
    marginTop: 15,
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
}
```
- **Descrição**: Estilo para botões, com cor de fundo definida por uma variável de cores, padding, bordas arredondadas e alinhamento central.

### buttonText
```javascript
buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
}
```
- **Descrição**: Estilo para o texto do botão, com cor branca, tamanho de fonte 16 e alinhamento central.

### icon
```javascript
icon: {
    marginRight: 10,
}
```
- **Descrição**: Estilo para ícones, com margem à direita de 10.

### searchContainer
```javascript
searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 25,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
}
```
- **Descrição**: Estilo para o contêiner de busca, com disposição em linha, fundo branco, padding, bordas arredondadas e sombra.

### searchInput
```javascript
searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16
}
```
- **Descrição**: Estilo para o campo de entrada de busca, com margem à esquerda, ocupando espaço flexível e tamanho de fonte 16.