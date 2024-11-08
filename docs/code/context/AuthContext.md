---
title: AuthContext
description: 'Contexto de autenticação para gerenciar o estado de autenticação do usuário.'
---

# AuthContext

O `AuthContext` é um contexto React que fornece informações sobre o estado de autenticação do usuário e permite que componentes filhos acessem e modifiquem esse estado.

## Estrutura

O contexto é composto por um provedor (`AuthProvider`) e um hook personalizado (`useAuth`).

### AuthProvider

O `AuthProvider` é um componente que encapsula a lógica de autenticação. Ele utiliza o `AsyncStorage` para recuperar um token de autenticação e determinar se o usuário está autenticado.

#### Props

- `children`: Elementos React que serão renderizados dentro do provedor.

#### Estado

- `isAuthenticated`: Um booleano que indica se o usuário está autenticado.
- `setIsAuthenticated`: Função para atualizar o estado de autenticação.
- `loading`: Um booleano que indica se o estado de autenticação está sendo carregado.

#### Efeito

O `useEffect` é utilizado para verificar a presença de um token de autenticação no `AsyncStorage` ao montar o componente. Se um token for encontrado, ele tenta renová-lo usando a função `refreshAuthToken`.

#### Comportamento

Se o estado estiver carregando, um componente de loading é exibido. Caso contrário, o contexto é fornecido aos componentes filhos.

### useAuth

O hook `useAuth` permite que componentes acessem o contexto de autenticação.

#### Retorno

- Retorna um objeto contendo:
  - `isAuthenticated`: O estado atual de autenticação.
  - `setIsAuthenticated`: A função para atualizar o estado de autenticação.

#### Erro

Se o hook for utilizado fora de um `AuthProvider`, ele lançará um erro.

## Exemplo de Uso

```tsx
import React from 'react';
import { useAuth } from './context/AuthContext';

const MyComponent = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    return (
        <div>
            {isAuthenticated ? 'Usuário autenticado' : 'Usuário não autenticado'}
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
                Toggle Auth
            </button>
        </div>
    );
};
```

## Conclusão

O `AuthContext` fornece uma maneira eficiente de gerenciar o estado de autenticação em uma aplicação React, permitindo que componentes acessem e modifiquem o estado de autenticação de forma simples e direta.