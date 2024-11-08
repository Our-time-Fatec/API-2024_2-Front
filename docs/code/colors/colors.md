---
title: colors
description: 'Definição de cores utilizadas na aplicação.'
---

# colors.ts

O arquivo `colors.ts` contém a definição das cores utilizadas na aplicação. As cores são armazenadas em um objeto que pode ser importado e utilizado em diferentes componentes e estilos.

## Estrutura do Código

```typescript
const colors = {
    background: '#FFFFFF', 
    blueButtonCollor: '#407CE2', 
    iconCollor: '#407CE2', 
    backgroundDietas: "#d8ecf4", 
    aguaCollor: '#e0ecfc' 
};

export default colors;
```

## Propriedades

- **background**: Cor de fundo padrão da aplicação (`#FFFFFF`).
- **blueButtonCollor**: Cor azul utilizada para botões (`#407CE2`).
- **iconCollor**: Cor azul utilizada para ícones (`#407CE2`).
- **backgroundDietas**: Cor de fundo específica para dietas (`#d8ecf4`).
- **aguaCollor**: Cor utilizada para representar água (`#e0ecfc`).

## Uso

Para utilizar as cores definidas neste arquivo, você pode importá-las em seus componentes da seguinte forma:

```typescript
import colors from './colors';
```

Após a importação, você pode acessar as cores através do objeto `colors`, por exemplo:

```typescript
const style = {
    backgroundColor: colors.background,
    color: colors.blueButtonCollor,
};
``` 

Essa abordagem centraliza a definição de cores, facilitando a manutenção e a consistência visual da aplicação.