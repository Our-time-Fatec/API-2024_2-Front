---
title: Cadastro
description: 'Tela de cadastro de usuário com validação e gerenciamento de estado.'
---

# Cadastro

A tela de cadastro permite que novos usuários se registrem no aplicativo. Ela coleta informações essenciais, como nome, sobrenome, email, senha, data de nascimento, altura, peso, nível de sedentarismo, sexo e objetivo da dieta.

## Estrutura do Componente

O componente `Cadastro` é um componente funcional que utiliza hooks do React para gerenciar o estado e a navegação.

### Props

- `navigation`: Objeto de navegação que permite a transição entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

### Estado

O estado do componente é gerenciado através do hook `useState`, que armazena as informações do formulário em um objeto do tipo `IUsuario`.

### Funções Principais

- **handleInputChange**: Atualiza o estado do formulário com base na entrada do usuário. Trata entradas numéricas para altura e peso.
  
- **handleDateConfirm**: Atualiza a data de nascimento no estado quando o usuário seleciona uma data no `DateTimePickerModal`.

- **handleRegister**: Valida as senhas e chama a função de registro. Se o registro for bem-sucedido, navega para a tela de seleção; caso contrário, exibe um alerta com o erro.

### Renderização

A tela é composta por:

- Um `ScrollView` que permite a rolagem do conteúdo.
- Vários campos de entrada (`TextInput`) para coletar informações do usuário.
- Um `DateTimePickerModal` para seleção da data de nascimento.
- `Picker` para seleção de opções como nível de sedentarismo, sexo e objetivo da dieta.
- Um botão para submeter o formulário.

### Estilos

Os estilos são importados de um arquivo separado (`styles`), que define a aparência dos componentes.

### Dependências

- `react-native`: Biblioteca principal para construção de interfaces móveis.
- `@expo/vector-icons`: Para ícones utilizados nos campos de entrada.
- `react-native-modal-datetime-picker`: Para seleção de data.
- `@react-navigation/stack`: Para navegação entre telas.

### Exemplo de Uso

```tsx
<Cadastro navigation={navigation} route={route} />
```

Esta tela é uma parte fundamental do fluxo de registro de usuários, garantindo que as informações sejam coletadas de forma organizada e validada antes de serem enviadas para o backend.