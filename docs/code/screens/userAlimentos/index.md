---
title: UserAlimentosScreen
description: 'Tela para gerenciar os alimentos do usuário, permitindo busca, cadastro, edição e exclusão de alimentos.'
---

# UserAlimentosScreen

A `UserAlimentosScreen` é uma tela que permite ao usuário visualizar, buscar, cadastrar, editar e excluir alimentos. Esta tela utiliza componentes do React Native e hooks personalizados para gerenciar o estado e as interações.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Imports**: Importa bibliotecas e componentes necessários, como `React`, `FlatList`, `Picker`, e ícones do `Ionicons`.
- **Tipos**: Define os tipos de navegação e rotas utilizando `StackNavigationProp` e `RouteProp`.
- **Props**: Recebe as propriedades de navegação e rota.

## Estado e Efeitos

- **Estado**:
  - `searchTerm`: Armazena o termo de busca do usuário.
  
- **Hooks**:
  - `useAlimentos`: Hook personalizado que gerencia a lista de alimentos, categorias e a lógica de carregamento.
  - `useIsFocused`: Verifica se a tela está em foco para atualizar a lista de alimentos.

- **Efeito**:
  - Um `useEffect` que chama `refreshAlimentos` sempre que a tela é focada.

## Funções

- **handleSearchChange**: Atualiza o termo de busca.
- **handleCategoriaChange**: Atualiza a categoria selecionada.
- **handleRegister**: Navega para a tela de cadastro de alimentos.
- **handleEdit**: Navega para a tela de cadastro de alimentos com o ID do alimento a ser editado.
- **handleDelete**: Exclui um alimento e atualiza a lista.

## Renderização

A tela é renderizada com os seguintes componentes:

- **Picker**: Para selecionar a categoria de alimentos.
- **TextInput**: Para buscar alimentos.
- **TouchableOpacity**: Para cadastrar um novo alimento.
- **FlatList**: Para listar os alimentos, permitindo a edição e exclusão de cada item.
- **FooterMenu**: Componente de menu de navegação na parte inferior da tela.

## Estilos

Os estilos são importados de um arquivo separado (`styles.ts`) e aplicados aos componentes para garantir uma apresentação visual adequada.

## Conclusão

A `UserAlimentosScreen` é uma parte essencial do aplicativo, permitindo que os usuários gerenciem seus alimentos de forma eficiente e intuitiva.