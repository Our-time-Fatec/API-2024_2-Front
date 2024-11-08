---
title: Login
description: 'Componente de tela de login para autenticação de usuários.'
---

# Login

O componente `Login` é responsável pela interface de autenticação de usuários. Ele permite que os usuários insiram suas credenciais (email e senha) e realizem o login na aplicação.

## Estrutura do Componente

O componente é construído utilizando React e React Native, e possui a seguinte estrutura:

- **Imports**: Importa bibliotecas e componentes necessários, incluindo ícones, estilos e hooks personalizados.
- **Tipos**: Define os tipos de navegação e propriedades do componente.
- **Estado**: Utiliza o hook `useState` para gerenciar o estado do formulário de login.
- **Funções**:
  - `handleLogin`: Função assíncrona que chama o hook `useLogin` para realizar a autenticação.
  - `handleChange`: Atualiza o estado do formulário conforme o usuário digita.

## Renderização

O componente renderiza:

- Um título "Entre".
- Dois campos de entrada:
  - Email
  - Senha
- Um botão para realizar o login.
- Um link para redirecionar usuários que não possuem conta para a tela de cadastro.
- Mensagens de erro, caso ocorram durante o processo de login.

## Estilos

Os estilos são importados de um arquivo separado e aplicados a cada elemento para garantir uma apresentação visual adequada.

## Navegação

Após um login bem-sucedido, o usuário é redirecionado para a tela "Selecao". Caso ocorra um erro, uma mensagem de erro é exibida na tela.

## Exemplo de Uso

```tsx
<Login navigation={navigation} route={route} />
```

Este componente é uma parte fundamental da experiência do usuário, permitindo acesso seguro à aplicação.