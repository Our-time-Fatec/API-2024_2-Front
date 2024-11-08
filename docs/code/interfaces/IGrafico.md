---
title: IGrafico
description: 'Interface que define a estrutura dos dados relacionados ao gráfico de consumo alimentar.'
---

# IGrafico

O arquivo `IGrafico.ts` contém definições de interfaces que representam a estrutura dos dados relacionados ao consumo alimentar em uma dieta semanal. As interfaces definidas são:

## IAlimentoConsumido

```typescript
export interface IAlimentoConsumido {
  alimentoId: string;
  porcao: number;
  nome: string;
  criadoEm: string;
  consumido: number;
  detalhes: IAlimentoDetalhes;
}
```

### Propriedades

- **alimentoId**: Identificador único do alimento consumido.
- **porcao**: Quantidade do alimento consumido.
- **nome**: Nome do alimento.
- **criadoEm**: Data de criação do registro de consumo.
- **consumido**: Quantidade consumida do alimento.
- **detalhes**: Detalhes adicionais do alimento, representados pela interface `IAlimentoDetalhes`.

## IDiaTotal

```typescript
export interface IDiaTotal {
  valorEnergetico: number;
  lipidios: number;
  proteinas: number;
  carboidratos: number;
  fibras: number;
}
```

### Propriedades

- **valorEnergetico**: Total de calorias consumidas no dia.
- **lipidios**: Total de lipídios consumidos no dia.
- **proteinas**: Total de proteínas consumidas no dia.
- **carboidratos**: Total de carboidratos consumidos no dia.
- **fibras**: Total de fibras consumidas no dia.

## IDiaAlimentos

```typescript
export interface IDiaAlimentos {
  dia: DiasSemana;
  total: IDiaTotal;
  alimentos: IAlimentoConsumido[];
}
```

### Propriedades

- **dia**: Dia da semana, representado pelo enum `DiasSemana`.
- **total**: Total de nutrientes consumidos, representado pela interface `IDiaTotal`.
- **alimentos**: Lista de alimentos consumidos, representada como um array de `IAlimentoConsumido`.

## IDietaSemanal

```typescript
export interface IDietaSemanal {
  [DiasSemana.Domingo]: IDiaAlimentos; // Domingo é obrigatório
  [DiasSemana.Segunda]?: IDiaAlimentos; // Os outros dias são opcionais
  [DiasSemana.Terca]?: IDiaAlimentos;
  [DiasSemana.Quarta]?: IDiaAlimentos;
  [DiasSemana.Quinta]?: IDiaAlimentos;
  [DiasSemana.Sexta]?: IDiaAlimentos;
  [DiasSemana.Sabado]?: IDiaAlimentos;
}
```

### Propriedades

- **[DiasSemana.Domingo]**: Representa os dados do domingo, que são obrigatórios.
- **[DiasSemana.Segunda]** a **[DiasSemana.Sabado]**: Representam os dados dos outros dias da semana, que são opcionais.

Essas interfaces são fundamentais para a estruturação e manipulação dos dados de consumo alimentar em uma aplicação que visa monitorar dietas.