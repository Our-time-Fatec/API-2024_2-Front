---
title: FAQs
description: 'Tela de Perguntas Frequentes que fornece informações sobre cálculos de TMB, dietas e suporte ao usuário.'
---

# FAQs

A tela de Perguntas Frequentes (FAQs) é responsável por apresentar informações relevantes sobre como os dados são calculados, diferentes tipos de dietas e informações de contato para suporte.

## Estrutura do Componente

O componente `FAQs` é um componente funcional que utiliza as seguintes bibliotecas e componentes:

- **React Native**: Para a construção da interface do usuário.
- **React Navigation**: Para a navegação entre telas.
- **FooterMenu**: Um componente que exibe um menu de rodapé.

### Props

O componente recebe as seguintes propriedades:

- `navigation`: Um objeto que permite a navegação entre as telas.
- `route`: Um objeto que contém informações sobre a rota atual.

### Renderização

O componente renderiza uma `View` principal que contém:

- Um `ScrollView` para permitir a rolagem do conteúdo.
- Vários elementos `Text` que descrevem:
  - Como calcular a Taxa Metabólica Basal (TMB) para homens e mulheres.
  - Diferentes tipos de dietas e suas respectivas recomendações.
  - Informações sobre a base de dados de alimentos.
  - Informações de contato para suporte.

### Cálculo da TMB

A TMB é calculada com as seguintes fórmulas:

- **Homens**: 
  ```
  TMB = 88,36 + (13,4 × peso em kg) + (4,8 × altura em cm) - (5,7 × idade em anos)
  ```
- **Mulheres**: 
  ```
  TMB = 447,6 + (9,2 × peso em kg) + (3,1 × altura em cm) - (4,3 × idade em anos)
  ```

### Níveis de Atividade

Os níveis de atividade física são utilizados para ajustar a TMB:

- Sedentário: TMB × 1,2
- Levemente ativo: TMB × 1,375
- Moderadamente ativo: TMB × 1,55
- Altamente ativo: TMB × 1,725
- Extremamente ativo: TMB × 1,9

### Tipos de Dietas

O componente descreve três tipos principais de dietas:

1. **Dieta de Emagrecimento**: Redução de 15-25% das calorias totais.
2. **Dieta de Ganho de Massa Muscular**: Aumento de 10-20% das calorias totais.
3. **Dieta Low Carb**: Redução da ingestão de carboidratos para 20-50% das calorias diárias.

### Suporte

Para suporte, os usuários podem entrar em contato pelo e-mail: `davincicode.fatec@gmail.com`.

### Estilos

Os estilos são importados de um arquivo separado `styles`, que define a aparência dos componentes na tela.