---
title: app.config.js
description: 'Configuração do aplicativo Da Vinci Care, incluindo informações sobre ícones, permissões e atualizações.'
---

# app.config.js

O arquivo `app.config.js` é responsável por definir a configuração do aplicativo Da Vinci Care. Ele exporta um objeto que contém diversas propriedades que configuram o comportamento e a aparência do aplicativo.

## Estrutura do arquivo

```javascript
export default ({ config }) => ({
  ...config,
  name: "Da vinci Care",
  slug: "da-vinci-care",
  version: "1.0.0",
  owner: "lucasdwn",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  android: {
    package: "com.davincicodes.davincicare",
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF"
    },
    permissions: [],
  },
  ios: {
    bundleIdentifier: "com.davincicodes.davincicare",
    supportsTablet: true
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ["**/*"],
  plugins: [
    [
      "expo-image-picker",
      {
        photosPermission: "O aplicativo precisa de permissão para acessar suas fotos."
      }
    ]
  ],
  extra: {
    "eas": {
      "projectId": "3ca638f1-162a-4a04-85ba-31178b6ffb1e"
    }
  }
});
```

## Propriedades

- **name**: Nome do aplicativo.
- **slug**: Identificador único do aplicativo.
- **version**: Versão atual do aplicativo.
- **owner**: Proprietário do aplicativo.
- **orientation**: Orientação da tela (ex: "portrait").
- **icon**: Caminho para o ícone do aplicativo.
- **userInterfaceStyle**: Estilo da interface do usuário (ex: "light").
- **splash**: Configurações da tela de inicialização, incluindo imagem, modo de redimensionamento e cor de fundo.
- **android**: Configurações específicas para a plataforma Android, incluindo pacote, código da versão e permissões.
- **ios**: Configurações específicas para a plataforma iOS, incluindo identificador do pacote e suporte a tablets.
- **updates**: Configurações de atualização do aplicativo.
- **assetBundlePatterns**: Padrões para agrupar ativos.
- **plugins**: Lista de plugins utilizados pelo aplicativo, incluindo permissões necessárias.
- **extra**: Informações adicionais, como o ID do projeto para EAS (Expo Application Services).

Este arquivo é fundamental para a configuração e o funcionamento adequado do aplicativo, garantindo que todas as informações necessárias estejam disponíveis para as plataformas Android e iOS.