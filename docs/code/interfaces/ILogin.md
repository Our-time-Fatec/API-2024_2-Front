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

Representa uma mensagem de status relacionada ao login.

### ILoginRequest

```typescript
interface ILoginRequest {
    email: string;
    senha: string;
}
```

Define a estrutura da requisição de login, que inclui:

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

Extende a interface `ILogin` para incluir informações sobre uma resposta de login bem-sucedida, que contém:

- `usuario`: Um objeto do tipo `IUsuario` representando o usuário autenticado.
- `token`: O token de autenticação gerado.
- `refreshToken`: O token de atualização para manter a sessão ativa.

### ILoginErrorResponse

```typescript
interface ILoginErrorResponse extends ILogin {
}
```

Extende a interface `ILogin` para representar uma resposta de erro durante o processo de login. Não adiciona propriedades adicionais, mas herda a mensagem de status.

## Exportação

As interfaces `ILoginRequest`, `ILoginSuccessResponse` e `ILoginErrorResponse` são exportadas para uso em outras partes do aplicativo.