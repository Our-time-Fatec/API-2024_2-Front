---
title: useRegister
description: 'Um hook personalizado para gerenciar o registro de usuários na aplicação.'
---

# useRegister

O `useRegister` é um hook personalizado que facilita o processo de registro de usuários na aplicação. Ele utiliza a API de registro e gerencia o estado de carregamento e autenticação do usuário.

## Importação

Para utilizar o `useRegister`, você deve importá-lo em seu componente:

```javascript
import useRegister from 'caminho/para/hooks/useRegister';
```

## Retorno

O hook retorna um objeto contendo:

- `register`: uma função assíncrona que aceita um objeto do tipo `IUsuario` e realiza o registro do usuário.
- `loading`: um booleano que indica se a operação de registro está em andamento.

## Uso

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

## Funcionamento

1. **Estado de Carregamento**: O hook utiliza o `useState` para gerenciar o estado de carregamento durante a operação de registro.
2. **Registro**: A função `register` é chamada com um objeto `IUsuario`, que é passado para a função `registerApi` do serviço de API.
3. **Autenticação**: Se o registro for bem-sucedido, o estado de autenticação é atualizado para `true`. Caso contrário, um erro é capturado e o estado de autenticação é definido como `false`.
4. **Tratamento de Erros**: O hook captura erros e retorna uma mensagem de erro apropriada.

## Dependências

- `useState` do React para gerenciar o estado.
- `registerApi` do serviço de API para realizar a chamada de registro.
- `useAuth` do contexto de autenticação para gerenciar o estado de autenticação do usuário.
- Interfaces `ILoginSuccessResponse` e `IUsuario` para tipagem.

Este hook é uma parte essencial da lógica de registro de usuários e deve ser utilizado em componentes que requerem essa funcionalidade.