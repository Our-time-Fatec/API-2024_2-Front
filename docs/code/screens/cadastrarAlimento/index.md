---
title: CadastroAlimentoScreen
description: 'Tela para cadastro e edição de alimentos, permitindo a inserção de detalhes nutricionais.'
---

# CadastroAlimentoScreen

A `CadastroAlimentoScreen` é um componente React que permite ao usuário cadastrar ou editar informações sobre alimentos. A tela inclui campos para inserir detalhes nutricionais e uma lista de categorias de alimentos.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Estado Local**:
  - `formState`: Armazena os dados do formulário, incluindo nome, preparo, porção, categoria e detalhes nutricionais.
  - `categorias`: Armazena a lista de categorias de alimentos.
  - `isLoading`: Indica se os dados estão sendo carregados.
  - `isEditing`: Indica se a tela está em modo de edição.
  - `alimentoId`: Armazena o ID do alimento a ser editado.

- **Efeitos**:
  - Um `useEffect` para buscar as categorias de alimentos ao montar o componente.
  - Um segundo `useEffect` para buscar os dados do alimento a ser editado, se um `alimentoId` for passado via `route.params`.

## Funções Principais

- **handleChange**: Atualiza o estado do formulário com os valores inseridos pelo usuário.
  
- **cadastrarAlimento**: Envia os dados do alimento para a API. Se `isEditing` for verdadeiro, atualiza o alimento existente; caso contrário, cadastra um novo alimento. Exibe alertas de sucesso ou erro conforme o resultado da operação.

- **limparFormState**: Reseta o estado do formulário para os valores iniciais.

## Renderização

A tela é composta por:

- Um título que muda entre "Cadastro de Alimento" e "Editar Alimento" dependendo do modo.
- Vários campos de entrada (`TextInput`) para coletar informações sobre o alimento.
- Um `Picker` para selecionar a categoria do alimento.
- Um botão que aciona a função de cadastro ou atualização do alimento.
- Um componente `FooterMenu` para navegação.

## Estilos

Os estilos são importados de um arquivo separado (`styles`), que define a aparência dos componentes, como containers, inputs e botões.

## Importações

O componente utiliza as seguintes bibliotecas e módulos:

- `React` e hooks (`useState`, `useEffect`) para gerenciamento de estado e efeitos colaterais.
- Componentes do `react-native` como `View`, `Text`, `TextInput`, `TouchableOpacity`, `ScrollView`, e `Alert`.
- `Picker` do `@react-native-picker/picker` para seleção de categorias.
- Ícones do `Ionicons` para melhorar a interface do usuário.
- Funções de API do módulo `api` para realizar requisições HTTP.
- Interfaces `IAlimento` e `ICategoria` para tipagem TypeScript.

## Conclusão

A `CadastroAlimentoScreen` é uma parte essencial do aplicativo, permitindo que os usuários gerenciem informações sobre alimentos de forma intuitiva e eficiente.