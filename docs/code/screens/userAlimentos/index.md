---
title: UserAlimentosScreen
description: 'Tela para gerenciar e visualizar os alimentos do usuário, permitindo busca, filtragem por categoria e ações de edição e exclusão.'
---

# UserAlimentosScreen

A `UserAlimentosScreen` é uma tela que permite ao usuário visualizar, buscar e gerenciar seus alimentos. A tela inclui funcionalidades para filtrar alimentos por categoria, buscar por nome e realizar ações de cadastro, edição e exclusão de alimentos.

## Estrutura do Componente

O componente é implementado como uma função React que utiliza hooks para gerenciar estado e efeitos colaterais. Abaixo estão os principais elementos e funcionalidades:

### Props

- `navigation`: Objeto de navegação para permitir a navegação entre telas.
- `route`: Objeto de rota que contém informações sobre a navegação.

### Estado

- `searchTerm`: Termo de busca para filtrar alimentos.
- `selectedCategoria`: Categoria selecionada para filtrar alimentos.

### Hooks Utilizados

- `useAlimentos`: Hook personalizado que gerencia a lógica de busca e filtragem de alimentos.
- `useIsFocused`: Hook que verifica se a tela está focada, permitindo atualizar a lista de alimentos quando a tela é exibida.

### Efeitos

- `useEffect`: Atualiza a lista de alimentos sempre que a tela é focada.

### Funções

- `handleSearchChange`: Atualiza o termo de busca.
- `handleCategoriaChange`: Atualiza a categoria selecionada.
- `handleRegister`: Navega para a tela de cadastro de alimentos.
- `handleEdit`: Navega para a tela de cadastro de alimentos com o ID do alimento a ser editado.
- `handleDelete`: Exclui um alimento e atualiza a lista.

### Renderização

A tela é composta por:

- Um título.
- Um `Picker` para seleção de categorias.
- Um campo de busca.
- Um botão para cadastrar novos alimentos.
- Uma lista de alimentos renderizada com `FlatList`, que permite carregar mais itens conforme necessário.
- Um componente de menu de rodapé.

### Estilos

Os estilos são definidos utilizando `StyleSheet.create`, proporcionando uma aparência consistente e responsiva para a tela.

## Exemplo de Uso

```tsx
<UserAlimentosScreen navigation={navigation} route={route} />
```

Esta tela é uma parte fundamental da aplicação, permitindo que os usuários gerenciem seus alimentos de forma eficiente e intuitiva.