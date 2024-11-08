---
title: SupressedWarnings
description: 'Componente para suprimir avisos específicos do React Native.'
---

# SupressedWarnings

O componente `SuppressWarnings` é utilizado para ignorar avisos específicos do React Native, especialmente aqueles relacionados a listas virtualizadas aninhadas dentro de `ScrollViews`. Este componente é útil para evitar que mensagens de aviso indesejadas poluam o console durante o desenvolvimento.

## Estrutura do Componente

O componente utiliza o hook `useEffect` para configurar a supressão de avisos quando montado e restaurar o comportamento original ao ser desmontado.

### Código

```javascript
import { useEffect } from 'react';
import { LogBox } from 'react-native';

const SuppressWarnings = () => {
  useEffect(() => {
    // Ignora o aviso específico
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews',
    ]);

    const originalWarn = console.error;
    console.error = (...args) => {
      if (args[0]?.includes('VirtualizedLists should never be nested inside plain ScrollViews')) {
        return; // Silencia apenas esse aviso
      }
      originalWarn(...args); // Chama o console.warn original para outros avisos
    };

    // Limpeza no unmount
    return () => {
      console.error = originalWarn; // Restaura o console.warn original
    };
  }, []);

  return null; // Este componente não precisa renderizar nada
};

export default SuppressWarnings;
```

## Funcionamento

1. **Ignorando Avisos**: O método `LogBox.ignoreLogs` é utilizado para ignorar avisos específicos que podem ser irrelevantes para o desenvolvimento atual.
2. **Sobrescrevendo `console.error`**: O componente sobrescreve a função `console.error` para silenciar apenas o aviso específico, permitindo que outros avisos sejam exibidos normalmente.
3. **Limpeza**: Ao desmontar o componente, a função `console.error` é restaurada ao seu comportamento original, garantindo que a supressão de avisos não afete outros componentes.

## Uso

Para utilizar o `SuppressWarnings`, basta importá-lo e incluí-lo na árvore de componentes, geralmente no nível mais alto da aplicação, para garantir que os avisos sejam suprimidos globalmente.

```javascript
import SuppressWarnings from './errors/SupressedWarnings';

// Dentro do componente principal
const App = () => {
  return (
    <>
      <SuppressWarnings />
      {/* Outros componentes */}
    </>
  );
};
```

## Considerações

- Este componente é uma solução temporária para avisos que podem ser ignorados. É recomendável investigar e resolver a causa raiz dos avisos quando possível.
- O uso excessivo de supressão de avisos pode ocultar problemas importantes no código, portanto, deve ser utilizado com cautela.