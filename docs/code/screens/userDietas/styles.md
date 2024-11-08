---
title: styles
description: 'Estilos para a tela de Dietas do aplicativo, utilizando React Native.'
---

# styles

Este arquivo contém a definição dos estilos utilizados na tela de Dietas do aplicativo. Os estilos são criados utilizando a API `StyleSheet` do React Native, que otimiza o desempenho ao aplicar estilos.

## Estilos Definidos

### container
```javascript
container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f8"
}
```
- **Descrição**: Estilo principal do contêiner da tela.
- **Propriedades**:
  - `flex`: Define o contêiner para ocupar todo o espaço disponível.
  - `padding`: Adiciona um espaçamento interno de 16 unidades.
  - `backgroundColor`: Define a cor de fundo como um tom claro.

### title
```javascript
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
}
```
- **Descrição**: Estilo para o título da tela.
- **Propriedades**:
  - `fontSize`: Define o tamanho da fonte como 24.
  - `fontWeight`: Define o peso da fonte como negrito.
  - `marginBottom`: Adiciona uma margem inferior de 10 unidades.

### picker
```javascript
picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
    backgroundColor: colors.background,
    borderRadius: 10,
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
}
```
- **Descrição**: Estilo para o componente de seleção (picker).
- **Propriedades**:
  - `height`: Define a altura como 50 unidades.
  - `width`: Define a largura como 100% do contêiner pai.
  - `marginBottom`: Adiciona uma margem inferior de 10 unidades.
  - `backgroundColor`: Utiliza a cor de fundo definida em `colors`.
  - `borderRadius`: Arredonda os cantos em 10 unidades.
  - `elevation`, `shadowOffset`, `shadowOpacity`, `shadowRadius`: Propriedades para adicionar sombra ao componente.

### row
```javascript
row: {
    justifyContent: 'space-between',
}
```
- **Descrição**: Estilo para organizar elementos em uma linha.
- **Propriedades**:
  - `justifyContent`: Distribui o espaço entre os itens de forma equitativa.

### loadMoreButton
```javascript
loadMoreButton: {
    padding: 10,
    alignItems: 'center',
}
```
- **Descrição**: Estilo para o botão de carregar mais itens.
- **Propriedades**:
  - `padding`: Adiciona um espaçamento interno de 10 unidades.
  - `alignItems`: Centraliza os itens dentro do botão.

### loadMoreText
```javascript
loadMoreText: {
    fontSize: 16,
    color: '#007bff',
}
```
- **Descrição**: Estilo para o texto do botão de carregar mais.
- **Propriedades**:
  - `fontSize`: Define o tamanho da fonte como 16.
  - `color`: Define a cor do texto como azul.

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
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
}
```
- **Descrição**: Estilo para os botões na tela.
- **Propriedades**:
  - `backgroundColor`: Define a cor de fundo utilizando a cor do botão azul.
  - `paddingVertical`: Adiciona um espaçamento vertical de 9 unidades.
  - `paddingHorizontal`: Adiciona um espaçamento horizontal de 25%.
  - `borderRadius`: Arredonda os cantos em 30 unidades.
  - `marginBottom`, `marginTop`: Define margens superior e inferior.
  - `width`, `maxWidth`: Define a largura do botão.
  - `alignSelf`: Centraliza o botão horizontalmente.
  - `flexDirection`, `alignItems`: Organiza os itens dentro do botão.

### buttonText
```javascript
buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
}
```
- **Descrição**: Estilo para o texto dentro dos botões.
- **Propriedades**:
  - `color`: Define a cor do texto como branco.
  - `fontSize`: Define o tamanho da fonte como 16.
  - `fontWeight`: Define o peso da fonte como negrito.
  - `textAlign`: Centraliza o texto.

### icon
```javascript
icon: {
    marginRight: 10,
}
```
- **Descrição**: Estilo para ícones dentro dos botões.
- **Propriedades**:
  - `marginRight`: Adiciona uma margem à direita de 10 unidades.