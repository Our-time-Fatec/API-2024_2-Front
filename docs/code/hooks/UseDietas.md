---
title: useDietas
description: 'Um hook personalizado para gerenciar e buscar dietas com base no dia da semana.'
---

# useDietas

O hook `useDietas` é um hook personalizado que permite gerenciar e buscar dietas de um usuário, com a opção de filtrar por dia da semana. Ele utiliza o estado local para armazenar as dietas e o dia da semana selecionado.

## Importação

```javascript
import useDietas from 'caminho/para/hooks/useDietas';
```

## Uso

```javascript
const { dietas, selectedDiaSemana, setSelectedDiaSemana, refreshDietas } = useDietas();
```

### Parâmetros

- `onlyUser` (boolean, opcional): Se definido como `true`, o hook buscará apenas as dietas do usuário. O valor padrão é `false`.

## Retorno

O hook retorna um objeto contendo:

- `dietas`: Um array de `IDietaFixa[]` que contém as dietas disponíveis.
- `selectedDiaSemana`: Uma string representando o dia da semana atualmente selecionado.
- `setSelectedDiaSemana`: Uma função para atualizar o dia da semana selecionado.
- `refreshDietas`: Uma função que pode ser chamada para atualizar a lista de dietas com base no dia da semana selecionado.

## Funções Internas

### diaAtualDaSemana

Retorna o dia da semana atual como uma string.

### chaveDiaSemana

Recebe uma string representando um dia da semana e retorna a chave correspondente no enum `DiasSemana`.

### diaSemanaIndice

Recebe um valor do enum `DiasSemana` e retorna o índice correspondente.

### fetchDietas

Função assíncrona que busca as dietas do usuário com base no dia da semana selecionado. Se o dia da semana for "Todos", busca todas as dietas. Se for "Hoje", busca as dietas do dia atual.

## Exemplo de Uso

```javascript
import React, { useEffect } from 'react';
import useDietas from './hooks/useDietas';

const DietasComponent = () => {
    const { dietas, setSelectedDiaSemana, refreshDietas } = useDietas();

    useEffect(() => {
        setSelectedDiaSemana('Hoje');
    }, []);

    return (
        <div>
            <h1>Dietas</h1>
            <button onClick={refreshDietas}>Atualizar Dietas</button>
            <ul>
                {dietas.map(dieta => (
                    <li key={dieta.id}>{dieta.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default DietasComponent;
```

## Considerações Finais

O hook `useDietas` é uma ferramenta útil para gerenciar dietas em aplicações React, permitindo fácil integração com a API e manipulação do estado local.