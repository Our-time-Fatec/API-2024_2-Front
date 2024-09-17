---
title: rootStack
description: 'Definição da lista de parâmetros para a navegação no aplicativo.'
---

# RootStackParamList

O `RootStackParamList` é um tipo TypeScript que define os parâmetros de navegação para as diferentes telas do aplicativo. Cada chave representa uma tela e o valor associado indica os parâmetros que podem ser passados para essa tela.

## Estrutura

```typescript
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Cadastro: undefined;
  Questionario: undefined;
  Selecao: undefined;
  ListAlimentos: undefined;
  Profile: undefined;
  EditProfile: undefined;
  CadastroAlimento: { alimentoId: string };
  UserAlimentos: undefined;
  UserAlimentosConsumidos: undefined;
  FAQs: undefined;
  UserDietas: undefined;
};
```

## Descrição dos Parâmetros

- **Home**: Tela inicial do aplicativo. Não requer parâmetros.
- **Login**: Tela de login do usuário. Não requer parâmetros.
- **Cadastro**: Tela de cadastro de novos usuários. Não requer parâmetros.
- **Questionario**: Tela para responder a um questionário. Não requer parâmetros.
- **Selecao**: Tela de seleção de opções. Não requer parâmetros.
- **ListAlimentos**: Tela que lista os alimentos disponíveis. Não requer parâmetros.
- **Profile**: Tela de perfil do usuário. Não requer parâmetros.
- **EditProfile**: Tela para edição do perfil do usuário. Não requer parâmetros.
- **CadastroAlimento**: Tela para cadastro de um alimento específico. Requer o parâmetro `alimentoId` do tipo `string`.
- **UserAlimentos**: Tela que exibe os alimentos do usuário. Não requer parâmetros.
- **UserAlimentosConsumidos**: Tela que mostra os alimentos consumidos pelo usuário. Não requer parâmetros.
- **FAQs**: Tela de perguntas frequentes. Não requer parâmetros.
- **UserDietas**: Tela que exibe as dietas do usuário. Não requer parâmetros.

## Uso

Este tipo é utilizado para garantir que a navegação entre as telas do aplicativo seja feita de forma segura, evitando erros de tipo ao passar parâmetros.