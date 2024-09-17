---
title: colors
description: 'Definição das cores utilizadas na aplicação.'
---

# colors.ts

Este arquivo contém a definição das cores utilizadas na aplicação. As cores são armazenadas em um objeto que pode ser facilmente importado e utilizado em diferentes componentes.

## Estrutura do Código

```typescript
const colors = {
    background: '#FFFFFF', // Cor do background
    blue: '#407CE2' // Azul padrão para botões e outros, usado também como cor de borda mas com opacidade reduzida
};

export default colors;
```

## Propriedades

- **background**: `#FFFFFF`
  - Define a cor de fundo da aplicação.
  
- **blue**: `#407CE2`
  - Cor azul padrão utilizada para botões e outros elementos. Também é utilizada como cor de borda com opacidade reduzida.

## Uso

Para utilizar as cores definidas neste arquivo, você pode importá-las em seus componentes da seguinte forma:

```typescript
import colors from './components/colors/colors';
```

Após a importação, você pode acessar as cores através do objeto `colors`, por exemplo:

```typescript
const buttonStyle = {
    backgroundColor: colors.blue,
};
```