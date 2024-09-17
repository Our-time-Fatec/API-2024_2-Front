---
title: useUsuario
description: 'Um hook personalizado para gerenciar o estado do usuário, incluindo carregamento e tratamento de erros.'
---

# useUsuario

O `useUsuario` é um hook personalizado que permite gerenciar o estado do usuário em uma aplicação React Native. Ele fornece funcionalidades para buscar informações do usuário, controlar o estado de carregamento e lidar com erros.

## Estrutura do Hook

O hook utiliza os seguintes estados:

- `usuario`: Armazena as informações do usuário, que são do tipo `IUsuario` ou `null`.
- `loading`: Um booleano que indica se os dados estão sendo carregados.
- `error`: Uma string que armazena mensagens de erro, caso ocorram.

## Funcionalidades

### fetchUsuario

A função `fetchUsuario` é responsável por buscar as informações do usuário. Ela realiza uma requisição GET para o endpoint `/usuario/mydetails` utilizando a função `requestWithRefresh`. 

- **Tratamento de Erros**: Caso ocorra um erro durante a requisição, a mensagem de erro é armazenada no estado `error`.

### useEffect

O hook utiliza o `useEffect` para chamar `fetchUsuario` assim que o componente que utiliza o hook é montado. Isso garante que as informações do usuário sejam carregadas automaticamente.

## Retorno

O `useUsuario` retorna um objeto contendo:

- `usuario`: As informações do usuário.
- `loading`: O estado de carregamento.
- `error`: Mensagem de erro, se houver.
- `refreshUser`: Uma função para atualizar as informações do usuário chamando `fetchUsuario` novamente.

## Exemplo de Uso

```javascript
import useUsuario from 'hooks/useUsuario';

const MeuComponente = () => {
    const { usuario, loading, error, refreshUser } = useUsuario();

    if (loading) return <Text>Carregando...</Text>;
    if (error) return <Text>{error}</Text>;

    return (
        <View>
            <Text>Nome: {usuario?.nome}</Text>
            <Button title="Atualizar" onPress={refreshUser} />
        </View>
    );
};
```

## Considerações Finais

O `useUsuario` é uma solução eficiente para gerenciar o estado do usuário em aplicações React Native, facilitando a integração com APIs e o tratamento de estados de carregamento e erro.