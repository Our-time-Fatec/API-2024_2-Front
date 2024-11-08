---
title: styles
description: 'Estilos para o componente de menus, utilizando o StyleSheet do React Native.'
---

# styles.ts

O arquivo `styles.ts` contém a definição dos estilos para o componente de menus utilizando o `StyleSheet` do React Native. Os estilos são organizados em um objeto que é exportado para ser utilizado em outros componentes.

## Estilos Definidos

### footer
```typescript
footer: {
  backgroundColor: "#fafdff",
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingVertical: 10,
  borderTopWidth: 1,
  borderColor: '#eee',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 2, height: -5 },
  shadowRadius: 5,
  elevation: 5,
}
```
- **backgroundColor**: Define a cor de fundo do footer.
- **flexDirection**: Organiza os itens em linha.
- **justifyContent**: Distribui os itens de forma uniforme.
- **paddingVertical**: Adiciona espaçamento vertical.
- **borderTopWidth**: Define a largura da borda superior.
- **borderColor**: Define a cor da borda.
- **shadowColor**, **shadowOpacity**, **shadowOffset**, **shadowRadius**, **elevation**: Propriedades para adicionar sombra ao footer.

### menuItem
```typescript
menuItem: {
  alignItems: 'center',
}
```
- **alignItems**: Centraliza os itens dentro do menu.

### menuText
```typescript
menuText: {
  fontSize: 12,
  marginTop: 4,
  color: 'black',
}
```
- **fontSize**: Define o tamanho da fonte do texto do menu.
- **marginTop**: Adiciona margem superior ao texto.
- **color**: Define a cor do texto.

### focusedMenuText
```typescript
focusedMenuText: {
  color: 'black',
}
```
- **color**: Define a cor do texto quando o item do menu está focado.

### focusedMenuItem
```typescript
focusedMenuItem: {
  backgroundColor: '#e0e0e0',
}
```
- **backgroundColor**: Define a cor de fundo do item do menu quando está focado.