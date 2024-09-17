---
title: IDieta
description: 'Interfaces relacionadas à estrutura de dietas e alimentos no sistema.'
---

# IDieta

Este arquivo contém definições de interfaces que representam a estrutura de dietas e alimentos no sistema. As interfaces são utilizadas para garantir a tipagem correta dos dados manipulados nas operações relacionadas a dietas.

## Interfaces

### IDietaDetalhes

```typescript
export interface IDietaDetalhes extends Detalhes {
}
```

A interface `IDietaDetalhes` estende a interface `Detalhes`, permitindo a inclusão de propriedades adicionais que podem ser definidas na interface `Detalhes`.

### IAlimentoDieta

```typescript
export interface IAlimentoDieta {
    _id?: string;
    nome: string;
    preparo: string;
    porcao: Number;
    quantidade: number;
    categoriaCodigo: Number;
    detalhes: Detalhes;
}
```

A interface `IAlimentoDieta` representa um alimento que pode ser parte de uma dieta. As propriedades incluem:

- `_id?`: Identificador único do alimento (opcional).
- `nome`: Nome do alimento.
- `preparo`: Método de preparo do alimento.
- `porcao`: Tamanho da porção em unidades.
- `quantidade`: Quantidade do alimento.
- `categoriaCodigo`: Código da categoria do alimento.
- `detalhes`: Detalhes adicionais sobre o alimento, conforme definido na interface `Detalhes`.

### IGrupo

```typescript
export interface IGrupo {
    _id?: string;
    nome: string;
    alimentos: IAlimentoDieta[];
}
```

A interface `IGrupo` representa um grupo de alimentos dentro de uma dieta. As propriedades incluem:

- `_id?`: Identificador único do grupo (opcional).
- `nome`: Nome do grupo.
- `alimentos`: Lista de alimentos que pertencem a este grupo, utilizando a interface `IAlimentoDieta`.

### IDietaFixa

```typescript
export interface IDietaFixa extends Document {
    _id?: string;
    usuarioId: string;
    diaSemana: DiasSemana;
    criadoEm: Date;
    atualizadoEm?: Date | null;
    removidoEm?: Date | null;
    detalhes: IDietaDetalhes;
    grupos: IGrupo[];
}
```

A interface `IDietaFixa` representa uma dieta fixa associada a um usuário. As propriedades incluem:

- `_id?`: Identificador único da dieta (opcional).
- `usuarioId`: Identificador do usuário ao qual a dieta pertence.
- `diaSemana`: Dia da semana em que a dieta é aplicada, utilizando a enumeração `DiasSemana`.
- `criadoEm`: Data de criação da dieta.
- `atualizadoEm?`: Data da última atualização da dieta (opcional).
- `removidoEm?`: Data em que a dieta foi removida (opcional).
- `detalhes`: Detalhes adicionais da dieta, conforme definido na interface `IDietaDetalhes`.
- `grupos`: Lista de grupos de alimentos que compõem a dieta, utilizando a interface `IGrupo`.