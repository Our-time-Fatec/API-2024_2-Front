---
title: PerfilScreen
description: 'Tela de perfil do usuário, exibindo informações pessoais e opções de navegação.'
---

# PerfilScreen

A `PerfilScreen` é um componente React que representa a tela de perfil do usuário em um aplicativo React Native. Esta tela exibe informações pessoais do usuário, como nome, idade, altura, peso e outros dados relevantes, além de fornecer opções para editar o perfil, visualizar dietas e alimentos cadastrados, acessar FAQs e realizar logout.

## Estrutura do Componente

### Props

- `navigation`: Objeto de navegação que permite a navegação entre as telas.
- `route`: Objeto que contém informações sobre a rota atual.

### Hooks Utilizados

- `useUsuario`: Hook personalizado que gerencia o estado do usuário, incluindo informações, carregamento e erros.
- `useAuth`: Hook que fornece métodos de autenticação, como definir o estado de autenticação do usuário.
- `useFocusEffect`: Hook que permite executar efeitos colaterais quando a tela está em foco.

### Funções Principais

- `handleLogout`: Remove os tokens de autenticação e navega para a tela inicial.
- `handleEdit`: Navega para a tela de edição de perfil.

### Renderização Condicional

- Exibe um indicador de carregamento enquanto os dados do usuário estão sendo carregados.
- Exibe uma mensagem de erro caso ocorra um problema ao carregar os dados do usuário.

## Estilos

Os estilos são definidos utilizando `StyleSheet.create`, organizando a aparência da tela, incluindo a disposição dos elementos, tamanhos e cores.

### Exemplo de Uso

```jsx
<PerfilScreen navigation={navigation} route={route} />
```

## Conclusão

A `PerfilScreen` é uma parte essencial do aplicativo, permitindo que os usuários visualizem e gerenciem suas informações pessoais de forma intuitiva.