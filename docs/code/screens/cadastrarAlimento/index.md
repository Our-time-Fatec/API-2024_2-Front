---
title: CadastroAlimentoScreen
description: 'Tela para cadastro e edição de alimentos, permitindo a inserção de informações nutricionais.'
---

# CadastroAlimentoScreen

A `CadastroAlimentoScreen` é um componente React que permite ao usuário cadastrar ou editar informações sobre alimentos. A tela inclui campos para inserir dados nutricionais e uma lista de categorias de alimentos.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Estado Local**: Utiliza o hook `useState` para gerenciar o estado do formulário e o carregamento das categorias.
- **Efeitos Colaterais**: Utiliza o hook `useEffect` para buscar categorias e, se necessário, os dados do alimento a ser editado.
- **Manipulação de Formulário**: Funções para lidar com mudanças nos campos do formulário e para cadastrar ou atualizar alimentos.

## Props

O componente recebe as seguintes propriedades:

- `navigation`: Objeto de navegação para permitir a navegação entre telas.
- `route`: Objeto que contém informações sobre a rota atual, incluindo parâmetros.

## Estado do Componente

O estado do componente é composto por:

- `formState`: Objeto que contém os dados do formulário, incluindo nome, preparo, porção, categoria, e valores nutricionais.
- `categorias`: Array que armazena as categorias de alimentos.
- `isLoading`: Booleano que indica se os dados estão sendo carregados.
- `isEditing`: Booleano que indica se o componente está em modo de edição.
- `alimentoId`: ID do alimento a ser editado.

## Funções Principais

### `fetchCategorias`

Busca as categorias de alimentos da API e atualiza o estado `categorias`.

### `fetchAlimento`

Busca os dados de um alimento específico se o componente estiver em modo de edição.

### `handleChange`

Atualiza o estado do formulário quando um campo é alterado.

### `cadastrarAlimento`

Valida os dados do formulário e envia uma requisição para cadastrar ou atualizar um alimento na API.

### `limparFormState`

Reseta o estado do formulário para os valores iniciais.

## Renderização

O componente renderiza uma interface que inclui:

- Campos de entrada para nome, preparo, porção e valores nutricionais.
- Um seletor para escolher a categoria do alimento.
- Um botão para cadastrar ou atualizar o alimento.
- Um menu de rodapé para navegação.

## Exemplo de Uso

```jsx
<CadastroAlimentoScreen navigation={navigation} route={route} />
```

## Considerações Finais

A `CadastroAlimentoScreen` é uma parte essencial do aplicativo, permitindo que os usuários gerenciem informações nutricionais de forma eficiente. A validação dos dados e a interação com a API garantem que as informações sejam precisas e atualizadas.