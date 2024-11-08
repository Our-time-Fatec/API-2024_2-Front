---
title: dietaProcessor
description: 'Classe responsável pelo processamento de dietas, incluindo ordenação, transformação de grupos e manipulação de dados de alimentos.'
---

# DietaProcessor

A classe `DietaProcessor` é responsável por manipular e processar informações relacionadas a dietas, incluindo a ordenação de grupos de alimentos, transformação de dados e operações de criação e atualização de dietas.

## Métodos

### `sorter(grupos: IGrupo[]): IGrupo[]`

Ordena um array de grupos de alimentos de acordo com uma ordem predefinida.

#### Parâmetros
- `grupos`: Um array de objetos do tipo `IGrupo`.

#### Retorno
- Um array de grupos ordenados.

### `sorterDiario(grupos: IGrupoConsumo[]): IGrupoConsumo[]`

Ordena um array de grupos de consumo diário de alimentos.

#### Parâmetros
- `grupos`: Um array de objetos do tipo `IGrupoConsumo`.

#### Retorno
- Um array de grupos de consumo ordenados.

### `transformGroups(grupos: IGrupo[])`

Transforma um array de grupos de alimentos, filtrando e formatando os dados dos alimentos.

#### Parâmetros
- `grupos`: Um array de objetos do tipo `IGrupo`.

#### Retorno
- Um array de grupos transformados, contendo apenas os alimentos válidos.

### `gruposAlimentos(porcao: string, quantidade: string, alimentoIds: IAlimento[], allAlimentos: IAlimento[]): IAlimentoDieta[]`

Cria um array de alimentos de dieta a partir de IDs de alimentos, porção e quantidade.

#### Parâmetros
- `porcao`: A porção do alimento.
- `quantidade`: A quantidade do alimento.
- `alimentoIds`: Um array de IDs de alimentos.
- `allAlimentos`: Um array de todos os alimentos disponíveis.

#### Retorno
- Um array de objetos do tipo `IAlimentoDieta`.

### `createDieta(dieta: IDietaFixa)`

Cria uma nova dieta no backend.

#### Parâmetros
- `dieta`: Um objeto do tipo `IDietaFixa` contendo os dados da dieta a ser criada.

#### Retorno
- Retorna uma Promise que resolve em caso de sucesso ou exibe um alerta em caso de erro.

### `updateDieta(dietaId: string, dieta: IDietaFixa)`

Atualiza uma dieta existente no backend.

#### Parâmetros
- `dietaId`: O ID da dieta a ser atualizada.
- `dieta`: Um objeto do tipo `IDietaFixa` contendo os dados atualizados da dieta.

#### Retorno
- Retorna uma Promise que resolve em caso de sucesso ou exibe um alerta em caso de erro.

### `editPortion(alimentoId: string, newPortion: number, selectedGrupo: IGrupo | null)`

Edita a porção de um alimento dentro de um grupo.

#### Parâmetros
- `alimentoId`: O ID do alimento a ser editado.
- `newPortion`: O novo valor da porção.
- `selectedGrupo`: O grupo onde o alimento está localizado.

#### Retorno
- Retorna o grupo atualizado ou `null` se o grupo não for fornecido.

### `editQuantity(alimentoId: string, newQuantity: number, selectedGrupo: IGrupo | null)`

Edita a quantidade de um alimento dentro de um grupo.

#### Parâmetros
- `alimentoId`: O ID do alimento a ser editado.
- `newQuantity`: O novo valor da quantidade.
- `selectedGrupo`: O grupo onde o alimento está localizado.

#### Retorno
- Retorna o grupo atualizado ou `null` se o grupo não for fornecido.