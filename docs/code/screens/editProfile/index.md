---
title: EditProfile
description: 'Componente para edição do perfil do usuário, permitindo atualização de informações pessoais e de conta.'
---

# EditProfile

O componente `EditProfile` é responsável pela interface de edição do perfil do usuário em um aplicativo React Native. Ele permite que os usuários atualizem suas informações pessoais, como nome, sobrenome, email, data de nascimento, altura, peso, objetivo, nível de sedentarismo, sexo e senha.

## Estrutura do Componente

O componente utiliza hooks do React para gerenciar o estado e os efeitos colaterais. Ele também faz uso de componentes de terceiros, como `DateTimePickerModal` para seleção de data e `Picker` para seleção de opções.

### Props

- `navigation`: Objeto de navegação fornecido pelo React Navigation.
- `route`: Objeto de rota fornecido pelo React Navigation.

### Estado

O estado do componente é gerenciado através do hook `useState`, que contém as seguintes propriedades:

- `nome`: Nome do usuário.
- `sobrenome`: Sobrenome do usuário.
- `email`: Email do usuário.
- `senha`: Nova senha do usuário.
- `confirmarSenha`: Confirmação da nova senha.
- `dataDeNascimento`: Data de nascimento do usuário.
- `altura`: Altura do usuário em centímetros.
- `peso`: Peso do usuário em quilogramas.
- `objetivo`: Objetivo do usuário em relação à dieta.
- `nivelDeSedentarismo`: Nível de sedentarismo do usuário.
- `sexo`: Sexo do usuário.
- `showDatePicker`: Estado para controlar a visibilidade do seletor de data.

### Efeitos

O hook `useEffect` é utilizado para preencher o estado do formulário com os dados do usuário quando estes são carregados.

### Funções

- `handleInputChange`: Atualiza o estado do formulário com base na entrada do usuário.
- `handleDateConfirm`: Atualiza a data de nascimento no estado quando uma nova data é selecionada.
- `handleUpdate`: Valida e envia os dados atualizados do usuário para o serviço de atualização.

### Renderização

O componente renderiza um formulário que inclui:

- Campos de entrada para nome, sobrenome, email, altura, peso, nova senha e confirmação de senha.
- Um seletor de data para a data de nascimento.
- Seletores (`Picker`) para objetivo, nível de sedentarismo e sexo.
- Um botão para submeter as alterações.

### Exibição de Mensagens

Mensagens de carregamento e erro são exibidas conforme necessário, utilizando o componente `Alert` do React Native para feedback ao usuário.

### Estilos

Os estilos são importados de um arquivo separado (`styles.ts`), permitindo uma melhor organização e manutenção do código.

## Conclusão

O componente `EditProfile` é uma parte essencial da experiência do usuário, permitindo que os usuários mantenham suas informações atualizadas de forma intuitiva e eficiente.