---
title: AuthContext
description: 'Contexto de autenticação para gerenciar o estado de autenticação do usuário.'
---

# AuthContext

O `AuthContext` é um contexto React que fornece informações sobre o estado de autenticação do usuário e permite que componentes filhos acessem e modifiquem esse estado.

## Estrutura

O contexto é composto por um provedor (`AuthProvider`) e um hook personalizado (`useAuth`).

### AuthProvider

O `AuthProvider` é um componente que encapsula a lógica de autenticação. Ele utiliza o `useState` para armazenar o estado de autenticação e o `useEffect` para verificar a presença de um token de autenticação armazenado no `AsyncStorage` quando o componente é montado.

#### Props

- `children`: Elementos React que serão renderizados dentro do provedor.

#### Estado

- `isAuthenticated`: Um booleano que indica se o usuário está autenticado.
- `setIsAuthenticated`: Função para atualizar o estado de autenticação.

#### Exemplo de uso

```tsx
<AuthProvider>
    <YourComponent />
</AuthProvider>
```

### useAuth

O hook `useAuth` permite que componentes acessem o contexto de autenticação. Ele deve ser utilizado dentro de um componente que está encapsulado pelo `AuthProvider`.

#### Retorno

- Retorna um objeto com as seguintes propriedades:
  - `isAuthenticated`: O estado atual de autenticação.
  - `setIsAuthenticated`: Função para atualizar o estado de autenticação.

#### Exemplo de uso

```tsx
const { isAuthenticated, setIsAuthenticated } = useAuth();
```

## Considerações

- O `useAuth` deve ser utilizado apenas dentro de um componente que está dentro do `AuthProvider`. Caso contrário, um erro será lançado.
- O estado de autenticação é verificado uma vez na montagem do componente, garantindo que a aplicação tenha acesso ao estado correto desde o início.