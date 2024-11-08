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
- **const value: any**: Define uma constante chamada `value` que pode ser de qualquer tipo. Isso é útil para permitir a importação de imagens sem especificar um tipo exato.
- **export default value**: Exporta a constante `value` como a exportação padrão do módulo, permitindo que outros arquivos importem imagens PNG diretamente.

## Uso

Após a inclusão deste arquivo, você pode importar arquivos PNG em seus componentes TypeScript da seguinte forma:

```typescript
import logo from './logo.png';
```

Isso facilita a utilização de imagens em projetos TypeScript, garantindo que o compilador reconheça as importações de arquivos PNG.