---
title: UserDietasScreen
description: 'Tela que exibe as dietas do usuário, permitindo a seleção de dias da semana, cadastro, edição e exclusão de dietas.'
---

# UserDietasScreen

A `UserDietasScreen` é um componente React que exibe as dietas do usuário. Esta tela permite que o usuário visualize suas dietas, selecione um dia da semana, e realize operações de cadastro, edição e exclusão de dietas.

## Estrutura do Componente

O componente utiliza os seguintes hooks e bibliotecas:

- **React**: Para a criação do componente e gerenciamento de estado.
- **React Navigation**: Para navegação entre telas.
- **React Native**: Para a construção da interface do usuário.
- **Picker**: Para seleção de dias da semana.
- **FlatList**: Para renderização de listas de dietas.

## Props

### Props

- `navigation`: Objeto de navegação que permite a navegação entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

## Hooks Utilizados

- `useEffect`: Para executar efeitos colaterais, como a atualização das dietas quando a tela está em foco.
- `useIsFocused`: Para verificar se a tela está atualmente em foco.
- `useDietas`: Hook personalizado que gerencia o estado das dietas.

## Funções

### handleCadastro

Navega para a tela de cadastro de alimentos.

### handleEdit

Navega para a tela de cadastro de alimentos com o ID da dieta a ser editada.

### handleDelete

Remove uma dieta com base no ID fornecido e atualiza a lista de dietas.

### handleDiaChange

Atualiza o dia da semana selecionado pelo usuário.

## Renderização

O componente renderiza:

- Um título "Minhas dietas".
- Um `Picker` para seleção do dia da semana.
- Um botão para cadastrar novas dietas (desabilitado no momento).
- Uma lista de dietas utilizando `FlatList`.
- Um componente de menu de rodapé.

## Estilos

Os estilos são definidos utilizando `StyleSheet` do React Native, incluindo estilos para o container, título, picker, botões e outros elementos da interface.

## Exemplo de Uso

```jsx
<UserDietasScreen navigation={navigation} route={route} />
```

Este componente é parte da estrutura de navegação do aplicativo e deve ser utilizado dentro de um contexto de navegação apropriado.