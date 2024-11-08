---
title: rootStack
description: 'Define a lista de parâmetros para a navegação entre as telas da aplicação.'
---

# RootStackParamList

O `RootStackParamList` é um tipo TypeScript que define os parâmetros de navegação para as diferentes telas da aplicação. Cada chave representa uma tela e o valor associado indica os parâmetros que podem ser passados para essa tela.

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
  DietasPredefinidas: undefined;
  DietasPersonalizadas: undefined;
  CadastroDieta: { dietaId: string };
  AguaConsumida: undefined;
  UserDietaDiaria: undefined;
};
```

## Descrição dos Parâmetros

- **Home**: Tela inicial da aplicação, sem parâmetros.
- **Login**: Tela de login, sem parâmetros.
- **Cadastro**: Tela de cadastro, sem parâmetros.
- **Questionario**: Tela de questionário, sem parâmetros.
- **Selecao**: Tela de seleção, sem parâmetros.
- **ListAlimentos**: Tela para listar alimentos, sem parâmetros.
- **Profile**: Tela de perfil do usuário, sem parâmetros.
- **EditProfile**: Tela para editar o perfil do usuário, sem parâmetros.
- **CadastroAlimento**: Tela para cadastrar um alimento, requer `alimentoId` como parâmetro.
- **UserAlimentos**: Tela que exibe os alimentos do usuário, sem parâmetros.
- **UserAlimentosConsumidos**: Tela que exibe os alimentos consumidos pelo usuário, sem parâmetros.
- **FAQs**: Tela de perguntas frequentes, sem parâmetros.
- **UserDietas**: Tela que exibe as dietas do usuário, sem parâmetros.
- **DietasPredefinidas**: Tela que exibe dietas predefinidas, sem parâmetros.
- **DietasPersonalizadas**: Tela que exibe dietas personalizadas, sem parâmetros.
- **CadastroDieta**: Tela para cadastrar uma dieta, requer `dietaId` como parâmetro.
- **AguaConsumida**: Tela que exibe o consumo de água, sem parâmetros.
- **UserDietaDiaria**: Tela que exibe a dieta diária do usuário, sem parâmetros.

## Uso

Este tipo é utilizado para garantir que os parâmetros passados entre as telas estejam corretos, proporcionando uma navegação segura e tipada na aplicação.