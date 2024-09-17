---
title: Questionario
description: 'Tela de questionário para coleta de informações básicas do usuário.'
---

# Questionario

A tela `Questionario` é responsável por coletar informações básicas do usuário, como nome, idade, altura, peso e objetivo. Esta tela é parte do fluxo de cadastro e permite que o usuário edite sua foto de perfil.

## Estrutura do Componente

O componente é implementado como uma função React que utiliza as seguintes bibliotecas e componentes:

- **React**: Biblioteca principal para construção de interfaces.
- **React Native**: Para componentes nativos como `View`, `Text`, `TextInput`, `Image`, `TouchableOpacity`.
- **Ionicons**: Para ícones utilizados nos campos de entrada.
- **Estilos**: Importa estilos de um arquivo externo.

## Props

O componente `Questionario` recebe as seguintes propriedades:

- `navigation`: Objeto de navegação que permite a navegação entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

## Renderização

A tela é composta pelos seguintes elementos:

1. **Cabeçalho**: Um texto que indica "Informações básicas".
2. **Imagem de Perfil**: Um componente `Image` que exibe a foto do usuário.
3. **Botão de Edição de Foto**: Um `TouchableOpacity` que permite ao usuário editar sua foto.
4. **Campos de Entrada**: Vários `TextInput` para coletar informações:
   - Nome
   - Idade
   - Altura
   - Peso
   - Objetivo
5. **Botão de Finalização**: Um `TouchableOpacity` que, ao ser pressionado, navega para a tela de login.

## Estilos

Os estilos são importados de um arquivo externo `styles`, que define a aparência dos componentes, como layout, cores e tamanhos.

## Navegação

Ao finalizar o cadastro, o usuário é redirecionado para a tela de login através da função `navigation.navigate("Login")`.

## Exemplo de Uso

```tsx
<Questionario navigation={navigation} route={route} />
```

Esta tela é uma parte essencial do fluxo de cadastro, garantindo que o usuário forneça informações necessárias para personalização e uso do aplicativo.