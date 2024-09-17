---
title: AlimentoItem
description: 'Componente para exibir e gerenciar informações de alimentos, incluindo opções para consumir, editar e remover.'
---

# AlimentoItem

O componente `AlimentoItem` é responsável por exibir informações detalhadas sobre um alimento, permitindo ao usuário interagir com ele através de ações como consumir, editar e remover. Este componente é utilizado em um contexto onde os alimentos são gerenciados, como em um aplicativo de dieta ou nutrição.

## Props

O componente aceita as seguintes propriedades:

- **alimento** (`IAlimento`): Objeto que contém as informações do alimento a ser exibido.
- **isUserAlimento** (`boolean`): Indica se o alimento pertence ao usuário, habilitando opções de edição e remoção.
- **isAlimentoConsumido** (`boolean`, opcional): Indica se o alimento já foi consumido, alterando a exibição de informações.
- **onEdit** (`(id: string) => void`): Função chamada ao solicitar a edição do alimento.
- **onDelete** (`(id: string) => void`): Função chamada ao solicitar a remoção do alimento.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

1. **Estado Local**:
   - `modalVisible`: Controla a visibilidade do modal de detalhes do alimento.
   - `modalVisibleConsumo`: Controla a visibilidade do modal para registrar o consumo do alimento.
   - `porcaoInput`: Armazena a entrada da porção a ser consumida.
   - `quantidadeInput`: Armazena a entrada da quantidade a ser consumida.

2. **Funções**:
   - `formatDate(date: Date)`: Formata a data para o padrão brasileiro.
   - `toggleModal()`: Alterna a visibilidade do modal de detalhes.
   - `toggleModalConsumo()`: Alterna a visibilidade do modal de consumo.
   - `handleConsumir()`: Realiza a requisição para registrar o consumo do alimento.
   - `handleConfirmarConsumo()`: Chama a função para confirmar o consumo.

3. **Renderização**:
   - Exibe a imagem do alimento, nome, porção, preparo e categoria.
   - Exibe informações adicionais se o alimento foi consumido.
   - Renderiza botões para editar, remover ou consumir o alimento, dependendo do estado do alimento e do usuário.

4. **Modais**:
   - Um modal para exibir detalhes do alimento.
   - Um modal para registrar o consumo do alimento, onde o usuário pode inserir a porção e a quantidade.

## Estilos

Os estilos são definidos utilizando `StyleSheet` do React Native, proporcionando uma interface visual agradável e responsiva.

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

Este componente é uma parte essencial da interface do usuário, permitindo uma interação rica e informativa com os dados de alimentos.