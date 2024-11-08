---
title: styles
description: 'Estilos utilizados na tela de FAQs do aplicativo.'
---

# styles.ts

O arquivo `styles.ts` contém as definições de estilo para a tela de FAQs do aplicativo. Utiliza a biblioteca `react-native` para criar estilos que garantem uma interface de usuário responsiva e visualmente agradável.

## Estrutura de Estilos

Os estilos são definidos utilizando o método `StyleSheet.create`, que permite agrupar estilos de forma eficiente. Abaixo estão os estilos definidos neste arquivo:

- **container**: Estilo principal que ocupa toda a tela com um fundo claro.
- **content**: Estilo para o conteúdo, com margens e preenchimento horizontal.
- **selectText**: Estilo para o texto de seleção, com tamanho e peso de fonte destacados.
- **optionContainer**: Estilo para cada opção, com layout em linha, fundo branco e sombra para destaque.
- **optionImage**: Estilo para a imagem da opção, com dimensões fixas.
- **optionTextContainer**: Estilo que permite que o texto da opção ocupe o espaço restante.
- **optionTitle**: Estilo para o título da opção, com tamanho e peso de fonte destacados.
- **optionSubtitle**: Estilo para o subtítulo da opção, com cor mais clara.
- **footer**: Estilo para o rodapé, com disposição em linha e sombra.
- **infoText**: Estilo para textos informativos, com tamanho e cor definidos.

## Exemplo de Uso

Os estilos definidos podem ser utilizados em componentes React Native da seguinte forma:

```javascript
import styles from './styles';

// Dentro do componente
<View style={styles.container}>
  <Text style={styles.selectText}>Selecione uma opção</Text>
  <View style={styles.optionContainer}>
    <Image style={styles.optionImage} source={require('./path/to/image.png')} />
    <View style={styles.optionTextContainer}>
      <Text style={styles.optionTitle}>Título da Opção</Text>
      <Text style={styles.optionSubtitle}>Subtítulo da Opção</Text>
    </View>
  </View>
</View>
```

Esses estilos ajudam a manter a consistência visual e a usabilidade da tela de FAQs, proporcionando uma experiência de usuário agradável.