---
title: AguaConsumida
description: 'Tela para monitorar e gerenciar a ingestão de água do usuário.'
---

# AguaConsumida

A tela `AguaConsumida` é responsável por permitir que o usuário monitore e gerencie sua ingestão diária de água. Ela fornece uma interface visual para visualizar a quantidade de água ingerida em relação à meta estabelecida.

## Estrutura do Componente

O componente é implementado como uma função React que utiliza hooks para gerenciar estado e efeitos colaterais. Abaixo estão os principais elementos e funcionalidades do componente:

### Props

- `navigation`: Objeto de navegação que permite a navegação entre telas.
- `route`: Objeto que contém informações sobre a rota atual.

### Estado

O componente utiliza os seguintes estados:

- `meta`: Armazena a meta diária de ingestão de água do usuário.
- `porcentagem`: Representa a porcentagem da meta que foi atingida.
- `aguaIngerida`: Quantidade total de água ingerida pelo usuário.
- `atualizacao`: Data da última atualização da ingestão de água.

### Efeitos

- **useFocusEffect**: Sincroniza os dados do usuário sempre que a tela ganha foco, chamando a função `refreshUser`.
- **useEffect**: Atualiza os estados `aguaIngerida`, `meta` e `porcentagem` sempre que os dados do usuário mudam.

### Funções

- `reiniciarAgua`: Reinicia a contagem de água ingerida, solicitando confirmação do usuário.
- `adicionarAgua`: Adiciona uma quantidade específica de água à ingestão total, também solicitando confirmação do usuário.

### Renderização

O componente renderiza:

- Um indicador circular animado que mostra a porcentagem de água ingerida.
- Informações sobre a meta diária e a quantidade já consumida.
- Botões para adicionar diferentes quantidades de água (250ml, 500ml, 750ml, 1L).
- Um menu de rodapé para navegação.

### Tratamento de Erros

Caso ocorra um erro ao carregar os dados do usuário, uma mensagem de erro é exibida.

## Dependências

O componente utiliza as seguintes bibliotecas:

- `@react-navigation/native`: Para navegação entre telas.
- `react-native`: Para componentes de interface do usuário.
- `react-native-circular-progress`: Para exibir o progresso da ingestão de água.

## Estilos

Os estilos são importados de um arquivo separado (`styles.ts`), permitindo uma melhor organização e manutenção do código.

## Conclusão

A tela `AguaConsumida` oferece uma maneira intuitiva para os usuários monitorarem sua ingestão de água, ajudando-os a manter-se dentro de suas metas diárias.