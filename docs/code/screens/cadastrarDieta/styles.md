---
title: styles
description: 'Estilos para a tela de cadastro de dieta, utilizando React Native e StyleSheet.'
---

# styles

Este arquivo contém a definição de estilos para a tela de cadastro de dieta em um aplicativo React Native. Os estilos são criados utilizando a API `StyleSheet` do React Native e são organizados em um objeto exportado chamado `styles`.

## Estrutura dos Estilos

Os estilos são organizados em várias propriedades, cada uma correspondendo a um componente ou elemento da interface. Abaixo estão as principais propriedades e suas descrições:

- **container**: Estilo principal do contêiner da tela, com preenchimento e cor de fundo.
- **scrollContainer**: Estilo para o contêiner de rolagem, com preenchimento inferior.
- **title**: Estilo para o título da tela, com tamanho de fonte e alinhamento centralizado.
- **pickerLabel**: Estilo para o rótulo do seletor, com tamanho de fonte e peso.
- **picker**: Estilo para o componente de seleção, incluindo altura e bordas.
- **input**: Estilo para campos de entrada de texto, com altura, bordas e preenchimento.
- **button**: Estilo para botões, incluindo cor de fundo e alinhamento.
- **groupContainer**: Estilo para contêineres de grupos, com bordas e preenchimento.
- **sectionTitle**: Estilo para títulos de seções, com tamanho de fonte e margens.
- **submitButton**: Estilo para o botão de envio, com cor de fundo e preenchimento.
- **loading**: Estilo para um contêiner de carregamento, centralizando o conteúdo.

## Exemplo de Uso

Para utilizar os estilos definidos neste arquivo, você pode importá-los em seu componente React Native da seguinte forma:

```javascript
import { styles } from './styles';
```

Em seguida, aplique os estilos aos componentes desejados:

```javascript
<View style={styles.container}>
  <Text style={styles.title}>Cadastro de Dieta</Text>
  <TextInput style={styles.input} placeholder="Nome da Dieta" />
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Salvar</Text>
  </TouchableOpacity>
</View>
```

## Conclusão

Os estilos definidos neste arquivo proporcionam uma aparência consistente e responsiva para a tela de cadastro de dieta, facilitando a manutenção e a legibilidade do código.