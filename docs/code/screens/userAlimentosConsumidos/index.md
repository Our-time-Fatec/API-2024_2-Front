---
title: UserAlimentosConsumidosScreen
description: 'Tela que exibe os alimentos consumidos pelo usuário, permitindo a remoção e carregamento de mais itens.'
---

# UserAlimentosConsumidosScreen

A `UserAlimentosConsumidosScreen` é um componente React que apresenta uma lista de alimentos consumidos pelo usuário. Esta tela permite que o usuário visualize, remova e carregue mais alimentos consumidos.

## Estrutura do Componente

O componente utiliza os seguintes hooks e bibliotecas:

- **React**: Para a criação do componente e gerenciamento de estado.
- **React Native**: Para a construção da interface do usuário.
- **React Navigation**: Para navegação entre telas.
- **Axios**: Para realizar requisições HTTP.

## Props

### Props

- `navigation`: Objeto de navegação fornecido pelo React Navigation.
- `route`: Objeto de rota fornecido pelo React Navigation.

## Estado

O componente gerencia os seguintes estados:

- `alimentosConsumidos`: Array que armazena os alimentos consumidos.
- `page`: Número da página atual para controle de paginação.
- `totalPages`: Total de páginas disponíveis.
- `isLoading`: Indica se os dados estão sendo carregados.

## Efeitos

- O componente utiliza o hook `useEffect` para buscar os alimentos consumidos quando a tela está em foco (`isFocused`).

## Funções

### fetchAlimentos

```typescript
const fetchAlimentos = async (pageNumber: number) => { ... }
```

Responsável por buscar os alimentos consumidos da API. Aceita um número de página como argumento e atualiza o estado com os dados recebidos.

### loadMore

```typescript
const loadMore = () => { ... }
```

Carrega mais alimentos consumidos se houver mais páginas disponíveis e não estiver carregando.

### handleRemoverAlimentoConsumido

```typescript
const handleRemoverAlimentoConsumido = async (id: string) => { ... }
```

Remove um alimento consumido com base no ID fornecido e atualiza a lista de alimentos consumidos.

## Renderização

O componente renderiza:

- Um título "Meus Alimentos consumidos".
- Uma lista (`FlatList`) de alimentos consumidos, utilizando o componente `AlimentoItem` para cada item.
- Um botão para carregar mais alimentos, que aparece quando há mais páginas disponíveis.
- Um componente de menu de rodapé (`FooterMenu`) para navegação.

## Estilos

Os estilos são definidos utilizando `StyleSheet.create`, incluindo estilos para o contêiner, título, botões e textos de carregamento.

## Exportação

O componente é exportado como padrão para ser utilizado em outras partes da aplicação.