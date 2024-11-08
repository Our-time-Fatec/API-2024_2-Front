---
title: styles
description: 'Estilos para a tela de cadastro, definindo a aparência e o layout dos componentes.'
---

# styles

Este arquivo contém a definição dos estilos utilizados na tela de cadastro. Os estilos são criados utilizando a API `StyleSheet` do React Native, permitindo a aplicação de estilos de forma eficiente e organizada.

## Estrutura dos Estilos

Os estilos são organizados em um objeto chamado `styles`, que é exportado para ser utilizado em outros componentes. Abaixo estão os principais estilos definidos:

- **container**: Estilo principal da tela, configurando o layout com flexbox, cor de fundo e padding.
- **profileImage**: Estilo para a imagem de perfil, definindo tamanho e borda arredondada.
- **editPhoto**: Estilo para o texto de edição da foto, com alinhamento e cor.
- **containerUp**: Estilo para a parte superior do container, com padding vertical.
- **containerDown**: Estilo para a parte inferior do container, alinhando os itens ao final.
- **title**: Estilo para o título, com tamanho de fonte e peso.
- **inputContainer**: Estilo para o container de entrada de texto, com bordas e sombra.
- **input**: Estilo para o campo de entrada de texto, com margens e tamanho de fonte.
- **link**: Estilo para links, definindo a cor.
- **button**: Estilo para botões, com cor de fundo e padding.
- **buttonText**: Estilo para o texto dentro dos botões, com cor e alinhamento.
- **loginText**: Estilo para texto de login, centralizado.
- **pickerContainer**: Estilo para o container do seletor, semelhante ao inputContainer.
- **picker**: Estilo para o seletor, definindo o tamanho da fonte.

## Exemplo de Uso

Para utilizar os estilos definidos, importe o objeto `styles` no componente desejado:

```javascript
import { styles } from './styles';
```

Em seguida, aplique os estilos aos componentes React Native:

```javascript
<View style={styles.container}>
  <Image style={styles.profileImage} source={...} />
  <Text style={styles.title}>Cadastro</Text>
  <TextInput style={styles.input} placeholder="Digite seu nome" />
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Cadastrar</Text>
  </TouchableOpacity>
</View>
```

## Considerações Finais

Os estilos definidos neste arquivo são fundamentais para garantir uma interface de usuário consistente e agradável na tela de cadastro. A utilização de `StyleSheet` permite uma melhor performance e organização do código.