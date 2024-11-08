---
title: EditProfile
description: 'Componente para edição do perfil do usuário, permitindo atualização de informações pessoais e de conta.'
---

# EditProfile

O componente `EditProfile` é responsável pela interface de edição do perfil do usuário em um aplicativo React Native. Ele permite que os usuários atualizem suas informações pessoais, como nome, sobrenome, email, data de nascimento, altura, peso, objetivo, nível de sedentarismo e sexo. Além disso, o componente oferece a funcionalidade de atualizar a senha e a imagem de perfil.

## Estrutura do Componente

### Importações

O componente utiliza várias bibliotecas e hooks, incluindo:

- `React` e hooks como `useState` e `useEffect` para gerenciar o estado e os efeitos colaterais.
- Componentes do React Native como `View`, `Text`, `TextInput`, `TouchableOpacity`, `ScrollView`, `Image`, `Alert`, `StatusBar`, e `ActivityIndicator`.
- `Ionicons` para ícones.
- `Picker` para seleção de opções.
- `DateTimePickerModal` para seleção de data.
- Hooks personalizados como `useUsuario`, `useUpdateUser`, e `useProfilePicture`.

### Tipos

O componente define tipos para as propriedades de navegação e rota:

```typescript
type EditProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, "EditProfile">;
type EditProfileScreenRouteProp = RouteProp<RootStackParamList, "EditProfile">;

type Props = {
  navigation: EditProfileScreenNavigationProp;
  route: EditProfileScreenRouteProp;
};
```

### Estado

O estado do componente é gerenciado através de `useState`, incluindo:

- `formState`: Armazena as informações do usuário.
- `dataNascimento`: Armazena a data de nascimento em formato de string.
- `showDatePicker`: Controla a visibilidade do seletor de data.
- `selectedDate`: Armazena a data selecionada.
- `dataFormatada`: Armazena a data de nascimento formatada.

### Efeitos

O `useEffect` é utilizado para carregar as informações do usuário quando o componente é montado ou quando o usuário é atualizado.

### Funções

- **handleInputChange**: Atualiza o estado do formulário com base na entrada do usuário.
- **handleDateChange**: Formata e valida a data de nascimento.
- **handleDateConfirm**: Atualiza o estado com a data selecionada.
- **handleUpdate**: Valida e envia as informações atualizadas do usuário.

### Renderização

O componente renderiza uma interface que inclui:

- Um seletor de imagem de perfil.
- Campos de entrada para nome, sobrenome, email, data de nascimento, altura, peso, objetivo, nível de sedentarismo, sexo e senha.
- Um botão para atualizar o perfil.
- Um menu de rodapé para navegação.

### Exibição de Loading e Erros

O componente exibe um indicador de carregamento enquanto as informações do usuário estão sendo carregadas e uma mensagem de erro caso ocorra algum problema.

## Conclusão

O componente `EditProfile` é uma parte essencial da experiência do usuário, permitindo que os usuários mantenham suas informações atualizadas de forma intuitiva e eficiente.