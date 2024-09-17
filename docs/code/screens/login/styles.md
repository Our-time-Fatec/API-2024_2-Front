---
title: styles
description: 'Estilos para a tela de login no aplicativo React Native.'
---

# styles

Este arquivo contém os estilos utilizados na tela de login do aplicativo, implementados com a biblioteca `react-native`. Os estilos são definidos utilizando o método `StyleSheet.create`, que otimiza a performance ao agrupar os estilos.

## Estrutura dos Estilos

Abaixo estão os estilos definidos no arquivo:

- **container**: Estilo principal da tela, configurando a direção dos itens, cor de fundo e espaçamento.
- **titulo**: Estilo para o título da tela, com tamanho de fonte, peso e alinhamento.
- **containerinput**: Estilo para o contêiner dos campos de entrada, incluindo cor de fundo e espaçamento.
- **textoinput**: Estilo para o texto dentro dos campos de entrada.
- **botaocontainer**: Estilo para o contêiner do botão, definindo margens e largura.
- **textocadastro**: Estilo para o texto de cadastro, com peso e alinhamento.
- **linkcadastro**: Estilo para o link de cadastro, definindo cor e peso.
- **textoesqueceu**: Estilo para o texto de "esqueceu a senha", alinhado à direita.
- **containerline**: Estilo para o contêiner que contém a linha de separação, ajustando margens.
- **line**: Estilo para a linha de separação, definindo altura e cor.
- **ortext**: Estilo para o texto que aparece entre as linhas de separação.
- **button**: Estilo para o botão, incluindo bordas, padding e alinhamento.
- **iconContainer**: Estilo para o contêiner do ícone dentro do botão.
- **buttonText**: Estilo para o texto do botão, definindo tamanho e cor.
- **googleIcon**: Estilo para o ícone do Google, definindo largura e altura.

## Exemplo de Uso

Os estilos podem ser aplicados nos componentes da tela de login da seguinte forma:

```javascript
import styles from './styles';

// Exemplo de uso em um componente
<View style={styles.container}>
    <Text style={styles.titulo}>Login</Text>
    <View style={styles.containerinput}>
        <TextInput style={styles.textoinput} placeholder="Email" />
    </View>
    <View style={styles.botaocontainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
</View>
```

## Considerações Finais

Os estilos definidos neste arquivo são fundamentais para garantir uma interface de usuário consistente e agradável na tela de login do aplicativo. É recomendável manter a organização e a clareza nos estilos para facilitar futuras manutenções e alterações.