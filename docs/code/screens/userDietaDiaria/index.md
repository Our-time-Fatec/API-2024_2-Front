---
title: UserDietaDiaria
description: 'Tela que exibe a dieta diária do usuário, permitindo a visualização e manipulação dos alimentos consumidos.'
---

# UserDietaDiaria

A tela `UserDietaDiaria` é responsável por exibir a dieta diária do usuário, permitindo que ele visualize e manipule os alimentos consumidos. Abaixo estão os principais componentes e funcionalidades implementadas nesta tela.

## Estrutura do Componente

O componente é um Functional Component que utiliza hooks do React e do React Navigation. Ele é estruturado da seguinte forma:

- **Imports**: Importa bibliotecas e componentes necessários, incluindo hooks personalizados, ícones e estilos.
- **Tipos**: Define os tipos de navegação e propriedades do componente.
- **Estado**: Utiliza o hook `useState` para gerenciar estados como dietas, visibilidade do modal, alimento selecionado, entre outros.
- **Efeitos**: Utiliza o hook `useEffect` para atualizar as dietas diárias quando a tela está em foco.

## Funcionalidades

### 1. Carregamento de Dietas

- Ao entrar na tela, as dietas diárias são carregadas através do hook `useDietas`.
- Se não houver dietas disponíveis, o usuário é redirecionado para a tela de alimentos consumidos.

### 2. Filtragem de Grupos

- O usuário pode filtrar os grupos de alimentos exibidos através de um `Picker`.
- Apenas os grupos selecionados são exibidos na lista.

### 3. Manipulação de Alimentos

- O usuário pode aumentar ou diminuir a quantidade de alimentos consumidos através de botões de ação.
- As ações de aumentar e diminuir a quantidade fazem chamadas à API para registrar as alterações.

### 4. Modal de Detalhes do Alimento

- Ao clicar em um alimento, um modal é exibido com detalhes sobre o alimento selecionado, incluindo informações nutricionais.
- O modal permite que o usuário visualize informações como porção, valor energético e macronutrientes.

### 5. Renderização de Componentes

- Utiliza `FlatList` para renderizar listas de grupos e alimentos, otimizando a performance da lista.

## Estilos

Os estilos são importados de um arquivo separado e aplicados aos componentes para garantir uma apresentação visual adequada.

## Conclusão

O componente `UserDietaDiaria` oferece uma interface interativa para que os usuários possam gerenciar suas dietas diárias de forma eficiente, com funcionalidades de visualização e manipulação de alimentos.