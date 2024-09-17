---
title: DietaItem
description: 'Componente React para exibir informações sobre uma dieta, permitindo edição e remoção.'
---

# DietaItem

O componente `DietaItem` é responsável por exibir informações detalhadas sobre uma dieta fixa. Ele permite que o usuário visualize detalhes da dieta e, se for o proprietário, edite ou remova a dieta.

## Props

O componente aceita as seguintes propriedades:

- `dieta` (`IDietaFixa`): Objeto que contém as informações da dieta a ser exibida.
- `isUserDieta` (`boolean`): Indica se o usuário atual é o proprietário da dieta.
- `onEdit` (`(id: string) => void`): Função chamada ao solicitar a edição da dieta.
- `onDelete` (`(id: string) => void`): Função chamada ao solicitar a remoção da dieta.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

1. **Estado Local**:
   - `modalVisible`: Controla a visibilidade do modal que exibe detalhes adicionais da dieta.

2. **Funções**:
   - `toggleModal`: Alterna a visibilidade do modal.
   - `formatDate`: Formata a data para o padrão brasileiro.

3. **Renderização**:
   - Exibe um cartão com informações básicas da dieta, como dia da semana, calorias e data de criação.
   - Se `isUserDieta` for verdadeiro, exibe botões para editar e remover a dieta.
   - Um modal que exibe detalhes adicionais da dieta, incluindo informações nutricionais e grupos de alimentos.

## Estilos

Os estilos são definidos utilizando `StyleSheet.create` e incluem:

- `card`: Estilo do cartão que contém as informações da dieta.
- `detailsContainer`: Estilo para o contêiner de detalhes.
- `modalContainer`: Estilo para o contêiner do modal.
- `closeButton`: Estilo para o botão de fechar o modal.

## Exemplo de Uso

```jsx
<DietaItem
    dieta={dietaData}
    isUserDieta={true}
    onEdit={(id) => console.log(`Editar dieta com ID: ${id}`)}
    onDelete={(id) => console.log(`Remover dieta com ID: ${id}`)}
/>
```

Este componente é uma parte essencial da interface do usuário, permitindo interações dinâmicas com as dietas disponíveis.