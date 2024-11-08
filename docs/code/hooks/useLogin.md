---
title: useLogin
description: 'Um hook personalizado para gerenciar o processo de login, incluindo tratamento de erros e estado de carregamento.'
---

# useLogin

O `useLogin` é um hook personalizado que facilita a implementação do processo de login em uma aplicação React. Ele gerencia o estado de autenticação, erros e carregamento durante a operação de login.

## Importação

Para utilizar o `useLogin`, você deve importá-lo em seu componente:

```javascript
import useLogin from '../hooks/useLogin';
```

## Retorno

O hook retorna um objeto contendo:

- `login`: Função assíncrona que aceita um objeto de solicitação de login (`ILoginRequest`) e tenta autenticar o usuário.
- `error`: Uma string que representa a mensagem de erro, caso ocorra durante o login. Se não houver erro, será `null`.
- `loading`: Um booleano que indica se a operação de login está em andamento.

## Exemplo de Uso

Aqui está um exemplo de como usar o `useLogin` em um componente:

```javascript
const LoginComponent = () => {
    const { login, error, loading } = useLogin();

    const handleLogin = async (credentials) => {
        const result = await login(credentials);
        if (result.success) {
            // Redirecionar ou realizar outra ação em caso de sucesso
        } else {
            // Exibir mensagem de erro
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                {/* Campos de entrada para login */}
                <button type="submit" disabled={loading}>
                    {loading ? 'Carregando...' : 'Login'}
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};
```

## Considerações

- O hook utiliza o contexto de autenticação (`AuthContext`) para gerenciar o estado de autenticação do usuário.
- A função `loginApi` é responsável por fazer a chamada à API para autenticação.
- O tratamento de erros é feito para capturar mensagens específicas retornadas pela API, além de um fallback para erros desconhecidos.