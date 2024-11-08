---
title: styles
description: 'Estilos para o componente gráfico, incluindo estilos para modal e gráfico.'
---

# styles.ts

Este arquivo contém a definição de estilos para o componente gráfico utilizando o `StyleSheet` do React Native. Os estilos são organizados para facilitar a personalização e a manutenção do layout do modal e do gráfico.

## Estilos Definidos

### modalContainer
```typescript
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}
```
- **Descrição**: Estilo para o contêiner do modal, ocupando toda a tela e centralizando seu conteúdo.
- **Propriedades**:
  - `flex`: 1 (ocupa todo o espaço disponível)
  - `justifyContent`: 'center' (centraliza o conteúdo verticalmente)
  - `backgroundColor`: 'rgba(0, 0, 0, 0.5)' (fundo semi-transparente)

### modalContent
```typescript
modalContent: {
  backgroundColor: 'white',
  margin: 20,
  padding: 25,
  borderRadius: 10,
  alignItems: 'center',
  gap: 10,
  justifyContent: "center"
}
```
- **Descrição**: Estilo para o conteúdo do modal.
- **Propriedades**:
  - `backgroundColor`: 'white' (fundo branco)
  - `margin`: 20 (margem externa)
  - `padding`: 25 (preenchimento interno)
  - `borderRadius`: 10 (bordas arredondadas)
  - `alignItems`: 'center' (alinha itens no centro)
  - `gap`: 10 (espaçamento entre os itens)
  - `justifyContent`: "center" (centraliza o conteúdo)

### modalTitle
```typescript
modalTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 5,
}
```
- **Descrição**: Estilo para o título do modal.
- **Propriedades**:
  - `fontSize`: 18 (tamanho da fonte)
  - `fontWeight`: 'bold' (peso da fonte)
  - `marginBottom`: 5 (margem inferior)

### closeButton
```typescript
closeButton: {
  marginTop: 5,
  backgroundColor: '#407CE2',
  paddingVertical: 8,
  borderRadius: 5,
  alignItems: 'center',
  width: '80%',
}
```
- **Descrição**: Estilo para o botão de fechar do modal.
- **Propriedades**:
  - `marginTop`: 5 (margem superior)
  - `backgroundColor`: '#407CE2' (cor de fundo azul)
  - `paddingVertical`: 8 (preenchimento vertical)
  - `borderRadius`: 5 (bordas arredondadas)
  - `alignItems`: 'center' (alinha o texto no centro)
  - `width`: '80%' (largura do botão)

### closeButtonText
```typescript
closeButtonText: {
  color: '#fff',
  fontSize: 16,
}
```
- **Descrição**: Estilo para o texto do botão de fechar.
- **Propriedades**:
  - `color`: '#fff' (cor do texto branca)
  - `fontSize`: 16 (tamanho da fonte)

### chartContainer
```typescript
chartContainer: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
}
```
- **Descrição**: Estilo para o contêiner do gráfico.
- **Propriedades**:
  - `width`: '100%' (largura total)
  - `alignItems`: 'center' (alinha itens no centro)
  - `justifyContent`: 'center' (centraliza o conteúdo)

### bar
```typescript
bar: {
  borderColor: "#6EBD"
}
```
- **Descrição**: Estilo para as barras do gráfico.
- **Propriedades**:
  - `borderColor`: "#6EBD" (cor da borda das barras)