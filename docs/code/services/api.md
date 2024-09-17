---
title: api
description: 'Módulo de serviços para comunicação com a API, incluindo autenticação e gerenciamento de tokens.'
---

# api

Este módulo fornece funções para interagir com a API, incluindo autenticação de usuários e gerenciamento de tokens. Utiliza a biblioteca `axios` para realizar requisições HTTP e `AsyncStorage` para armazenar tokens de autenticação.

## Configuração da API

A base URL da API é definida pela variável de ambiente `API_HOST`. Caso não esteja definida, um valor padrão é utilizado.

```typescript
const APIHOST = API_HOST || 'http://192.168.1.45:3010';
const api = axios.create({
    baseURL: APIHOST,
});
```

## Funções Exportadas

### `requestWithRefresh(config: any)`

Realiza uma requisição à API com o token de autenticação. Se o token estiver expirado (status 401), tenta atualizar o token e realiza a requisição novamente.

#### Parâmetros

- `config`: Configurações da requisição, incluindo headers e dados.

#### Retorno

- Retorna a resposta da requisição.

### `login(loginRequest: ILoginRequest)`

Realiza o login do usuário e armazena o token e informações do usuário no `AsyncStorage`.

#### Parâmetros

- `loginRequest`: Objeto contendo as credenciais de login.

#### Retorno

- Retorna os dados de sucesso do login, incluindo o token e informações do usuário.

### `register(registerRequest: IUsuario)`

Registra um novo usuário e armazena o token e informações do usuário no `AsyncStorage`.

#### Parâmetros

- `registerRequest`: Objeto contendo os dados do usuário a ser registrado.

#### Retorno

- Retorna os dados de sucesso do registro, incluindo o token e informações do usuário.

## Funções Internas

### `getToken()`

Recupera o token de autenticação armazenado no `AsyncStorage`.

#### Retorno

- Retorna o token armazenado.

### `refreshAuthToken()`

Atualiza o token de autenticação utilizando o refresh token armazenado.

#### Retorno

- Retorna o novo token de autenticação.

## Exemplo de Uso

```typescript
import { login, register, requestWithRefresh } from './services/api';

// Exemplo de login
const loginRequest = { username: 'user', password: 'pass' };
login(loginRequest).then(response => {
    console.log('Login bem-sucedido:', response);
}).catch(error => {
    console.error('Erro no login:', error);
});
```

Este módulo é essencial para gerenciar a autenticação e a comunicação com a API, garantindo que as requisições sejam feitas de forma segura e eficiente.