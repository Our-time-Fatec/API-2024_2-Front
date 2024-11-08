---
title: PerfilScreen
description: 'Componente de tela de perfil do usuário, exibindo informações e opções de edição.'
---

# PerfilScreen

O componente `PerfilScreen` é responsável por exibir as informações do perfil do usuário, permitindo que ele visualize e edite seus dados. Este componente utiliza hooks personalizados para gerenciar o estado do usuário e a imagem do perfil.

## Estrutura do Componente

### Importações

O componente importa diversas bibliotecas e hooks, incluindo:

- **React**: Para a criação do componente.
- **React Native**: Para a construção da interface do usuário.
- **Expo**: Para gerenciamento de fontes e splash screen.
- **Hooks personalizados**: `useUsuario` e `useProfilePicture` para gerenciar dados do usuário e a imagem do perfil.

### Tipos

Define os tipos de navegação e rota:

```typescript
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "Profile">;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};
```

### Estado e Efeitos

- **Carregamento de fontes**: Utiliza o hook `useFonts` para carregar fontes personalizadas.
- **Dados do usuário**: Obtém informações do usuário através do hook `useUsuario`.
- **Efeitos de foco**: Utiliza `useFocusEffect` para recarregar os dados do usuário sempre que a tela ganha foco.

### Funções

- **handleLogout**: Realiza o logout do usuário, removendo tokens do armazenamento assíncrono e redirecionando para a tela inicial.
- **handleEdit**: Navega para a tela de edição de perfil.

### Renderização

O componente renderiza:

- Uma imagem de perfil ou um ícone padrão se a imagem não estiver disponível.
- Informações do usuário, como nome, idade, altura, peso, objetivo e nível de sedentarismo.
- Um menu com opções para editar o perfil, visualizar dietas, alimentos cadastrados, FAQs e logout.

### Estilos

Os estilos são importados de um arquivo separado (`styles.ts`), garantindo uma separação clara entre a lógica do componente e a apresentação visual.

## Exemplo de Uso

```typescript
<PerfilScreen navigation={navigation} route={route} />
```

Este componente deve ser utilizado dentro de um contexto de navegação, onde `navigation` e `route` são passados como props.