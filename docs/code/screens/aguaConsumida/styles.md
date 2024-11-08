---
title: styles
description: 'Estilos para a tela de consumo de água no aplicativo.'
---

# styles

Este arquivo contém a definição de estilos para a tela de consumo de água no aplicativo. Os estilos são criados utilizando a biblioteca `react-native` e são organizados em um objeto que é exportado para ser utilizado em componentes React Native.

## Estrutura dos Estilos

Os estilos são definidos utilizando o método `StyleSheet.create`, que permite agrupar estilos de forma eficiente. Abaixo estão os principais estilos definidos neste arquivo:

- **container**: Estilo principal da tela, com flexibilidade total e um fundo claro.
- **contentContainer**: Estilo para o contêiner de conteúdo, com padding de 20.
- **title**: Estilo para o título, com tamanho de fonte 24 e negrito.
- **progressContainer**: Estilo para o contêiner de progresso, centralizado e com bordas arredondadas.
- **percentageContainer**: Estilo para o contêiner de porcentagem, posicionado de forma absoluta.
- **percentageText**: Estilo para o texto de porcentagem, com tamanho de fonte 40 e cor azul.
- **subtitle**: Estilo para subtítulos, com tamanho de fonte 18 e cor cinza.
- **subText**: Estilo para texto adicional, centralizado e com tamanho de fonte 16.
- **metaBox**: Estilo para a caixa de metadados, com bordas e sombra.
- **buttonsContainer**: Estilo para o contêiner de botões, com margem superior.
- **button**: Estilo para botões, com padding, bordas arredondadas e sombra.
- **image**: Estilo para imagens, com largura e altura definidas.
- **buttonText**: Estilo para o texto do botão, com cor e fundo definidos.
- **loadingIndicator**: Estilo para o indicador de carregamento, centralizado.
- **errorText**: Estilo para texto de erro, com cor vermelha e centralizado.

## Exemplo de Uso

Para utilizar os estilos definidos neste arquivo, você pode importá-los em seu componente da seguinte forma:

```javascript
import { styles } from './styles';
```

Em seguida, aplique os estilos aos componentes React Native conforme necessário:

```javascript
<View style={styles.container}>
  <Text style={styles.title}>Consumo de Água</Text>
  {/* Outros componentes */}
</View>
``` 

Os estilos são projetados para proporcionar uma interface de usuário agradável e responsiva, garantindo uma boa experiência ao usuário.