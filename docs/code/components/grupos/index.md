---
title: GroupModal
description: 'Componente modal para gerenciar grupos de alimentos, permitindo edição de porções, quantidades e remoção de alimentos.'
---

# GroupModal

O `GroupModal` é um componente React que exibe um modal para gerenciar grupos de alimentos. Ele permite que os usuários editem porções e quantidades de alimentos, além de remover alimentos de um grupo.

## Props

### `visible: boolean`
Indica se o modal deve ser exibido ou não.

### `grupo: IGrupo | null`
O grupo de alimentos a ser exibido no modal. Pode ser `null` se não houver grupo.

### `onClose: () => void`
Função chamada quando o modal é fechado.

### `onEditPortion: (alimentoId: string, newPortion: number) => void`
Função chamada para editar a porção de um alimento.

### `onEditQuantity: (alimentoId: string, newQuantity: number) => void`
Função chamada para editar a quantidade de um alimento.

### `onRemoveAlimento: (alimentoId: string, _id: string) => void`
Função chamada para remover um alimento do grupo.

### `onUpdateGrupo: (updatedGrupo: IGrupo) => void`
Função chamada para atualizar o grupo com as alterações feitas.

## Estado Interno

- `localGrupo`: Armazena o grupo de alimentos localmente.
- `editingAlimentoId`: Armazena o ID do alimento que está sendo editado.
- `newPortion`: Armazena a nova porção a ser definida.
- `newQuantity`: Armazena a nova quantidade a ser definida.

## Efeitos

- O estado `localGrupo` é sincronizado com o prop `grupo` sempre que este é alterado.
- O `editingAlimentoId` é resetado quando o modal é fechado.

## Funções

### `updateAndSendGrupo(updatedAlimentos: IAlimentoDieta[])`
Atualiza o grupo local e notifica o componente pai sobre as alterações.

### `handleEditQuantity(alimentoId: string)`
Valida e atualiza a quantidade de um alimento. Se a quantidade for válida, chama `onEditQuantity` e atualiza o estado local.

### `handleEditPortion(alimentoId: string)`
Valida e atualiza a porção de um alimento. Se a porção for válida, chama `onEditPortion` e atualiza o estado local.

### `handleRemoveAlimento(alimentoId: string)`
Exibe um alerta de confirmação para remover um alimento. Se confirmado, chama `onRemoveAlimento` e atualiza o grupo.

### `startEditing(alimentoId: string)`
Inicia ou finaliza o modo de edição para um alimento específico.

## Renderização

O modal exibe o nome do grupo e uma lista de alimentos. Cada alimento pode ser editado ou removido. O modal também possui um botão para fechá-lo.

## Estilos

Os estilos são importados do arquivo `styles.ts`, que define a aparência do modal e seus componentes internos.