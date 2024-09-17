---
title: useAlimentos
description: 'Um hook customizado para gerenciar e buscar alimentos e categorias em uma aplicação.'
---

# useAlimentos

O `useAlimentos` é um hook customizado que facilita a busca e gerenciamento de alimentos e suas respectivas categorias em uma aplicação React. Ele permite filtrar alimentos com base em um termo de busca e em categorias específicas, além de suportar a paginação dos resultados.

## Estrutura

O hook utiliza os seguintes estados:

- `alimentos`: Armazena a lista de alimentos retornados pela API.
- `categorias`: Armazena a lista de categorias de alimentos.
- `selectedCategoria`: Armazena a categoria atualmente selecionada para filtragem.
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

Função que incrementa o número da página atual, permitindo a carga de mais alimentos, desde que ainda haja páginas disponíveis.

### refreshAlimentos

Função que reinicia a página para 1 e busca novamente os alimentos com os filtros atuais.

## Uso

Para utilizar o `useAlimentos`, basta importá-lo e chamá-lo em um componente funcional, passando o termo de busca e um booleano para filtrar apenas os alimentos do usuário:

```javascript
const { alimentos, categorias, loadMore, refreshAlimentos } = useAlimentos(searchTerm, onlyUser);
```

## Exemplo

```javascript
const MyComponent = () => {
    const { alimentos, categorias, loadMore, refreshAlimentos } = useAlimentos('', false);

    return (
        <div>
            {/* Renderizar categorias e alimentos */}
        </div>
    );
};
```

## Considerações

- O hook utiliza `useEffect` para buscar categorias e alimentos sempre que os parâmetros relevantes mudam.
- É importante tratar erros nas chamadas da API para garantir uma boa experiência do usuário.