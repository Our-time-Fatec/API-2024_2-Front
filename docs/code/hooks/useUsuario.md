
---
title: useUsuario
description: 'Um hook personalizado para gerenciar o estado do usuário, incluindo carregamento, erro e cache utilizando AsyncStorage.'
---

# useUsuario

O `useUsuario` é um hook personalizado que facilita a recuperação e o gerenciamento das informações do usuário em uma aplicação React Native. Ele utiliza o `AsyncStorage` para armazenar em cache os dados do usuário, minimizando requisições desnecessárias à API.

## Estrutura do Hook

### Importações

O hook importa os seguintes módulos:

- `useState`, `useEffect`, `useCallback` do React.
- `AsyncStorage` do `@react-native-async-storage/async-storage`.
- `IUsuario` da interface de usuário.
- `requestWithRefresh` do serviço de API.

### Estado

O hook mantém três estados principais:

- `usuario`: Armazena os dados do usuário.
- `loading`: Indica se os dados estão sendo carregados.
- `error`: Armazena mensagens de erro, caso ocorram.

### Função `fetchUsuario`

A função `fetchUsuario` é responsável por:

1. Tentar obter os dados do usuário do cache (`AsyncStorage`).
2. Se não houver dados em cache ou se `forcedRefresh` for verdadeiro, faz uma requisição à API para obter os dados do usuário.
3. Armazena os dados obtidos no cache.
4. Trata erros que possam ocorrer durante a requisição.

### Uso do Hook

O hook é utilizado da seguinte forma:

```javascript
const { usuario, loading, error, refreshUser } = useUsuario();
```

- `usuario`: Contém os dados do usuário ou `null` se não estiverem disponíveis.
- `loading`: Um booleano que indica se os dados estão sendo carregados.
- `error`: Uma string que contém a mensagem de erro, se houver.
- `refreshUser`: Uma função que pode ser chamada para forçar a atualização dos dados do usuário.

### Efeito Colateral

O hook utiliza o `useEffect` para chamar `fetchUsuario` automaticamente quando o hook é montado, garantindo que os dados do usuário sejam carregados assim que o componente que utiliza o hook for renderizado.

## Exemplo de Uso

```javascript
import useUsuario from './hooks/useUsuario';

const MeuComponente = () => {
  const { usuario, loading, error, refreshUser } = useUsuario();

  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro: {error}</Text>;

  return (
    <View>
      <Text>Nome: {usuario?.nome}</Text>
      <Button title="Atualizar" onPress={refreshUser} />
    </View>
  );
};
```

## Conclusão

O `useUsuario` é uma solução eficiente para gerenciar o estado do usuário em aplicações React Native, proporcionando uma experiência de usuário mais fluida e responsiva ao minimizar requisições à API e utilizando cache local.
