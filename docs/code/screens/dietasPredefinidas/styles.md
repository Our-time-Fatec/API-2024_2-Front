---
title: styles
description: 'Estilos para a tela de dietas predefinidas no aplicativo.'
---

# styles.ts

Este arquivo contém os estilos utilizados na tela de dietas predefinidas do aplicativo. Os estilos são definidos utilizando a API `StyleSheet` do React Native, que otimiza a performance ao criar estilos.

## Estrutura dos Estilos

Os estilos são organizados em um objeto que é exportado como padrão. Abaixo estão os estilos definidos:

- **container**: Estilo principal da tela, que ocupa todo o espaço disponível e aplica um padding horizontal.
- **header**: Estilo para o cabeçalho, com tamanho de fonte e peso definidos, além de margens verticais.
- **card**: Estilo para os cartões que exibem informações, com direção de flex, cor de fundo, bordas arredondadas e sombra.
- **image**: Estilo para imagens, definindo largura, altura e bordas arredondadas.
- **textContainer**: Estilo para o contêiner de texto dentro do cartão, com margem à esquerda.
- **title**: Estilo para o título do cartão, com tamanho de fonte e peso em negrito.
- **subtitle**: Estilo para o subtítulo, com cor e margem superior.
- **description**: Estilo para a descrição, com tamanho de fonte, cor e margem superior.
- **largeImage**: Estilo para imagens grandes, ocupando 100% da largura, com altura definida e bordas arredondadas.

## Exemplo de Uso

Para utilizar os estilos, importe o arquivo `styles.ts` na tela correspondente e aplique os estilos aos componentes desejados.

```javascript
import styles from './styles';

// Exemplo de uso em um componente
<View style={styles.container}>
  <Text style={styles.header}>Dietas Predefinidas</Text>
  <View style={styles.card}>
    <Image style={styles.image} source={...} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>Título do Alimento</Text>
      <Text style={styles.subtitle}>Subtítulo</Text>
      <Text style={styles.description}>Descrição do alimento.</Text>
    </View>
  </View>
</View>
```