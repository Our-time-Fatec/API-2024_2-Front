---
title: useRegister
description: 'Um hook personalizado para gerenciar o registro de usuários na aplicação.'
---

# useRegister

O `useRegister` é um hook personalizado que facilita o processo de registro de usuários na aplicação. Ele utiliza a API de registro e gerencia o estado de carregamento e autenticação do usuário.

## Importação

Para utilizar o `useRegister`, você deve importá-lo em seu componente:

```javascript
import useRegister from '../hooks/useRegister';
```

## Retorno

O hook retorna um objeto contendo:

- `register`: uma função assíncrona que aceita um objeto do tipo `IUsuario` e realiza o registro do usuário.
- `loading`: um booleano que indica se a operação de registro está em andamento.

## Como Usar

Aqui está um exemplo de como utilizar o `useRegister` em um componente:

```javascript
const MyComponent = () => {
    const { register, loading } = useRegister();

    const handleRegister = async (userData) => {
        const result = await register(userData);
        if (result.success) {
            // Registro bem-sucedido
        } else {
            // Tratar erro
            console.error(result.error);
        }
    };

    return (
        <div>
            {loading ? <p>Carregando...</p> : <button onClick={handleRegister}>Registrar</button>}
        </div>
    );
};
```

## Funcionamento Interno

1. **Estado de Carregamento**: O hook utiliza o `useState` para gerenciar o estado de carregamento durante a operação de registro.
2. **Função de Registro**: A função `register` é responsável por chamar a API de registro. Ela:
   - Define o estado de carregamento como `true`.
   - Tenta registrar o usuário chamando a função `registerApi`.
   - Atualiza o estado de autenticação com `setIsAuthenticated`.
   - Retorna um objeto com o resultado da operação, incluindo dados ou mensagens de erro.
   - Finalmente, redefine o estado de carregamento como `false`.

## Dependências

O `useRegister` depende das seguintes interfaces e serviços:

- `registerApi` do serviço `api`.
- `ILoginSuccessResponse` da interface `ILogin`.
- `IUsuario` da interface `IUsuario`.
- `useAuth` do contexto `AuthContext`.