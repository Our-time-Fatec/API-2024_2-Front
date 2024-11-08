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

## Tipos

O componente utiliza tipos do TypeScript para definir as propriedades de navegação e rota:

- `QuestionarioScreenNavigationProp`: Tipo para navegação.
- `QuestionarioScreenRouteProp`: Tipo para a rota.

### Props

As propriedades do componente são definidas como:

```typescript
type Props = {
    navigation: QuestionarioScreenNavigationProp;
    route: QuestionarioScreenRouteProp;
};
```

## Renderização

O componente renderiza uma série de campos de entrada para o usuário preencher:

1. **Imagem de Perfil**: Exibe uma imagem de perfil com a opção de editar.
2. **Campos de Entrada**:
   - Nome
   - Idade
   - Altura
   - Peso
   - Objetivo

Cada campo de entrada é acompanhado por um ícone correspondente.

## Navegação

Ao finalizar o cadastro, o usuário pode clicar no botão "Finalizar cadastro", que navega para a tela de login:

```javascript
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
    <Text style={styles.buttonText}>Finalizar cadastro</Text>
</TouchableOpacity>
```

## Estilos

Os estilos são importados de um arquivo externo `styles.ts`, que define a aparência da tela e dos componentes.

## Conclusão

A tela `Questionario` é uma parte essencial do fluxo de cadastro, permitindo que os usuários forneçam informações necessárias para personalizar sua experiência no aplicativo.