---
title: DietaItem
description: 'Componente React para exibir informações sobre uma dieta fixa, permitindo edição e remoção.'
---

# DietaItem

O componente `DietaItem` é responsável por exibir informações sobre uma dieta fixa. Ele permite que o usuário visualize detalhes da dieta, além de oferecer opções para editar ou remover a dieta, caso o usuário tenha permissão.

## Props

O componente aceita as seguintes propriedades:

- `dieta` (`IDietaFixa`): Objeto que contém as informações da dieta a ser exibida.
- `isUserDieta` (`boolean`): Indica se o usuário tem permissão para editar ou remover a dieta.
- `onEdit` (`(id: string) => void`): Função chamada ao solicitar a edição da dieta, recebendo o ID da dieta como argumento.
- `onDelete` (`(id: string) => void`): Função chamada ao solicitar a remoção da dieta, recebendo o ID da dieta como argumento.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

1. **Estado Local**:
   - `modalVisible`: Controla a visibilidade do modal que exibe detalhes adicionais da dieta.

2. **Funções**:
   - `toggleModal`: Alterna a visibilidade do modal.
   - `formatDate`: Formata a data para o padrão brasileiro (DD/MM/YYYY).

3. **Renderização**:
   - Exibe um cartão com informações básicas da dieta, como dia da semana, calorias e data de criação.
   - Se `isUserDieta` for verdadeiro, exibe botões para editar e remover a dieta.
   - Um modal que exibe detalhes adicionais da dieta, incluindo informações nutricionais e grupos de alimentos.

## Estilos

Os estilos do componente são importados de um arquivo separado (`styles.ts`), permitindo uma melhor organização e manutenção do código.

## Exemplo de Uso

```jsx
<DietaItem
  dieta={dietaData}
  isUserDieta={true}
  onEdit={(id) => console.log(`Editar dieta com ID: ${id}`)}
  onDelete={(id) => console.log(`Remover dieta com ID: ${id}`)}
/>
```

## Considerações Finais

O componente `DietaItem` é uma parte essencial da interface do usuário, permitindo interações dinâmicas com as dietas. A implementação do modal proporciona uma experiência de usuário mais rica, permitindo que detalhes adicionais sejam visualizados sem sair da tela principal.