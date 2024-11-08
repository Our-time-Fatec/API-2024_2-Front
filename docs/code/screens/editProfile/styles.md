---
title: styles
description: 'Estilos para a tela de edição de perfil no aplicativo.'
---

# styles

Este arquivo contém as definições de estilo para a tela de edição de perfil do aplicativo. Os estilos são criados utilizando a API `StyleSheet` do React Native, permitindo a personalização da aparência dos componentes na interface do usuário.

## Estrutura dos Estilos

Os estilos são organizados em um objeto chamado `styles`, que é exportado para ser utilizado em outros componentes. Abaixo estão as principais definições de estilo:

- **container**: Estilo principal que envolve toda a tela, configurando a direção do layout, cor de fundo e alinhamento dos itens.
- **profileImage**: Estilo para a imagem de perfil, definindo tamanho e borda arredondada.
- **editPhoto**: Estilo para o texto que indica a opção de editar a foto de perfil.
- **containerUp**: Estilo para a parte superior da tela, com padding vertical.
- **containerDown**: Estilo para a parte inferior da tela, alinhando os itens ao final.
- **title**: Estilo para o título da tela, com tamanho e peso da fonte definidos.
- **inputContainer**: Estilo para o contêiner de entrada de texto, incluindo bordas e sombreamento.
- **input**: Estilo para o campo de entrada de texto, permitindo flexibilidade e padding.
- **link**: Estilo para links, definindo a cor do texto.
- **button**: Estilo para botões, incluindo cor de fundo e padding.
- **buttonText**: Estilo para o texto dentro dos botões.
- **loginText**: Estilo para o texto de login, centralizado.
- **pickerContainer**: Estilo para o contêiner do seletor, semelhante ao inputContainer.
- **picker**: Estilo para o seletor em si.
- **iconButton**: Estilo para botões de ícone, com padding e espaçamento.
- **loadingIndicator**: Estilo para o indicador de carregamento, centralizando o conteúdo.

## Exemplo de Uso

Para utilizar os estilos definidos neste arquivo, importe o objeto `styles` em seu componente:

```javascript
import { styles } from './styles';
```

Em seguida, aplique os estilos aos componentes desejados:

```javascript
<View style={styles.container}>
    <Image style={styles.profileImage} source={...} />
    <Text style={styles.editPhoto}>Editar Foto</Text>
    ...
</View>
```

## Considerações Finais

Os estilos são projetados para serem responsivos e adaptáveis a diferentes tamanhos de tela, garantindo uma boa experiência do usuário em dispositivos variados.