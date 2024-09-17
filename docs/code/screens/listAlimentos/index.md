---
title: ListAlimentos
description: 'Tela para listar e gerenciar alimentos, permitindo busca e filtragem por categoria.'
---

# ListAlimentos

A tela `ListAlimentos` é responsável por exibir uma lista de alimentos disponíveis, permitindo ao usuário buscar e filtrar por categorias. Além disso, oferece a opção de cadastrar novos alimentos.

## Estrutura do Componente

O componente `AlimentosScreen` utiliza os seguintes hooks e bibliotecas:

- **React**: Para gerenciamento de estado e efeitos colaterais.
- **React Native**: Para a construção da interface do usuário.
- **React Navigation**: Para navegação entre telas.
- **Custom Hooks**: Utiliza o hook `useAlimentos` para gerenciar a lógica de busca e filtragem de alimentos.

## Props

O componente recebe as seguintes propriedades:

- `navigation`: Objeto de navegação para permitir a transição entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

## Estado

O componente mantém o seguinte estado:

- `searchTerm`: Termo de busca para filtrar alimentos.
- `selectedCategoria`: Categoria selecionada para filtrar a lista de alimentos.

## Efeitos

- O hook `useEffect` é utilizado para atualizar a lista de alimentos sempre que a tela estiver em foco.

## Funções

- `handleSearchChange`: Atualiza o estado `searchTerm` com o texto inserido pelo usuário.
- `handleCategoriaChange`: Atualiza a categoria selecionada.
- `handleRegister`: Navega para a tela de cadastro de alimentos.

## Renderização

A tela é composta pelos seguintes elementos:

- **Picker**: Para seleção de categorias.
- **TextInput**: Campo de busca para filtrar alimentos.
- **FlatList**: Exibe a lista de alimentos, permitindo rolagem e carregamento de mais itens.
- **FooterMenu**: Componente de menu inferior para navegação.

## Estilos

Os estilos são definidos utilizando `StyleSheet.create`, garantindo uma aparência consistente e responsiva. Os principais estilos incluem:

- `container`: Estilo principal do contêiner.
- `title`: Estilo do título da tela.
- `button`: Estilo do botão para cadastrar novos alimentos.
- `searchContainer`: Estilo do contêiner de busca.

## Conclusão

A tela `ListAlimentos` oferece uma interface intuitiva para listar, buscar e cadastrar alimentos, integrando-se perfeitamente com a lógica de navegação e gerenciamento de estado do aplicativo.