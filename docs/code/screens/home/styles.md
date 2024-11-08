---
title: styles
description: 'Estilos para a tela inicial do aplicativo, utilizando React Native e StyleSheet.'
---

# styles

Este arquivo contém os estilos utilizados na tela inicial do aplicativo, implementados com o `StyleSheet` do React Native. Os estilos são organizados em um objeto que define a aparência de diversos componentes da interface.

## Estrutura dos Estilos

Os estilos são definidos da seguinte forma:

- **container**: Estilo principal que ocupa toda a tela, com direção de coluna e centralização do conteúdo.
- **containercima**: Estilo para a parte superior da tela, ocupando 50% do espaço disponível.
- **containerlogo**: Estilo para centralizar o logotipo.
- **logo**: Define a altura e largura do logotipo.
- **title**: Estilo para o título, com alinhamento central, fonte em negrito e cor específica.
- **subtitle**: Estilo para o subtítulo, com alinhamento central, fonte regular e margem inferior.
- **welcome**: Estilo para a mensagem de boas-vindas, com fonte em negrito, alinhamento central e margens ajustadas.
- **containerButton**: Estilo para o contêiner dos botões, centralizado e com largura total.

## Importações

O arquivo importa o módulo `StyleSheet` do React Native e um arquivo de cores que contém as definições de cores utilizadas nos estilos.

```javascript
import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';
```

## Exportação

Os estilos são exportados como um objeto padrão, permitindo que sejam utilizados em outros componentes da tela inicial.

```javascript
export default styles;
```