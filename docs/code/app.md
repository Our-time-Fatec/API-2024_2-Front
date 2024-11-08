---
title: App
description: 'Componente principal da aplicação que gerencia a navegação e autenticação do usuário.'
---

# App

O componente `App` é a entrada principal da aplicação React Native. Ele configura a navegação e o contexto de autenticação, além de definir a aparência da barra de status.

## Estrutura do Componente

O componente é composto por duas partes principais:

1. **AuthenticatedStack**: Um stack navigator que renderiza diferentes telas com base no estado de autenticação do usuário.
2. **Provider e Safe Area**: Envolve a aplicação em um contexto de autenticação e garante que o conteúdo seja exibido dentro de uma área segura.

## Detalhes da Implementação

### Importações

O componente importa várias bibliotecas e componentes necessários:

- `React` e componentes do `react-native`
- Navegação com `@react-navigation/native` e `@react-navigation/stack`
- Contexto de segurança com `react-native-safe-area-context`
- Telas específicas da aplicação e o contexto de autenticação.

### Componente AuthenticatedStack

O `AuthenticatedStack` utiliza o hook `useAuth` para determinar se o usuário está autenticado. Dependendo do estado de autenticação, ele renderiza diferentes telas:

- **Usuário Autenticado**: Renderiza telas como `Selecao`, `Questionario`, `ListAlimentos`, entre outras.
- **Usuário Não Autenticado**: Renderiza telas de `Home`, `Cadastro` e `Login`.

### Renderização do Componente

O componente `App` é renderizado da seguinte forma:

- Envolve a aplicação em um `AuthProvider` para fornecer o contexto de autenticação.
- Utiliza `SafeAreaProvider` para garantir que o conteúdo não seja cortado em dispositivos com bordas arredondadas.
- Configura a `StatusBar` e renderiza o `AuthenticatedStack` dentro de um `SafeAreaView`.

### Estilos

Os estilos são definidos utilizando `StyleSheet.create`, onde o contêiner principal é configurado para ocupar todo o espaço disponível.

## Exemplo de Uso

```javascript
export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="dark" backgroundColor="#f0f4f8" />
          <SafeAreaView style={styles.container}>
            <SuppressWarnings />
            <AuthenticatedStack />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
```

## Conclusão

O componente `App` é fundamental para a estrutura da aplicação, gerenciando a navegação e a autenticação de forma eficiente, proporcionando uma experiência de usuário fluida e organizada.