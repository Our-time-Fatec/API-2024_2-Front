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
- **Custom Hooks**: `useGrafico` e `useUsuario` para gerenciar dados relacionados à dieta e ao usuário.

## Props

### Props

- `navigation`: Objeto de navegação fornecido pelo React Navigation.
- `route`: Objeto de rota que contém informações sobre a navegação.

## Estado

O componente gerencia os seguintes estados:

- `alimentosConsumidos`: Array de alimentos consumidos.
- `page`: Número da página atual para controle de paginação.
- `totalPages`: Total de páginas disponíveis.
- `isLoading`: Indica se os dados estão sendo carregados.
- `refreshTrigger`: Estado para controlar a atualização da lista.

## Efeitos

- O componente utiliza o hook `useEffect` para buscar alimentos consumidos sempre que a tela está em foco (`isFocused`).

## Funções

### fetchAlimentos

```typescript
const fetchAlimentos = async (pageNumber: number) => { ... }
```

Responsável por buscar os alimentos consumidos a partir de uma API. Atualiza o estado `alimentosConsumidos` e controla a paginação.

### loadMore

```typescript
const loadMore = () => { ... }
```

Carrega mais alimentos consumidos se houver mais páginas disponíveis.

### handleRemoverAlimentoConsumido

```typescript
const handleRemoverAlimentoConsumido = async (id: string) => { ... }
```

Remove um alimento consumido da lista, atualizando a interface após a remoção.

## Renderização

O componente renderiza:

- Um título para a tela.
- Uma lista (`FlatList`) de alimentos consumidos, onde cada item é representado pelo componente `AlimentoItem`.
- Um botão para carregar mais alimentos, que aparece quando não está carregando e ainda há mais páginas disponíveis.
- Um menu de rodapé (`FooterMenu`) para navegação.

## Estilos

Os estilos são importados do arquivo `styles` e aplicados aos componentes para garantir uma apresentação adequada.

## Conclusão

A `UserAlimentosConsumidosScreen` é uma parte essencial da aplicação, permitindo que os usuários gerenciem seus alimentos consumidos de forma eficiente e intuitiva.