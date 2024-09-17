---
title: useUpdateUser
description: 'Um hook personalizado para atualizar informações do usuário.'
---

# useUpdateUser

O `useUpdateUser` é um hook personalizado que facilita a atualização das informações do usuário em uma aplicação React. Ele gerencia o estado de carregamento e realiza a chamada à API para atualizar os dados do usuário.

## Estrutura

```typescript
const useUpdateUser = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const updateUser = async (updateRequest: IUsuario) => {
        setLoading(true);
        // Lógica de atualização
        setLoading(false);
    };

    return { updateUser, loading };
};
```

## Funcionalidades

- **Gerenciamento de Estado**: O hook utiliza o `useState` para controlar o estado de carregamento (`loading`).
- **Atualização do Usuário**: A função `updateUser` realiza uma requisição PUT para a API, enviando os dados do usuário a serem atualizados.

## Uso

Para utilizar o `useUpdateUser`, importe-o em seu componente e chame a função `updateUser` passando um objeto que implementa a interface `IUsuario`.

```typescript
import useUpdateUser from 'caminho/para/hooks/useUpdateUser';

const MeuComponente = () => {
    const { updateUser, loading } = useUpdateUser();

    const handleUpdate = async () => {
        const result = await updateUser({ /* dados do usuário */ });
        if (result.success) {
            // Lógica em caso de sucesso
        } else {
            // Lógica em caso de erro
        }
    };

    return (
        <button onClick={handleUpdate} disabled={loading}>
            {loading ? 'Atualizando...' : 'Atualizar Usuário'}
        </button>
    );
};
```

## Parâmetros

- `updateRequest: IUsuario`: Um objeto que contém as informações do usuário a serem atualizadas.

## Retorno

O hook retorna um objeto contendo:

- `updateUser`: A função para atualizar o usuário.
- `loading`: Um booleano que indica se a requisição está em andamento.