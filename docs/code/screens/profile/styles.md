---
title: styles
description: 'Estilos para a tela de perfil no aplicativo React Native.'
---

# styles

Este arquivo contém as definições de estilo para a tela de perfil do aplicativo, utilizando a biblioteca `react-native` para estilização.

## Estrutura de Estilos

Os estilos são definidos utilizando `StyleSheet.create`, que otimiza a performance ao criar um objeto de estilo. Abaixo estão os estilos definidos:

- **container**: Estilo principal da tela, com flexibilidade e um fundo claro.
- **content**: Margens horizontais e superior para o conteúdo da tela.
- **profileSection**: Alinhamento central para a seção do perfil.
- **profileImage**: Estilo para a imagem do perfil, com bordas arredondadas.
- **profileName**: Estilo para o nome do usuário, com tamanho e peso da fonte definidos.
- **infoSection**: Estilo para a seção de informações, com disposição em linha e espaço entre os itens.
- **infoItem**: Estilo para cada item de informação, com alinhamento central.
- **infoLabel**: Estilo para o rótulo das informações, com cor e tamanho da fonte.
- **infoValue**: Estilo para o valor das informações, com cor e alinhamento central.
- **menuSection**: Margem superior para a seção de menu.
- **menuItem**: Estilo para cada item do menu, com disposição em linha e borda inferior.
- **menuText**: Estilo para o texto do menu, com margem e flexibilidade.
- **loadingIndicator**: Estilo para o indicador de carregamento, centralizado.
- **errorText**: Estilo para mensagens de erro, com cor vermelha e centralização.
- **circle**: Estilo para um círculo decorativo, com cor de fundo e alinhamento central.

## Exemplo de Uso

Para utilizar os estilos definidos neste arquivo, importe o objeto `styles` e aplique os estilos aos componentes desejados:

```javascript
import { styles } from './styles';

// Exemplo de uso em um componente
<View style={styles.container}>
    <Image style={styles.profileImage} source={profileImage} />
    <Text style={styles.profileName}>{userName}</Text>
    {/* Outros componentes */}
</View>
``` 

Os estilos são projetados para garantir uma interface de usuário responsiva e visualmente agradável na tela de perfil do aplicativo.