---
title: AlimentoItem
description: 'Componente para exibir e gerenciar informações de um alimento, incluindo opções para consumir, editar e remover.'
---

# AlimentoItem

O componente `AlimentoItem` é responsável por exibir informações detalhadas sobre um alimento, permitindo ao usuário interagir com ele através de ações como consumir, editar e remover. Este componente é utilizado em contextos onde a gestão de alimentos é necessária, como em aplicativos de dieta ou nutrição.

## Props

O componente aceita as seguintes propriedades:

- **alimento** (`IAlimento`): Objeto que contém as informações do alimento a ser exibido.
- **isUserAlimento** (`boolean`): Indica se o alimento pertence ao usuário, habilitando opções de edição e remoção.
- **isAlimentoConsumido** (`boolean`, opcional): Indica se o alimento já foi consumido, alterando a exibição de informações e ações disponíveis.
- **onEdit** (`(id: string) => void`): Função chamada ao solicitar a edição do alimento, recebendo o ID do alimento como argumento.
- **onDelete** (`(id: string) => void`): Função chamada ao solicitar a remoção do alimento, recebendo o ID do alimento como argumento.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

1. **Estado Local**:
   - `modalVisible`: Controla a visibilidade do modal de detalhes do alimento.
   - `modalVisibleConsumo`: Controla a visibilidade do modal para confirmar o consumo do alimento.
   - `porcaoInput`: Armazena o valor da porção a ser consumida.
   - `quantidadeInput`: Armazena a quantidade a ser consumida.
   - `nomeGrupo`: Armazena o nome do grupo ao qual o alimento pertence.

2. **Funções**:
   - `formatDate(date: Date)`: Formata a data para o padrão brasileiro.
   - `toggleModal()`: Alterna a visibilidade do modal de detalhes.
   - `toggleModalConsumo()`: Alterna a visibilidade do modal de consumo.
   - `handleConsumir()`: Realiza a requisição para registrar o consumo do alimento e atualiza os dados do usuário e gráfico.
   - `handleConfirmarConsumo()`: Chama a função `handleConsumir()` para confirmar o consumo.

3. **Renderização**:
   - Exibe a imagem do alimento, nome, porção, preparo, categoria e, se consumido, a quantidade e data de consumo.
   - Exibe botões para editar, remover ou consumir o alimento, dependendo do estado do alimento e do usuário.
   - Modais para exibir detalhes do alimento e para confirmar o consumo.

## Estilos

Os estilos são importados do arquivo `styles.ts`, que define a aparência do componente, incluindo a disposição dos elementos e a formatação visual.

## Exemplo de Uso

```jsx
<AlimentoItem
  alimento={alimentoData}
  isUserAlimento={true}
  isAlimentoConsumido={false}
  onEdit={(id) => console.log(`Editar alimento com ID: ${id}`)}
  onDelete={(id) => console.log(`Remover alimento com ID: ${id}`)}
/>
```

Este exemplo demonstra como utilizar o componente `AlimentoItem`, passando as propriedades necessárias para sua funcionalidade.