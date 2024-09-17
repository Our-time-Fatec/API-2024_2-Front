---
title: declaration.d.ts
description: 'Declaração de módulo para arquivos PNG, permitindo a importação de imagens no TypeScript.'
---

# declaration.d.ts

Este arquivo contém uma declaração de módulo para arquivos com a extensão `.png`. Ele permite que o TypeScript reconheça e importe arquivos de imagem PNG como módulos.

## Conteúdo

```typescript
declare module "*.png" {
    const value: any;
    export default value;
}
```

## Descrição

- **declare module "*.png"**: Esta linha declara um módulo para todos os arquivos que terminam com a extensão `.png`.
- **const value: any**: Define uma constante chamada `value` do tipo `any`, que representa o conteúdo do arquivo PNG importado.
- **export default value**: Exporta a constante `value` como a exportação padrão do módulo, permitindo que outros arquivos a importem.

## Uso

Com esta declaração, você pode importar arquivos PNG em seus componentes TypeScript da seguinte maneira:

```typescript
import logo from './logo.png';
```

Isso permite que você utilize imagens PNG diretamente em seu código TypeScript sem erros de tipo.