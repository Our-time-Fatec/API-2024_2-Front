---
title: styles
description: 'Estilos utilizados na tela de login do aplicativo.'
---

# styles

Este arquivo contém os estilos utilizados na tela de login do aplicativo, implementados com a biblioteca `react-native`. Os estilos são organizados em um objeto criado pela função `StyleSheet.create`, que permite a definição de estilos de forma otimizada e eficiente.

## Estilos

### container
```javascript
{
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop: 50,
    backgroundColor: colors.background
}
```
- **Descrição**: Define o contêiner principal da tela, ocupando toda a área disponível e alinhando os itens no topo.

### titulo
```javascript
{
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40
}
```
- **Descrição**: Estilo para o título da tela, centralizado e com um espaçamento inferior.

### containerinput
```javascript
{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 25,
    height: 60,
    width: "90%",
    alignSelf: "center"
}
```
- **Descrição**: Estilo para o contêiner de entrada de texto, com fundo cinza claro e bordas arredondadas.

### textoinput
```javascript
{
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    padding: 20
}
```
- **Descrição**: Estilo para o texto dentro do campo de entrada, com espaçamento e tamanho de fonte definidos.

### botaocontainer
```javascript
{
    marginTop: 20,
    marginBottom: 5,
    width: "80%",
    alignSelf: 'center',
}
```
- **Descrição**: Estilo para o contêiner do botão, centralizado com margens superior e inferior.

### textocadastro
```javascript
{
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 10
}
```
- **Descrição**: Estilo para o texto de cadastro, centralizado com espaçamento inferior.

### linkcadastro
```javascript
{
    color: '#007bff',
    fontWeight: 'bold'
}
```
- **Descrição**: Estilo para o link de cadastro, com cor azul e texto em negrito.

### textoesqueceu
```javascript
{
    alignSelf: 'flex-end',
    color: '#007bff',
    fontWeight: 'bold',
    marginRight: 15
}
```
- **Descrição**: Estilo para o texto de "esqueceu a senha", alinhado à direita.

### containerline
```javascript
{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginTop: "5%"
}
```
- **Descrição**: Estilo para o contêiner que contém a linha de separação, com margens verticais.

### line
```javascript
{
    flex: 1,
    height: 1,
    backgroundColor: '#D3D3D3'
}
```
- **Descrição**: Estilo para a linha de separação, com altura e cor definidas.

### ortext
```javascript
{
    marginHorizontal: 10,
    fontSize: 14,
    color: '#A3A2A3'
}
```
- **Descrição**: Estilo para o texto que aparece ao lado da linha de separação.

### button
```javascript
{
    flexDirection: 'row',
    textAlign: 'center',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '80%',
    alignSelf: 'center',
    marginTop: 10
}
```
- **Descrição**: Estilo para o botão, com bordas e espaçamento definidos.

### iconContainer
```javascript
{
    marginRight: 75,
}
```
- **Descrição**: Estilo para o contêiner do ícone dentro do botão.

### buttonText
```javascript
{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
}
```
- **Descrição**: Estilo para o texto do botão, com tamanho e cor definidos.

### googleIcon
```javascript
{
    width: 24,
    height: 24,
}
```
- **Descrição**: Estilo para o ícone do Google, com dimensões definidas.