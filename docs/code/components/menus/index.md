---
title: FooterMenu
description: 'Componente de menu de rodapé que permite a navegação entre diferentes telas da aplicação.'
---

# FooterMenu

O componente `FooterMenu` é um menu de rodapé que permite a navegação entre diferentes telas da aplicação. Ele utiliza ícones do pacote `Ionicons` e é projetado para se adaptar ao estado de foco da tela atual.

## Props

### `navigation`

- **Tipo**: `any`
- **Descrição**: Propriedade que representa o objeto de navegação, utilizado para navegar entre as telas.

## Estado

### `focusedScreen`

- **Tipo**: `string | null`
- **Descrição**: Armazena o nome da tela atualmente focada. É atualizado sempre que a tela muda.

## Hooks Utilizados

- **`useFocusEffect`**: Este hook é utilizado para executar um efeito sempre que o componente ganha ou perde o foco. Ele atualiza o estado `focusedScreen` com o nome da rota atual.

## Funções

### `handlePress(screen: string)`

- **Parâmetro**: 
  - `screen`: O nome da tela para a qual navegar.
- **Descrição**: Atualiza o estado `focusedScreen` e navega para a tela especificada.

## Renderização

O componente renderiza uma `View` contendo vários `TouchableOpacity`, cada um representando uma opção de menu. Cada opção de menu exibe um ícone e um texto correspondente à tela que será acessada ao ser pressionada.

### Itens do Menu

1. **Home**
   - Navega para a tela `Selecao`.
   - Ícone: `home` ou `home-outline` dependendo do estado de foco.

2. **Dietas**
   - Navega para a tela `UserDietas`.
   - Ícone: `restaurant` ou `restaurant-outline`.

3. **Check-list**
   - Navega para a tela `UserDietaDiaria`.
   - Ícone: `checkmark-circle` ou `checkmark-circle-outline`.

4. **Alimentos**
   - Navega para a tela `ListAlimentos`.
   - Ícone: `search` ou `search-outline`.

5. **Água**
   - Navega para a tela `AguaConsumida`.
   - Ícone: `water` ou `water-outline`.

6. **Profile**
   - Navega para a tela `Profile`.
   - Ícone: `person` ou `person-outline`.

## Estilos

Os estilos do componente são importados do arquivo `styles.ts`, que define a aparência do menu e de seus itens.

## Exemplo de Uso

```jsx
<FooterMenu navigation={navigation} />
```

Este componente deve ser utilizado dentro de um contexto onde o objeto `navigation` está disponível, como em uma tela gerenciada pelo React Navigation.