---
title: jest.setup.js
description: 'Configuração inicial para testes utilizando Jest, incluindo o mock do AsyncStorage e do react-native-gesture-handler.'
---

# jest.setup.js

Este arquivo é utilizado para configurar o ambiente de testes com Jest em uma aplicação React Native. Ele inclui a configuração de mocks necessários para garantir que os testes sejam executados corretamente.

## Conteúdo do Arquivo

```javascript
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler';

// Mocking AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
```

## Descrição dos Componentes

- **mockAsyncStorage**: Este módulo é um mock do AsyncStorage, que é utilizado para armazenar dados de forma assíncrona. O mock permite que os testes sejam realizados sem a necessidade de um armazenamento real, evitando efeitos colaterais indesejados.

- **react-native-gesture-handler**: Este import é necessário para garantir que os gestos sejam tratados corretamente durante os testes. A biblioteca `react-native-gesture-handler` é frequentemente utilizada em aplicações React Native para gerenciar interações de toque.

## Uso

Este arquivo deve ser incluído na configuração do Jest, geralmente no campo `setupFiles` do arquivo de configuração do Jest (por exemplo, `jest.config.js`). Isso garante que as configurações e mocks sejam aplicados antes da execução dos testes.