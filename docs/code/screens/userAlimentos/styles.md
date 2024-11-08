---
title: styles
description: 'Estilos para a tela de Alimentos do aplicativo.'
---

# styles

Este arquivo contém a definição de estilos para a tela de Alimentos do aplicativo, utilizando a biblioteca `react-native` para estilização.

## Estrutura dos Estilos

Os estilos são definidos utilizando o método `StyleSheet.create`, que permite agrupar estilos de forma eficiente. Abaixo estão os estilos definidos:

- **container**: Estilo principal do contêiner, com flexibilidade e padding.
- **title**: Estilo para o título, com tamanho de fonte e peso em negrito.
- **picker**: Estilo para o componente de seleção, com altura e largura definidas.
- **row**: Estilo para organizar elementos em uma linha, com espaço entre eles.
- **loadMoreButton**: Estilo para o botão de carregar mais, com padding e alinhamento.
- **loadMoreText**: Estilo para o texto do botão de carregar mais, com tamanho de fonte e cor.
- **button**: Estilo para botões, com cor de fundo, padding, bordas arredondadas e alinhamento.
- **buttonText**: Estilo para o texto dentro dos botões, com cor e alinhamento centralizado.
- **icon**: Estilo para ícones, com margem à direita.
- **searchContainer**: Estilo para o contêiner de busca, com direção de flexão, cor de fundo e sombra.
- **searchInput**: Estilo para o campo de entrada de busca, com margem e tamanho de fonte.

## Exemplo de Uso

Para utilizar os estilos definidos, você pode importá-los no componente desejado:

```javascript
import { styles } from './styles';
```

Em seguida, aplique os estilos aos componentes:

```javascript
<View style={styles.container}>
    <Text style={styles.title}>Alimentos</Text>
    <Picker style={styles.picker} />
    <View style={styles.row}>
        <TouchableOpacity style={styles.loadMoreButton}>
            <Text style={styles.loadMoreText}>Carregar mais</Text>
        </TouchableOpacity>
    </View>
</View>
``` 

Esses estilos ajudam a manter a consistência visual e a responsividade da tela de Alimentos no aplicativo.