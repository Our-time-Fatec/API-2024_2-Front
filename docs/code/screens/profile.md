---
title: profile
description: 'Pasta contendo componentes e telas relacionadas ao perfil do usuário.'
---

# profile

A pasta `profile` contém os componentes e telas que gerenciam as funcionalidades relacionadas ao perfil do usuário. Esta estrutura é parte do sistema de gerenciamento de perfis, permitindo que os usuários visualizem e editem suas informações pessoais.

## Estrutura da Pasta

- **index.tsx**: Componente principal da tela de perfil, responsável por renderizar as informações do usuário e as opções de edição.
- **styles.ts**: Arquivo de estilos associado à tela de perfil, definindo a aparência e o layout dos componentes.

## Funcionalidades

- Visualização de informações do usuário.
- Edição de dados pessoais.
- Integração com o contexto de autenticação para garantir que apenas usuários autenticados possam acessar e modificar suas informações.

## Uso

Para utilizar os componentes desta pasta, importe o `index.tsx` em outras partes do aplicativo onde a funcionalidade de perfil é necessária. Certifique-se de que o contexto de autenticação esteja configurado corretamente para permitir o acesso às informações do usuário.