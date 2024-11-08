---
title: AlimentosScreen
description: 'Tela para listar e buscar alimentos, permitindo a seleção de categorias e a adição de novos alimentos.'
---

# AlimentosScreen

A `AlimentosScreen` é uma tela do aplicativo que permite ao usuário listar e buscar alimentos. A tela oferece funcionalidades para filtrar alimentos por categoria e realizar buscas por nome.

## Estrutura do Componente

O componente é implementado como uma função React que utiliza hooks para gerenciar estado e efeitos colaterais.

### Props

- `navigation`: Objeto de navegação que permite a navegação entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

### Estado

- `searchTerm`: Termo de busca para filtrar alimentos.
- `selectedCategoria`: Categoria selecionada para filtrar a lista de alimentos.

### Hooks Utilizados

- `useAlimentos`: Hook customizado que gerencia a lógica de busca e filtragem de alimentos.
- `useIsFocused`: Hook que verifica se a tela está focada, permitindo atualizar a lista de alimentos quando a tela é exibida.

### Efeitos

- O `useEffect` é utilizado para chamar a função `refreshAlimentos` sempre que a tela se torna focada.

## Renderização

A tela é composta pelos seguintes elementos:

- **StatusBar**: Configura a cor da barra de status.
- **Picker**: Componente para seleção de categorias de alimentos.
- **TextInput**: Campo de busca para filtrar alimentos pelo nome.
- **TouchableOpacity**: Botão para navegar para a tela de cadastro de alimentos.
- **FlatList**: Lista que exibe os alimentos filtrados, com suporte para carregamento de mais itens.

### Funções

- `handleSearchChange`: Atualiza o estado `searchTerm` com o texto digitado pelo usuário.
- `handleCategoriaChange`: Atualiza a categoria selecionada.
- `handleRegister`: Navega para a tela de cadastro de alimentos.

## Estilos

Os estilos são importados de um arquivo separado e aplicados aos componentes para garantir uma apresentação visual consistente.

## Conclusão

A `AlimentosScreen` é uma parte essencial do aplicativo, permitindo que os usuários gerenciem e busquem alimentos de forma eficiente. A combinação de filtros e busca proporciona uma experiência de usuário intuitiva e prática.