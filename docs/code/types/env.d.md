---
title: env.d.ts
description: 'Declaração de tipos para variáveis de ambiente no módulo @env.'
---

# env.d.ts

Este arquivo contém a declaração de tipos para variáveis de ambiente utilizadas no módulo `@env`. Ele é essencial para garantir que as variáveis de ambiente sejam reconhecidas corretamente pelo TypeScript, permitindo um desenvolvimento mais seguro e eficiente.

## Conteúdo

```typescript
declare module '@env' {
    export const API_HOST: string;
}
```

## Descrição

- **API_HOST**: Uma constante do tipo `string` que representa a URL do host da API. Esta variável deve ser configurada no ambiente de execução da aplicação, permitindo que a aplicação se conecte ao backend apropriado.