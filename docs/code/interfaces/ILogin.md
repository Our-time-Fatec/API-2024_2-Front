---
title: ILogin
description: 'Interface para gerenciamento de login, incluindo requisições e respostas de sucesso e erro.'
---

# ILogin

A interface `ILogin` define a estrutura para o gerenciamento de login em um sistema. Ela inclui definições para requisições de login e respostas, tanto de sucesso quanto de erro.

## Interfaces

### ILogin

```typescript
interface ILogin {
    message: string;
}
```

A interface `ILogin` contém uma mensagem que pode ser utilizada para fornecer feedback ao usuário sobre o estado do login.

### ILoginRequest

```typescript
interface ILoginRequest {
    email: string;
    senha: string;
}
```

A interface `ILoginRequest` define a estrutura da requisição de login, que inclui:

- `email`: O endereço de e-mail do usuário.
- `senha`: A senha do usuário.

### ILoginSuccessResponse

```typescript
interface ILoginSuccessResponse extends ILogin {
    usuario: IUsuario;
    token: string;
    refreshToken: string;
}
```

A interface `ILoginSuccessResponse` estende a interface `ILogin` e inclui:

- `usuario`: Um objeto do tipo `IUsuario`, representando o usuário autenticado.
- `token`: Um token de autenticação para acesso a recursos protegidos.
- `refreshToken`: Um token utilizado para obter um novo token de acesso quando o atual expira.

### ILoginErrorResponse

```typescript
interface ILoginErrorResponse extends ILogin {
}
```

A interface `ILoginErrorResponse` estende a interface `ILogin` e é utilizada para representar uma resposta de erro durante o processo de login. Não possui propriedades adicionais além da mensagem herdada de `ILogin`.