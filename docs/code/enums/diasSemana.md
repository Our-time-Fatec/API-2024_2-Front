---
title: diasSemana
description: 'Enumeração que representa os dias da semana.'
---

# DiasSemana

A enumeração `DiasSemana` define os dias da semana com seus respectivos nomes em português. Esta enumeração pode ser utilizada em diversas partes do código onde a representação dos dias da semana é necessária.

## Valores

- `Domingo`: Representa o primeiro dia da semana.
- `Segunda`: Representa o segundo dia da semana.
- `Terca`: Representa o terceiro dia da semana.
- `Quarta`: Representa o quarto dia da semana.
- `Quinta`: Representa o quinto dia da semana.
- `Sexta`: Representa o sexto dia da semana.
- `Sabado`: Representa o sétimo dia da semana.

## Exemplo de Uso

```typescript
import { DiasSemana } from './enums/diasSemana';

const hoje: DiasSemana = DiasSemana.Segunda;
console.log(`Hoje é ${hoje}`); // Saída: Hoje é Segunda-feira
```

Esta enumeração é útil para garantir que os dias da semana sejam representados de forma consistente em todo o aplicativo.