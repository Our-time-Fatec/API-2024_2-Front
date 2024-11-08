---
title: styles
description: 'Estilos para os botões utilizados na aplicação.'
---

# styles.ts

O arquivo `styles.ts` contém a definição dos estilos para os botões utilizados na aplicação. Ele utiliza a biblioteca `react-native` para criar estilos que são aplicados aos componentes de botão.

## Estilos Definidos

### botaoazul

```typescript
botaoazul: {
  width: "100%", // Definindo largura para 100% da tela
  backgroundColor: "#407CE2",
  borderRadius: 40,
  textAlign: "center",
  alignItems: "center",
  paddingVertical: 14, 
  paddingHorizontal: 100, 
}
```

- **Descrição**: Estilo para o botão azul.
- **Propriedades**:
  - `width`: Define a largura do botão como 100% da tela.
  - `backgroundColor`: Define a cor de fundo como azul (#407CE2).
  - `borderRadius`: Arredonda os cantos do botão.
  - `textAlign`: Alinha o texto ao centro.
  - `alignItems`: Alinha os itens dentro do botão ao centro.
  - `paddingVertical`: Define o espaçamento vertical interno.
  - `paddingHorizontal`: Define o espaçamento horizontal interno.

### textobotaoazul

```typescript
textobotaoazul: {
  fontFamily: "Poppins_700Bold",
  color: "#FFFFFF",
  fontSize: 20,
}
```

- **Descrição**: Estilo para o texto do botão azul.
- **Propriedades**:
  - `fontFamily`: Define a fonte como Poppins em negrito.
  - `color`: Define a cor do texto como branco.
  - `fontSize`: Define o tamanho da fonte como 20.

### botaobranco

```typescript
botaobranco: {
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: 40,
  alignItems: "center",
  paddingVertical: 14, 
  paddingHorizontal: 60, 
  borderColor: "#407CE2",
  borderWidth: 2,
  marginTop: 15,
}
```

- **Descrição**: Estilo para o botão branco.
- **Propriedades**:
  - `textAlign`: Alinha o texto ao centro.
  - `backgroundColor`: Define a cor de fundo como branco.
  - `borderRadius`: Arredonda os cantos do botão.
  - `alignItems`: Alinha os itens dentro do botão ao centro.
  - `paddingVertical`: Define o espaçamento vertical interno.
  - `paddingHorizontal`: Define o espaçamento horizontal interno.
  - `borderColor`: Define a cor da borda como azul (#407CE2).
  - `borderWidth`: Define a largura da borda.
  - `marginTop`: Define a margem superior.

### textobotaobranco

```typescript
textobotaobranco: {
  fontFamily: "Poppins_700Bold",
  fontSize: 20,
  color: "#407CE2",
}
```

- **Descrição**: Estilo para o texto do botão branco.
- **Propriedades**:
  - `fontFamily`: Define a fonte como Poppins em negrito.
  - `fontSize`: Define o tamanho da fonte como 20.
  - `color`: Define a cor do texto como azul (#407CE2).