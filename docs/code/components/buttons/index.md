---
title: index
description: 'Componente de Botões para React Native com estilos personalizados.'
---

# Componente de Botões

Este arquivo contém a implementação de dois componentes de botão para uso em aplicações React Native: `BotaoAzul` e `BotaoBranco`. Ambos os componentes são projetados para serem reutilizáveis e personalizáveis.

## BotaoAzul

O componente `BotaoAzul` é um botão estilizado que utiliza a fonte Poppins. Ele é ideal para ações que requerem destaque.

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

O componente `BotaoBranco` é um botão simples, ideal para ações secundárias ou menos destacadas.

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

- O componente `BotaoAzul` carrega fontes utilizando o hook `useFonts` do Expo. Enquanto as fontes não estiverem carregadas, o componente não será exibido.
- O `SplashScreen` é utilizado para evitar que a tela inicial do aplicativo apareça antes que as fontes estejam carregadas.

## Exportação

Os componentes `BotaoAzul` e `BotaoBranco` são exportados para serem utilizados em outras partes da aplicação:

```javascript
export { BotaoAzul, BotaoBranco };
```