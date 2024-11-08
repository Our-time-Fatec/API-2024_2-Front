---
title: Selecao
description: 'Componente da tela de seleção que exibe informações sobre a ingestão diária de calorias e permite a visualização de gráficos de dieta.'
---

# Selecao

O componente `Selecao` é uma tela que apresenta informações sobre a ingestão diária de calorias do usuário e permite a visualização de gráficos relacionados à dieta. Ele utiliza hooks personalizados para gerenciar o estado do usuário e a imagem de perfil.

## Estrutura do Componente

### Importações

O componente importa os seguintes módulos e componentes:

- **React e Hooks**: `useCallback`, `useState`, `useEffect`
- **React Native**: `View`, `Text`, `TouchableOpacity`, `Image`, `ActivityIndicator`, `StatusBar`
- **Ionicons**: Para ícones
- **Navegação**: `StackNavigationProp`, `RouteProp`, `useFocusEffect`
- **Componentes Personalizados**: `FooterMenu`, `DietaGrafico`
- **Hooks Personalizados**: `useUsuario`, `useProfilePicture`, `useGrafico`
- **Estilos**: Importação de estilos do arquivo `styles`

### Tipos

Define os tipos para as propriedades de navegação e rota:

```typescript
type SelecaoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Selecao">;
type SelecaoScreenRouteProp = RouteProp<RootStackParamList, "Selecao">;

type Props = {
  navigation: SelecaoScreenNavigationProp;
  route: SelecaoScreenRouteProp;
};
```

### Estado

O componente utiliza os seguintes estados:

- `loading`: Indica se os dados estão sendo carregados.
- `email`: Armazena o email do usuário.
- `isModalVisible`: Controla a visibilidade do modal de gráfico.

### Funções

- **verificarCalorias**: Avalia se o consumo de calorias do usuário está acima, abaixo ou dentro da meta estabelecida.
- **fetchData**: Função assíncrona que atualiza os dados do usuário.
- **openModal**: Abre o modal para visualizar o gráfico da dieta.
- **closeModal**: Fecha o modal.

### Efeitos

Utiliza `useFocusEffect` para recarregar os dados do usuário e a imagem de perfil sempre que a tela ganha foco.

### Renderização

O componente renderiza:

- Um cabeçalho com a imagem de perfil e uma mensagem de boas-vindas.
- Informações sobre a ingestão diária de calorias, incluindo a meta e o consumo atual.
- Um modal que exibe um gráfico da dieta semanal, que é ativado ao clicar em um botão.

### Exemplo de Uso

```typescript
<Selecao navigation={navigation} />
```

## Conclusão

O componente `Selecao` é uma parte fundamental da interface do usuário, permitindo que os usuários visualizem e gerenciem suas metas de ingestão calórica de forma interativa e informativa.