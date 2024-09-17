---
title: styles
description: 'Estilos para a tela inicial do aplicativo, utilizando React Native.'
---

# styles

Este arquivo contém a definição de estilos para a tela inicial do aplicativo, utilizando a biblioteca `react-native`. Os estilos são organizados em um objeto que é exportado como padrão.

## Estilos Definidos

- **container**: Estilo principal que ocupa toda a tela, com fundo branco e centralização do conteúdo.
- **containercima**: Estilo para a parte superior da tela, ocupando 50% da altura.
- **containerlogo**: Estilo que centraliza o logo na tela.
- **logo**: Define a altura e largura do logo.
- **title**: Estilo para o título, com fonte semi-negrito, tamanho 25 e cor específica.
- **subtitle**: Estilo para o subtítulo, com fonte regular, tamanho 20 e margem inferior.
- **welcome**: Estilo para a mensagem de boas-vindas, com fonte semi-negrito, tamanho 30 e margens ajustadas.
- **containerButton**: Estilo para o contêiner dos botões, centralizado e com largura total.

## Exemplo de Uso

Para utilizar os estilos definidos neste arquivo, importe o objeto `styles` em seu componente React Native:

```javascript
import styles from './styles';
```

Em seguida, aplique os estilos aos componentes desejados:

```javascript
<View style={styles.container}>
  <View style={styles.containerlogo}>
    <Image source={require('./logo.png')} style={styles.logo} />
  </View>
  <Text style={styles.title}>Título do App</Text>
  <Text style={styles.subtitle}>Subtítulo do App</Text>
  <View style={styles.containerButton}>
    <Button title="Iniciar" onPress={handleStart} />
  </View>
</View>
```