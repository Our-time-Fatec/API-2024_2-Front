---
title: useLogin
description: 'Um hook personalizado para gerenciar o processo de login, incluindo tratamento de erros e estado de carregamento.'
---

# useLogin

O `useLogin` é um hook personalizado que facilita a implementação do processo de login em uma aplicação React. Ele gerencia o estado de erro e carregamento, além de interagir com a API de autenticação.

## Estrutura

O hook utiliza os seguintes estados:

- `error`: Armazena mensagens de erro, caso ocorram durante o processo de login.
- `loading`: Indica se a requisição de login está em andamento.

## Funcionalidades

### login

A função `login` é responsável por realizar a autenticação do usuário. Ela aceita um objeto `loginRequest` do tipo `ILoginRequest` e retorna um objeto que indica se a operação foi bem-sucedida e, em caso afirmativo, os dados da resposta.

#### Parâmetros

- `loginRequest` (ILoginRequest): Objeto contendo as credenciais do usuário.

#### Retorno

Um objeto com as seguintes propriedades:

- `success` (boolean): Indica se o login foi bem-sucedido.
- `data` (ILoginSuccessResponse | undefined): Dados retornados pela API em caso de sucesso.

## Exemplo de Uso

```javascript
import useLogin from 'hooks/useLogin';

const LoginComponent = () => {
    const { login, error, loading } = useLogin();

    const handleLogin = async () => {
        const result = await login({ username: 'user', password: 'pass' });
        if (result.success) {
            // Login bem-sucedido
        } else {
            // Tratar erro
        }
    };

    return (
        <div>
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Carregando...' : 'Login'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
};
```

## Considerações Finais

O `useLogin` é uma solução prática para gerenciar o fluxo de autenticação em aplicações React, permitindo que os desenvolvedores se concentrem na lógica de negócios sem se preocupar com a implementação detalhada do estado de login.