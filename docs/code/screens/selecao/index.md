---
title: Selecao
description: 'Tela de seleção que exibe informações sobre a ingestão diária de calorias do usuário.'
---

# Selecao

A tela `Selecao` é responsável por apresentar ao usuário informações sobre sua ingestão diária de calorias, incluindo metas e consumo atual. Ela utiliza o contexto do usuário para obter dados relevantes e exibe mensagens de feedback com base no consumo de calorias.

## Estrutura do Componente

O componente é estruturado da seguinte forma:

- **Props**: Recebe `navigation` e `route` como propriedades, que são utilizados para navegação e manipulação de rotas.
- **Estado do Usuário**: Utiliza o hook `useUsuario` para acessar informações do usuário, como metas de calorias e totais consumidos.
- **Verificação de Calorias**: A função `verificarCalorias` compara o consumo atual com a meta estabelecida e retorna um objeto com texto e cor apropriados para feedback visual.

## Ciclo de Vida

O componente utiliza o hook `useFocusEffect` para garantir que as informações do usuário sejam atualizadas sempre que a tela estiver em foco, chamando a função `refreshUser`.

## Renderização

A renderização do componente é dividida em duas partes principais:

1. **Cabeçalho**: Exibe uma saudação ao usuário e seu nome.
2. **Conteúdo**: Mostra a ingestão diária de calorias, incluindo:
   - Meta de calorias por dia.
   - Status do consumo em relação à meta.
   - Detalhes sobre os alimentos consumidos, como proteínas, carboidratos, fibras e lipídios.

## Estilos

Os estilos são importados de um arquivo separado (`styles`), permitindo uma separação clara entre a lógica do componente e a apresentação visual.

## Dependências

- `react-native`: Para componentes de interface.
- `@expo/vector-icons`: Para ícones.
- `@react-navigation/stack`: Para navegação entre telas.
- `@react-navigation/native`: Para manipulação de rotas.

## Exemplo de Uso

```tsx
<Selecao navigation={navigation} route={route} />
```

Este componente é uma parte essencial da aplicação, proporcionando ao usuário uma visão clara de sua ingestão calórica e ajudando na gestão de sua dieta.