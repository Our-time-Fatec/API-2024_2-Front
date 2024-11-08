---
title: useDietaDiaria
description: 'Hook personalizado para gerenciar e buscar dietas diárias de um usuário.'
---

# useDietaDiaria

O `useDietaDiaria` é um hook personalizado que permite gerenciar e buscar dietas diárias de um usuário. Ele utiliza o React para gerenciar o estado e realizar chamadas assíncronas à API.

## Importação

```javascript
import useDietaDiaria from 'caminho/para/o/arquivo/hooks/useDietaDiaria';
```

## Uso

```javascript
const { dietasDiarias, selectedDiaSemana, setSelectedDiaSemana, refreshDietasDiarias, isEmpty } = useDietaDiaria();
```

## Retorno

O hook retorna um objeto contendo as seguintes propriedades:

- `dietasDiarias`: Um array de objetos `IDietaDiaria` que representa as dietas diárias do usuário.
- `selectedDiaSemana`: Uma string que representa o dia da semana selecionado.
- `setSelectedDiaSemana`: Função para atualizar o dia da semana selecionado.
- `refreshDietasDiarias`: Função para atualizar as dietas diárias com base no dia da semana selecionado.
- `isEmpty`: Um booleano que indica se a lista de dietas diárias está vazia.

## Funcionalidades

- **Busca de Dietas**: O hook realiza uma chamada à API para buscar as dietas diárias do usuário. A URL utilizada para a requisição é `/dietaDiaria/me/forma`.
- **Processamento de Dados**: As dietas recebidas são processadas para organizar os grupos de consumo utilizando a função `sorterDiario` do utilitário `dietaProcessor`.
- **Gerenciamento de Estado**: O hook utiliza o `useState` para gerenciar o estado das dietas diárias, do dia da semana selecionado e se a lista está vazia.
- **Efeitos Colaterais**: O `useEffect` é utilizado para buscar as dietas sempre que o dia da semana selecionado mudar.

## Exemplo de Implementação

```javascript
import React from 'react';
import useDietaDiaria from './hooks/useDietaDiaria';

const DietaComponent = () => {
  const { dietasDiarias, setSelectedDiaSemana, isEmpty } = useDietaDiaria();

  return (
    <div>
      <h1>Dietas Diárias</h1>
      {isEmpty ? (
        <p>Nenhuma dieta encontrada.</p>
      ) : (
        <ul>
          {dietasDiarias.map(dieta => (
            <li key={dieta.id}>{dieta.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DietaComponent;
```

## Considerações Finais

O `useDietaDiaria` é uma solução eficiente para gerenciar dietas diárias em aplicações React, permitindo fácil integração com a API e gerenciamento de estado.