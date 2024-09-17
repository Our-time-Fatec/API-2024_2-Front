---
title: IAlimento
description: 'Interface que define a estrutura de um alimento, incluindo suas propriedades nutricionais e informações adicionais.'
---

# IAlimento

A interface `IAlimento` descreve a estrutura de um alimento, incluindo suas propriedades nutricionais e informações adicionais. Esta interface é utilizada para garantir que os objetos de alimento sigam um formato consistente em toda a aplicação.

## Estrutura da Interface

### IAlimento

```typescript
interface IAlimento {
    _id?: string;                // Identificador único do alimento (opcional)
    nome: string;                // Nome do alimento
    preparo: string;             // Modo de preparo do alimento
    categoriaUrl?: string;       // URL da categoria do alimento (opcional)
    porcao: number;              // Tamanho da porção em gramas
    quantidade?: number;         // Quantidade disponível (opcional)
    categoriaNome?: string;      // Nome da categoria do alimento (opcional)
    categoriaCodigo: number;     // Código da categoria do alimento
    detalhes: Detalhes;          // Detalhes nutricionais do alimento
    criadoEm?: Date;             // Data de criação do alimento (opcional)
}
```

### Detalhes

```typescript
interface Detalhes {
    valorEnergetico: number;     // Valor energético em kcal
    proteinas: number;           // Quantidade de proteínas em gramas
    carboidratos: number;        // Quantidade de carboidratos em gramas
    fibras: number;              // Quantidade de fibras em gramas
    lipidios: number;            // Quantidade de lipídios em gramas
}
```

## Exportação

A interface `IAlimento` e a interface `Detalhes` são exportadas para serem utilizadas em outras partes da aplicação.

```typescript
export { IAlimento, Detalhes };
```