---
title: Introdução
description: 'Uma visão geral do projeto, incluindo requisitos, como rodar e estrutura de pastas.'
---

# Introdução

Este projeto é um aplicativo frontend desenvolvido com React Native e Expo, denominado **api-2024_2-front**. O objetivo principal é fornecer uma interface de usuário para interagir com uma API, permitindo que os usuários gerenciem dietas e alimentos de forma eficiente.

## Visão Geral

O aplicativo é estruturado em várias pastas que organizam componentes, contextos, hooks, interfaces e serviços. Abaixo está uma breve descrição de cada uma dessas pastas:

- **context**: Contém contextos React para gerenciar estados globais, como autenticação.
- **enums**: Define enums utilizados em todo o aplicativo, como dias da semana.
- **hooks**: Contém hooks personalizados que encapsulam lógica de negócios, como autenticação e manipulação de alimentos.
- **interfaces**: Define as interfaces TypeScript para garantir a tipagem correta dos dados.
- **services**: Contém serviços para interagir com APIs externas.
- **components**: Agrupa componentes reutilizáveis, como botões e menus.
- **screens**: Contém as telas do aplicativo, cada uma representando uma funcionalidade específica.

## Requisitos

Para rodar este projeto, você precisará ter os seguintes requisitos instalados:

- Node.js (versão 14 ou superior)
- Expo CLI (instalado globalmente)
- Um emulador Android/iOS ou um dispositivo físico para testes

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd api-2024_2-front
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```

4. Escolha a plataforma desejada (Android, iOS ou Web) para visualizar o aplicativo.

## Estrutura de Pastas

A estrutura de pastas do projeto é a seguinte:

```
api-2024_2-front/
├── app.json
├── App.tsx
├── babel.config.js
├── package.json
├── react-native.config.js
├── context/
│   └── AuthContext.tsx
├── enums/
│   └── diasSemana.ts
├── hooks/
│   ├── UseDietas.ts
│   ├── useAlimentos.ts
│   ├── useLogin.ts
│   ├── useRegister.ts
│   ├── useUpdateUser.ts
│   └── useUsuario.ts
├── interfaces/
│   ├── IAlimento.ts
│   ├── ICategoria.ts
│   ├── IDieta.ts
│   ├── ILogin.ts
│   └── IUsuario.ts
├── services/
│   └── api.ts
├── types/
│   ├── declaration.d.ts
│   ├── env.d.ts
│   └── rootStack.ts
├── assets/
│   └── fonts/
├── components/
│   ├── colors/
│   ├── fonts/
│   ├── dieta/
│   ├── alimento/
│   ├── buttons/
│   └── menus/
└── screens/
    ├── cadastrarAlimento/
    ├── FAQs/
    ├── cadastro/
    ├── editProfile/
    ├── home/
    ├── listAlimentos/
    ├── selecao/
    ├── questionario/
    ├── profile/
    ├── userDietas/
    ├── userAlimentos/
    ├── login/
    └── userAlimentosConsumidos/
```

Com esta introdução, você deve estar preparado para começar a trabalhar no projeto e explorar suas funcionalidades.