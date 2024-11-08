---
title: IAlimento
description: 'Interface que define a estrutura de um alimento, incluindo suas propriedades nutricionais e categóricas.'
---

# IAlimento

A interface `IAlimento` descreve a estrutura de um alimento, incluindo suas propriedades nutricionais e informações categóricas. Esta interface é utilizada para garantir que os objetos de alimento sigam um formato consistente em toda a aplicação.

## Estrutura da Interface

### Detalhes

A interface `Detalhes` contém as seguintes propriedades:

- **valorEnergetico**: `number` - Representa o valor energético do alimento em calorias.
- **proteinas**: `number` - Quantidade de proteínas presentes no alimento em gramas.
- **carboidratos**: `number` - Quantidade de carboidratos presentes no alimento em gramas.
- **fibras**: `number` - Quantidade de fibras presentes no alimento em gramas.
- **lipidios**: `number` - Quantidade de lipídios presentes no alimento em gramas.

### IAlimento

A interface `IAlimento` possui as seguintes propriedades:

- **_id**: `string` - Identificador único do alimento.
- **nome**: `string` - Nome do alimento.
- **preparo**: `string` - Instruções de preparo do alimento.
- **categoriaUrl**: `string` (opcional) - URL da categoria do alimento.
- **porcao**: `number` - Tamanho da porção em gramas.
- **quantidade**: `number` (opcional) - Quantidade do alimento disponível.
- **categoriaNome**: `string` (opcional) - Nome da categoria do alimento.
- **categoriaCodigo**: `number` - Código da categoria do alimento.
- **detalhes**: `Detalhes` - Objeto que contém as informações nutricionais do alimento.
- **criadoEm**: `Date` (opcional) - Data de criação do registro do alimento.
- **nomeGrupo**: `string` (opcional) - Nome do grupo ao qual o alimento pertence.

## Exportação

A interface `IAlimento` e a interface `Detalhes` são exportadas para serem utilizadas em outras partes da aplicação.