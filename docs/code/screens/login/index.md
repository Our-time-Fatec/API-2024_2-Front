---
title: Login
description: 'Componente de tela de login para autenticação de usuários.'
---

# Login

O componente `Login` é responsável pela interface de autenticação de usuários. Ele permite que os usuários insiram suas credenciais (email e senha) e realizem o login no aplicativo.

## Estrutura do Componente

O componente é construído utilizando React e React Native, e possui a seguinte estrutura:

- **Estado do Formulário**: Utiliza o hook `useState` para gerenciar o estado das credenciais de login.
- **Hooks**: Faz uso do hook personalizado `useLogin` para gerenciar a lógica de autenticação.
- **Navegação**: Utiliza `StackNavigationProp` e `RouteProp` para navegação entre telas.

## Props

O componente recebe as seguintes propriedades:

- `navigation`: Objeto de navegação que permite a transição entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

## Funções Principais

### `handleLogin`

Função assíncrona que é chamada ao pressionar o botão de login. Ela tenta autenticar o usuário com as credenciais fornecidas e, em caso de sucesso, navega para a tela de seleção.

### `handleChange`

Atualiza o estado do formulário com os valores inseridos pelo usuário. Recebe o nome do campo e o valor correspondente.

## Renderização

O componente renderiza:

- Um título "Entre".
- Dois campos de entrada: um para o email e outro para a senha, ambos com ícones.
- Mensagem de erro, caso ocorra durante o processo de login.
- Um botão azul para realizar o login.
- Um link para a tela de cadastro, caso o usuário não tenha uma conta.

## Estilos

Os estilos são importados de um arquivo separado `styles`, que define a aparência do componente, incluindo a disposição dos elementos e cores.

## Observações

- A funcionalidade de "Esqueceu a senha?" e o login com Google estão comentados e podem ser implementados posteriormente.
- O componente utiliza ícones da biblioteca `Ionicons` e uma imagem de logo para a interface.