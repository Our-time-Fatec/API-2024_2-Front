---
title: DietasPredefinidas
description: 'Componente que exibe uma lista de dietas predefinidas com informações detalhadas.'
---

# Dietas Predefinidas

O componente `DietasPredefinidas` é responsável por exibir uma lista de dietas predefinidas, cada uma com uma descrição, título e informações do autor. Este componente utiliza o React Native e é integrado com a navegação do aplicativo.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Importações**: Importa os módulos necessários do React, React Native e navegação.
- **Tipos**: Define os tipos de navegação e rota utilizando `StackNavigationProp` e `RouteProp`.
- **Props**: Define as propriedades que o componente aceita, incluindo `navigation` e `route`.

## Renderização

O componente renderiza um `ScrollView` que contém:

- Um cabeçalho com o título "Dietas Predefinidas".
- Várias `View` que representam cada dieta, contendo:
  - Uma imagem representativa da dieta.
  - Título da dieta.
  - Nome do autor da dieta.
  - Descrição da dieta.

Além disso, uma imagem ilustrativa é adicionada ao final da lista.

## Exemplo de Uso

```tsx
<DietasPredefinidas navigation={navigation} route={route} />
```

## Estilos

Os estilos são importados de um arquivo separado (`styles.ts`), permitindo a personalização da aparência do componente.

## Considerações

- As imagens são carregadas a partir de URLs externas. Certifique-se de que as URLs estejam acessíveis.
- O componente é responsivo e se adapta a diferentes tamanhos de tela, utilizando o `ScrollView` para permitir a rolagem.

Este componente é uma parte fundamental da interface do usuário, permitindo que os usuários visualizem opções de dietas de forma clara e organizada.