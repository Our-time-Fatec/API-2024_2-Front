---
title: useGrafico
description: 'Um hook personalizado para gerenciar e obter dados da dieta semanal, incluindo cache e requisições à API.'
---

# useGrafico

O `useGrafico` é um hook personalizado que permite gerenciar e obter dados sobre a dieta semanal de um usuário. Ele utiliza o armazenamento assíncrono para cache e realiza requisições à API para buscar informações atualizadas.

## Estrutura do Hook

### Estado

O hook mantém três estados principais:

- `dietaSemanal`: Armazena os dados da dieta semanal, que podem ser do tipo `IDietaSemanal` ou `null`.
- `loading`: Um booleano que indica se os dados estão sendo carregados.
- `error`: Uma string que armazena mensagens de erro, caso ocorram durante a requisição.

### Funções

#### fetchAlimentosConsumidosSemana

Esta função é responsável por buscar os dados da dieta semanal. Ela realiza as seguintes etapas:

1. **Cache**: Tenta obter os dados do cache usando `AsyncStorage`. Se os dados estiverem disponíveis e `refreshTrigger` não for verdadeiro, os dados em cache são utilizados.
2. **Requisição à API**: Se os dados não estiverem em cache ou se `refreshTrigger` for verdadeiro, a função faz uma requisição à API para obter os dados mais recentes.
3. **Atualização do Estado**: Após obter os dados, atualiza o estado `dietaSemanal` e armazena os dados no cache.
4. **Tratamento de Erros**: Em caso de erro, uma mensagem de erro é definida no estado.

### Efeitos

O hook utiliza o `useEffect` para chamar `fetchAlimentosConsumidosSemana` sempre que o hook é montado ou quando `refreshTrigger` muda.

## Retorno

O hook retorna um objeto com as seguintes propriedades:

- `dietaSemanal`: Os dados da dieta semanal.
- `loading`: O estado de carregamento.
- `error`: Mensagem de erro, se houver.
- `refreshGrafico`: Uma função que pode ser chamada para atualizar os dados manualmente.

## Exemplo de Uso

```javascript
import useGrafico from './hooks/useGrafico';

const MyComponent = () => {
  const { dietaSemanal, loading, error, refreshGrafico } = useGrafico();

  // Lógica do componente...
};
```

## Considerações Finais

O `useGrafico` é uma solução eficiente para gerenciar dados da dieta semanal, permitindo que os desenvolvedores integrem facilmente a funcionalidade de cache e requisições à API em seus componentes React.