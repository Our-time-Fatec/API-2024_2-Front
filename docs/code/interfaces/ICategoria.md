---
title: ICategoria
description: 'Interface que define a estrutura de uma categoria no sistema.'
---

# ICategoria

A interface `ICategoria` define a estrutura de uma categoria no sistema, incluindo suas propriedades essenciais.

## Propriedades

- **_id**: `string`  
  Identificador único da categoria.

- **nome**: `string`  
  Nome da categoria.

- **codigo**: `number`  
  Código numérico associado à categoria.

- **urlPlaceholder**: `string`  
  URL de um placeholder relacionado à categoria.

## Exportação

A interface é exportada como padrão para ser utilizada em outras partes do sistema:

```typescript
export default ICategoria;
```