---
title: CadastroDietaScreen
description: 'Componente para cadastro e edição de dietas, permitindo a seleção de dias da semana, grupos de refeições e alimentos.'
---

# CadastroDietaScreen

O componente `CadastroDietaScreen` é responsável por permitir que os usuários cadastrem e editem dietas. Ele oferece funcionalidades para selecionar dias da semana, grupos de refeições e alimentos, além de gerenciar o estado do formulário.

## Estrutura do Componente

### Importações

O componente utiliza diversas bibliotecas e módulos, incluindo:

- `React` e hooks (`useState`, `useEffect`) para gerenciamento de estado e efeitos colaterais.
- Componentes do `react-native` como `View`, `Text`, `TextInput`, `ScrollView`, `TouchableOpacity`, `Alert`, `ActivityIndicator`, entre outros.
- `Ionicons` para ícones.
- `MultiSelect` para seleção múltipla de itens.
- `Picker` para seleção de grupos de refeições.
- Funções utilitárias e serviços para manipulação de dados.

### Tipos

O componente define alguns tipos TypeScript para melhor tipagem:

- `GruposEnum`: Enumeração para os grupos de refeições.
- `CadastroDietaScreenNavigationProp` e `CadastroDietaScreenRouteProp`: Tipos para navegação e rotas.

### Estado

O estado do componente é gerenciado através de `useState`, incluindo:

- `formState`: Armazena os dados do formulário, como dias da semana, grupos, alimentos, porção e quantidade.
- `isLoading`: Indica se os dados estão sendo carregados.
- `isEditing`: Indica se o componente está em modo de edição.
- `dietaId`: ID da dieta a ser editada.
- `searchTerm`: Termo de busca para alimentos.
- `selectedDiasSemana` e `selectedAlimentos`: Armazenam os itens selecionados.

### Efeitos

O componente utiliza `useEffect` para buscar dados da dieta quando o componente é montado ou quando a rota é alterada. Ele também atualiza o estado do formulário com os dados da dieta existente, se disponível.

### Funções Principais

- **onRefresh**: Recarrega os alimentos disponíveis.
- **handleChange**: Atualiza o estado do formulário com base na entrada do usuário.
- **handleAddGroup**: Adiciona um novo grupo de refeições ao estado.
- **cadastrarDieta**: Cadastra ou atualiza a dieta com base no estado atual.
- **handleSelectDiaSemana**: Atualiza os dias da semana selecionados.
- **handleSelectAlimentos**: Atualiza os alimentos selecionados.

### Renderização

O componente renderiza um formulário que inclui:

- Seleção de dias da semana com `MultiSelect`.
- Seleção do grupo de refeições com `Picker`.
- Campo de busca para alimentos.
- Campos para entrada de porção e quantidade.
- Lista de grupos de refeições adicionados, com opções para editar ou remover.

### Estilos

Os estilos são importados de um arquivo separado (`styles.ts`) e aplicados aos componentes para garantir uma apresentação consistente.

## Conclusão

O `CadastroDietaScreen` é um componente robusto que permite a interação do usuário para cadastro e edição de dietas, integrando várias funcionalidades e uma interface amigável.