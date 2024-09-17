---
title: useDietas
description: 'Um hook personalizado para gerenciar e buscar dietas com base no dia da semana.'
---

# useDietas

O `useDietas` é um hook personalizado que permite gerenciar e buscar dietas de um usuário, com a opção de filtrar por dia da semana. Ele utiliza o estado local para armazenar as dietas e o dia da semana selecionado.

## Importação

```javascript
import useDietas from 'caminho/para/hooks/UseDietas';
```

## Uso

```javascript
const { dietas, selectedDiaSemana, setSelectedDiaSemana, refreshDietas } = useDietas(onlyUser);
```

### Parâmetros

- `onlyUser` (boolean, opcional): Se definido como `true`, o hook buscará apenas as dietas do usuário. O valor padrão é `false`.

### Retorno

O hook retorna um objeto contendo:

- `dietas`: Um array de dietas fixas (`IDietaFixa[]`).
- `selectedDiaSemana`: Uma string representando o dia da semana selecionado.
- `setSelectedDiaSemana`: Uma função para atualizar o dia da semana selecionado.
- `refreshDietas`: Uma função que permite atualizar a lista de dietas com base no dia da semana selecionado.

## Funcionamento Interno

1. **Estado Local**: O hook utiliza `useState` para gerenciar o estado das dietas e do dia da semana selecionado.
2. **Fetch de Dietas**: A função `fetchDietas` é responsável por fazer a requisição à API para buscar as dietas. Ela é chamada sempre que o `selectedDiaSemana` muda.
3. **Efeito Colateral**: O `useEffect` é utilizado para chamar `fetchDietas` sempre que `selectedDiaSemana` ou `fetchDietas` mudam.
4. **Atualização de Dietas**: A função `refreshDietas` permite que o usuário atualize a lista de dietas sem precisar mudar o dia da semana.

## Exemplo de Uso

```javascript
import React from 'react';
import useDietas from './hooks/UseDietas';

const DietasComponent = () => {
    const { dietas, setSelectedDiaSemana, refreshDietas } = useDietas();

    return (
        <div>
            <h1>Dietas</h1>
            <button onClick={() => setSelectedDiaSemana('Segunda')}>Segunda</button>
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

O `useDietas` é uma solução eficiente para gerenciar dietas em aplicações React, permitindo fácil integração com a API e manipulação do estado local.