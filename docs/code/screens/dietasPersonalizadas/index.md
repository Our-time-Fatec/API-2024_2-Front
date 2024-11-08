---
title: DietasPersonalizadas
description: 'Componente para exibir dietas personalizadas em uma interface de usuário React Native.'
---

# DietasPersonalizadas

O componente `DietasPersonalizadas` é responsável por exibir uma lista de dietas personalizadas em uma interface de usuário desenvolvida com React Native. Ele utiliza a navegação do React Navigation para gerenciar a navegação entre telas.

## Estrutura do Componente

O componente é definido como uma função funcional do React e recebe as propriedades de navegação e rota. Abaixo está a estrutura básica do componente:

```tsx
const DietasPersonalizadas: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Conteúdo do componente */}
    </ScrollView>
  );
};
```

## Propriedades

O componente aceita as seguintes propriedades:

- `navigation`: Objeto de navegação que permite a navegação entre as telas.
- `route`: Objeto que contém informações sobre a rota atual.

## Renderização

O componente renderiza um `ScrollView` que contém:

- Um cabeçalho com o título "Dietas Personalizadas".
- Várias `View` que representam diferentes refeições (Café da Manhã, Almoço, Café da Tarde, Jantar), cada uma contendo uma imagem e um título.
- Uma imagem ilustrativa adicional ao final da lista.

### Exemplo de Renderização

```tsx
<ScrollView style={styles.container}>
  <Text style={styles.header}>Dietas Personalizadas.</Text>
  
  <View style={styles.card}>
    <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>Café da Manhã</Text>
    </View>
  </View>
  
  {/* Repetido para outras refeições */}
  
  <Image source={{ uri: 'https://via.placeholder.com/250' }} style={styles.largeImage} />
</ScrollView>
```

## Estilos

Os estilos do componente são importados de um arquivo separado `styles.ts`, que define a aparência visual do componente, incluindo o layout e a formatação dos textos e imagens.

## Exportação

O componente é exportado como padrão para ser utilizado em outras partes da aplicação:

```tsx
export default DietasPersonalizadas;
```

## Conclusão

O componente `DietasPersonalizadas` é uma parte essencial da interface de usuário, permitindo que os usuários visualizem suas dietas personalizadas de forma clara e organizada.