---
title: context
description: 'Pasta que contém os contextos utilizados na aplicação, facilitando o gerenciamento de estado e a comunicação entre componentes.'
---

# Contexto

A pasta `context` é responsável por armazenar os contextos utilizados na aplicação. Os contextos são uma forma de compartilhar dados entre componentes sem a necessidade de passar props manualmente em cada nível da árvore de componentes. Isso é especialmente útil para gerenciar estados globais, como autenticação de usuários e preferências de configuração.

## Estrutura

A pasta `context` pode conter arquivos que definem diferentes contextos. Cada contexto pode incluir:

- **Provider**: Um componente que fornece o estado e as funções para os componentes filhos.
- **Consumer**: Um componente que consome o estado e as funções fornecidas pelo Provider.

## Benefícios

- **Gerenciamento de Estado**: Facilita o gerenciamento de estados globais, permitindo que múltiplos componentes acessem e atualizem o mesmo estado.
- **Reutilização de Código**: Promove a reutilização de lógica de estado em diferentes partes da aplicação.
- **Organização**: Mantém a lógica de estado separada da lógica de apresentação, melhorando a organização do código.

## Exemplos de Uso

Os contextos podem ser utilizados em componentes de forma simples, utilizando o `useContext` do React para acessar o estado e as funções fornecidas pelo Provider.

```javascript
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

const MyComponent = () => {
  const { user, login } = useContext(AuthContext);

  return (
    <div>
      <h1>Bem-vindo, {user.name}</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};
```

## Conclusão

A pasta `context` é uma parte fundamental da arquitetura da aplicação, permitindo um gerenciamento eficiente do estado e uma comunicação fluida entre os componentes.