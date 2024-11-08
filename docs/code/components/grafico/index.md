---
title: DietaGrafico
description: 'Componente para exibir um gráfico de consumo energético semanal com detalhes por dia.'
---

# DietaGrafico

O componente `DietaGrafico` é responsável por exibir um gráfico de barras que representa o consumo energético semanal de uma dieta. Ele permite que o usuário visualize os dados de forma interativa, com a possibilidade de abrir um modal para detalhes de cada dia.

## Props

### `dietaSemanal: IDietaSemanal`
Um objeto que contém os dados da dieta semanal, onde cada dia da semana é uma chave e os valores são os dados nutricionais correspondentes.

### `isVisible: boolean`
Um booleano que controla a visibilidade do modal que contém o gráfico.

### `onClose: () => void`
Uma função que é chamada quando o modal é fechado.

### `meta: number`
Um número que representa a meta de consumo energético, que é utilizada para definir o valor máximo no gráfico.

## Estado Interno

- `selectedDay: DiasSemana | null`: Armazena o dia selecionado pelo usuário para exibir detalhes.
- `dayModalVisible: boolean`: Controla a visibilidade do modal que exibe os detalhes do dia selecionado.

## Funcionalidades

- **Renderização do Gráfico**: O gráfico é renderizado utilizando o componente `BarChart` da biblioteca `react-native-gifted-charts`, que exibe os dados de consumo energético por dia.
- **Interatividade**: O usuário pode clicar em uma barra do gráfico para abrir um modal com detalhes sobre o dia selecionado.
- **Modal de Detalhes**: Um modal separado (`DiaDetalhesModal`) é utilizado para mostrar informações detalhadas sobre o dia selecionado.

## Estilos

Os estilos do componente são importados do arquivo `styles.ts`, que define a aparência do modal e do gráfico.

## Exemplo de Uso

```tsx
<DietaGrafico
  dietaSemanal={dietaSemanalData}
  isVisible={isModalVisible}
  onClose={handleCloseModal}
  meta={metaValue}
/>
```

## Considerações

Certifique-se de que os dados passados para `dietaSemanal` estejam no formato correto e que a biblioteca `react-native-gifted-charts` esteja instalada e configurada no seu projeto.