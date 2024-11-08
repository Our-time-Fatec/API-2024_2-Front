---
title: useAlimentos
description: 'Um hook customizado para gerenciar e buscar alimentos e categorias em uma aplicação.'
---

# useAlimentos

O `useAlimentos` é um hook customizado que facilita a busca e o gerenciamento de alimentos e categorias em uma aplicação React. Ele permite filtrar alimentos com base em um termo de busca e em categorias específicas, além de gerenciar a paginação dos resultados.

## Estrutura

O hook utiliza os seguintes estados:

- `alimentos`: Armazena a lista de alimentos retornados pela API.
- `categorias`: Armazena a lista de categorias disponíveis.
- `selectedCategoria`: Armazena a categoria atualmente selecionada.
- `page`: Armazena o número da página atual para a paginação.
- `totalPages`: Armazena o total de páginas disponíveis.

## Funcionalidades

### fetchCategorias

Função que busca as categorias disponíveis através da API. O resultado é armazenado no estado `categorias`.

### fetchAlimentos

Função que busca os alimentos com base nos parâmetros fornecidos:

- `pageNumber`: Número da página a ser buscada.
- `categoriaCodigo`: Código da categoria para filtrar os alimentos.
- `searchTerm`: Termo de busca para filtrar os alimentos.
- `onlyUser`: Booleano que indica se deve filtrar apenas os alimentos do usuário.

Os resultados são armazenados no estado `alimentos` e o total de páginas é atualizado em `totalPages`.

### loadMore

Função que incrementa o número da página atual, permitindo carregar mais alimentos, desde que ainda haja páginas disponíveis.

### refreshAlimentos

Função que reinicia a página para 1 e busca novamente os alimentos com os filtros atuais.

## Uso

Para utilizar o `useAlimentos`, basta importá-lo e chamá-lo dentro de um componente funcional, passando o termo de busca e um booleano para filtrar apenas os alimentos do usuário, se necessário.

```javascript
import useAlimentos from 'caminho/para/hooks/useAlimentos';

const MyComponent = () => {
    const { alimentos, categorias, loadMore, refreshAlimentos } = useAlimentos('termo', true);

    // Lógica do componente...
};
```

## Dependências

- `requestWithRefresh`: Função responsável por realizar as requisições à API.
- `IAlimento`: Interface que define a estrutura de um alimento.
- `ICategoria`: Interface que define a estrutura de uma categoria.

## Considerações Finais

O `useAlimentos` é uma solução eficiente para gerenciar a busca de alimentos e categorias, proporcionando uma experiência de usuário fluida e responsiva.