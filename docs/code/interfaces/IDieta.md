---
title: IDieta
description: 'Interfaces relacionadas à dieta, incluindo detalhes, grupos e consumo de alimentos.'
---

# IDieta

Este arquivo contém definições de interfaces relacionadas à estrutura de dados de dietas, incluindo detalhes, grupos de alimentos e consumo diário.

## Interfaces

### IDietaDetalhes
```typescript
export interface IDietaDetalhes extends Detalhes {
}
```
Interface que estende a interface `Detalhes`, representando detalhes adicionais de uma dieta.

### IAlimentoDieta
```typescript
export interface IAlimentoDieta {
    alimentoId: string;
    nome?: string;
    preparo?: string;
    porcao: number;
    quantidade: number;
    categoriaCodigo?: number;
    detalhes?: Detalhes;
}
```
Interface que representa um alimento dentro de uma dieta. Contém informações como ID, nome, preparo, porção, quantidade e categoria.

### IGrupo
```typescript
export interface IGrupo {
    _id?: string;
    nome: string;
    alimentos: IAlimentoDieta[];
}
```
Interface que representa um grupo de alimentos. Inclui um ID opcional, nome do grupo e uma lista de alimentos (`IAlimentoDieta`).

### IDietaFixa
```typescript
export interface IDietaFixa {
    _id?: string;
    usuarioId?: string;
    diaSemana: DiasSemana[] | DiasSemana;
    criadoEm?: Date;
    atualizadoEm?: Date | null;
    removidoEm?: Date | null;
    detalhes?: IDietaDetalhes;
    grupos: IGrupo[];
}
```
Interface que representa uma dieta fixa. Inclui informações sobre o usuário, dias da semana, datas de criação, atualização e remoção, detalhes da dieta e grupos de alimentos.

### IDietaDiaria
```typescript
export interface IDietaDiaria {
    usuarioId: string;
    diaSemana: DiasSemana;
    dia: Date;
    gruposConsumo: IGrupoConsumo[];
}
```
Interface que representa a dieta diária de um usuário, incluindo o ID do usuário, dia da semana, data e grupos de consumo.

### IGrupoConsumo
```typescript
export interface IGrupoConsumo {
    _id: string;
    grupo: string;  
    alimentos: IContagem[]; 
}
```
Interface que representa um grupo de consumo, contendo um ID, nome do grupo e uma lista de contagens de alimentos.

### IContagem
```typescript
export interface IContagem {
    consumido: number;
    paraConsumir: number;
    alimento: IAlimentoConsumo; // Referência à interface IAlimento
}
```
Interface que representa a contagem de um alimento consumido e a quantidade a ser consumida, referenciando a interface `IAlimentoConsumo`.

### IAlimentoConsumo
```typescript
interface IAlimentoConsumo {
    _id: string,
    alimentoId: string;
    nome: string;
    preparo: string;
    categoriaUrl?: string;
    porcao: number;
    quantidade?: number;
    categoriaNome?: string;
    categoriaCodigo: number;
    detalhes: Detalhes;
    criadoEm?: Date;
    nomeGrupo?: string,
}
```
Interface que representa um alimento consumido, incluindo informações como ID, nome, preparo, categoria, porção e detalhes adicionais.