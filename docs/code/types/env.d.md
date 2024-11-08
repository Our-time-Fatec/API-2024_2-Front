---
title: env.d.ts
description: 'Declaração de tipos para variáveis de ambiente utilizadas no projeto.'
---

# env.d.ts

Este arquivo contém a declaração de um módulo para variáveis de ambiente, especificamente para a biblioteca `@env`. Ele é utilizado para tipar as variáveis de ambiente que serão importadas no projeto.

## Conteúdo

```typescript
declare module '@env' {
    export const API_HOST: string;
}
```

## Descrição

- **Módulo `@env`**: Este módulo é utilizado para acessar variáveis de ambiente definidas no projeto.
- **Variável `API_HOST`**: Uma constante do tipo `string` que representa o host da API utilizada pela aplicação. É importante garantir que essa variável esteja definida no ambiente de execução para que a aplicação funcione corretamente.