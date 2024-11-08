---
title: Cadastro
description: 'Componente de cadastro de usuário, permitindo a entrada de informações pessoais e a criação de uma nova conta.'
---

# Cadastro

O componente `Cadastro` é responsável por permitir que novos usuários se registrem no aplicativo. Ele coleta informações pessoais, como nome, sobrenome, email, senha, data de nascimento, altura, peso, nível de sedentarismo, sexo e objetivo da dieta.

## Estrutura do Componente

O componente é construído utilizando React e React Native, e possui a seguinte estrutura:

- **Imports**: Importa bibliotecas e componentes necessários, incluindo hooks personalizados e utilitários.
- **Tipos**: Define os tipos de navegação e propriedades do componente.
- **Estado**: Utiliza o hook `useState` para gerenciar o estado do formulário e da imagem de perfil.
- **Funções**: Contém várias funções para manipulação de dados, como:
  - `handleInputChange`: Atualiza o estado do formulário com base na entrada do usuário.
  - `handleDateChange`: Formata e valida a data de nascimento.
  - `handleRegister`: Realiza a validação e o registro do usuário.

## Funcionalidades

- **Seleção de Imagem**: Permite que o usuário selecione uma imagem de perfil ou tire uma foto.
- **Validação de Formulário**: Verifica se os dados inseridos estão corretos antes de enviar o registro.
- **Data de Nascimento**: Utiliza um seletor de data para facilitar a entrada da data de nascimento.
- **Feedback ao Usuário**: Exibe alertas para informar o sucesso ou falha no registro.

## Estilos

Os estilos são importados de um arquivo separado (`styles.ts`) e aplicados a diferentes partes do componente para garantir uma interface de usuário consistente e responsiva.

## Uso

Para utilizar o componente `Cadastro`, basta importá-lo e incluí-lo na sua árvore de componentes:

```javascript
import Cadastro from './screens/cadastro';
```

## Conclusão

O componente `Cadastro` é uma parte essencial do fluxo de registro do usuário, garantindo que as informações sejam coletadas de forma organizada e validada antes de serem enviadas para o backend.