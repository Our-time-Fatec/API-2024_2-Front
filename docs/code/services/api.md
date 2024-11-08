---
title: api
description: 'Módulo de serviços para comunicação com a API, incluindo autenticação e gerenciamento de tokens.'
---

# api

Este módulo fornece funções para interagir com a API, incluindo autenticação de usuários e gerenciamento de tokens. Utiliza a biblioteca `axios` para realizar requisições HTTP e `AsyncStorage` para armazenar tokens de autenticação.

## Funções

### `getToken()`

Obtém o token de autenticação armazenado no `AsyncStorage`.

**Retorno:**  
- `Promise<string>`: O token de autenticação.

**Exceções:**  
- Lança um erro se o token não for encontrado.

### `refreshAuthToken()`

Renova o token de autenticação utilizando o refresh token armazenado.

**Retorno:**  
- `Promise<string>`: O novo token de autenticação.

**Exceções:**  
- Lança um erro se o refresh token não for encontrado ou se a renovação falhar.

### `requestWithRefresh(config: any)`

Realiza uma requisição à API, adicionando o token de autenticação ao cabeçalho. Se a requisição falhar devido a um token expirado (status 401), tenta renovar o token e realiza a requisição novamente.

**Parâmetros:**  
- `config`: Configurações da requisição (ex: método, URL, dados).

**Retorno:**  
- `Promise<any>`: A resposta da requisição.

**Exceções:**  
- Lança um erro se a requisição falhar e não for possível renovar o token.

### `login(loginRequest: ILoginRequest)`

Realiza o login de um usuário.

**Parâmetros:**  
- `loginRequest`: Objeto contendo as credenciais de login.

**Retorno:**  
- `Promise<ILoginSuccessResponse>`: Dados do usuário e tokens de autenticação.

### `register(registerRequest: IUsuario)`

Registra um novo usuário.

**Parâmetros:**  
- `registerRequest`: Objeto contendo os dados do usuário a ser registrado.

**Retorno:**  
- `Promise<ILoginSuccessResponse>`: Dados do usuário e tokens de autenticação.

## Exportações

As seguintes funções são exportadas para uso em outros módulos:

- `requestWithRefresh`
- `refreshAuthToken`
- `login`
- `register`
- `api` (instância do axios configurada)