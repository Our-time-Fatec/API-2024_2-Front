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
