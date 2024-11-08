---
title: eas.json
description: 'Configuração do EAS (Expo Application Services) para gerenciamento de builds e submissões.'
---

# eas.json

O arquivo `eas.json` é utilizado para configurar o EAS (Expo Application Services), permitindo gerenciar diferentes ambientes de build e submissão para aplicações desenvolvidas com Expo. Abaixo estão as seções principais deste arquivo e suas respectivas configurações.

## Estrutura do Arquivo

```json
{
  "cli": {
    "version": ">= 3.0.0"
  },
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "android": {
        "buildType": "apk"
      },
      "distribution": "internal"
    },
    "development": {
      "android": {
        "buildType": "apk"
      },
      "distribution": "internal",
      "env": {
        "ENVIRONMENT": "development"
      }
    }
  },
  "submit": {
    "production": {
      "android": {
        "serviceAccountKeyPath": "./path/to/your/service-account-file.json"
      }
    }
  }
}
```

## Seções do Arquivo

### cli
- **version**: Especifica a versão mínima do CLI do EAS necessária para executar as configurações. Neste caso, é necessário ter a versão 3.0.0 ou superior.

### build
Esta seção define as configurações de build para diferentes ambientes:

- **production**: Configurações para builds de produção.
  - **android**: 
    - **buildType**: Define o tipo de build, neste caso, `apk`.
  - **ios**: 
    - **simulator**: Indica se o build deve ser feito para o simulador.

- **preview**: Configurações para builds de pré-visualização.
  - **android**: 
    - **buildType**: Define o tipo de build como `apk`.
  - **distribution**: Define o método de distribuição como `internal`.

- **development**: Configurações para builds de desenvolvimento.
  - **android**: 
    - **buildType**: Define o tipo de build como `apk`.
  - **distribution**: Define o método de distribuição como `internal`.
  - **env**: Variáveis de ambiente específicas para o ambiente de desenvolvimento.
    - **ENVIRONMENT**: Define o ambiente como `development`.

### submit
Esta seção contém as configurações para submissão de builds:

- **production**: Configurações para submissão de builds de produção.
  - **android**: 
    - **serviceAccountKeyPath**: Caminho para o arquivo de chave da conta de serviço necessário para a submissão.

## Considerações Finais
O arquivo `eas.json` é essencial para gerenciar as configurações de build e submissão de uma aplicação Expo, permitindo que desenvolvedores personalizem o processo de acordo com suas necessidades específicas.