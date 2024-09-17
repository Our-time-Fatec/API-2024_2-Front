---
title: index
description: 'Componente de Botões para React Native com estilos personalizados.'
---

# index.tsx

Este arquivo contém a implementação de dois componentes de botão para uso em aplicações React Native: `BotaoAzul` e `BotaoBranco`. Ambos os componentes são projetados para serem reutilizáveis e personalizáveis.

## BotaoAzul

O componente `BotaoAzul` é um botão estilizado que utiliza a fonte Poppins. Ele aceita as seguintes propriedades:

### Props

- **texto**: `string` - O texto a ser exibido no botão.
- **onPress**: `() => void` - Função a ser chamada quando o botão é pressionado.
- **style**: `StyleProp<ViewStyle>` (opcional) - Estilo adicional para o contêiner do botão.
- **textStyle**: `StyleProp<TextStyle>` (opcional) - Estilo adicional para o texto do botão.

### Exemplo de Uso

```jsx
<BotaoAzul 
  texto="Clique Aqui" 
  onPress={() => console.log('Botão Azul Pressionado')} 
  style={{ margin: 10 }} 
  textStyle={{ color: 'white' }} 
/>
```

## BotaoBranco

O componente `BotaoBranco` é um botão simples que também aceita propriedades semelhantes ao `BotaoAzul`, mas com um estilo diferente.

### Props

- **texto**: `string` - O texto a ser exibido no botão.
- **onPress**: `() => void` - Função a ser chamada quando o botão é pressionado.
- **style**: `StyleProp<ViewStyle>` (opcional) - Estilo adicional para o contêiner do botão.
- **textStyle**: `StyleProp<TextStyle>` (opcional) - Estilo adicional para o texto do botão.

### Exemplo de Uso

```jsx
<BotaoBranco 
  texto="Cancelar" 
  onPress={() => console.log('Botão Branco Pressionado')} 
  style={{ margin: 10 }} 
  textStyle={{ color: 'black' }} 
/>
```

## Considerações

- O componente `BotaoAzul` carrega fontes usando o hook `useFonts` do Expo. Enquanto as fontes estão sendo carregadas, o componente impede a exibição da tela até que as fontes estejam prontas.
- O `SplashScreen` é utilizado para gerenciar a tela de carregamento enquanto as fontes estão sendo carregadas.

Esses componentes são úteis para criar interfaces de usuário consistentes e estilizadas em aplicações React Native.