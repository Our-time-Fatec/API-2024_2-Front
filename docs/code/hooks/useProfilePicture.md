---
title: useProfilePicture
description: 'Um hook personalizado para gerenciar imagens de perfil em uma aplicação React Native.'
---

# useProfilePicture

O `useProfilePicture` é um hook personalizado que permite gerenciar imagens de perfil de usuários em uma aplicação React Native. Ele utiliza o `AsyncStorage` para armazenar e recuperar imagens associadas a endereços de e-mail.

## Interface

```typescript
interface ProfileImages {
  [email: string]: string;
}
```

## Uso

### Importação

Para utilizar o hook, importe-o em seu componente:

```typescript
import useProfilePicture from 'caminho/para/hooks/useProfilePicture';
```

### Exemplo de Implementação

```typescript
const { image, pickImage, takePhoto, removeProfileImage, reloadImage, saveProfileImage, loading, error } = useProfilePicture(email);
```

## Funcionalidades

- **Carregar Imagens de Perfil**: O hook carrega as imagens de perfil armazenadas no `AsyncStorage` ao ser inicializado.
- **Salvar Imagem de Perfil**: Permite salvar uma nova imagem de perfil associada a um e-mail.
- **Remover Imagem de Perfil**: Remove a imagem de perfil associada ao e-mail especificado.
- **Selecionar Imagem da Galeria**: Abre a galeria de imagens do dispositivo para selecionar uma nova imagem de perfil.
- **Tirar Foto**: Abre a câmera do dispositivo para tirar uma nova foto e usá-la como imagem de perfil.
- **Recarregar Imagem**: Atualiza a imagem de perfil a partir do `AsyncStorage`.

## Retorno

O hook retorna um objeto contendo:

- `image`: A URL da imagem de perfil atual.
- `pickImage`: Função para abrir a galeria e selecionar uma imagem.
- `takePhoto`: Função para abrir a câmera e tirar uma foto.
- `removeProfileImage`: Função para remover a imagem de perfil.
- `reloadImage`: Função para recarregar a imagem de perfil.
- `saveProfileImage`: Função para salvar uma nova imagem de perfil.
- `loading`: Estado que indica se as imagens estão sendo carregadas.
- `error`: Mensagem de erro, caso ocorra algum problema durante as operações.

## Considerações

- Certifique-se de que o e-mail fornecido não esteja vazio ao utilizar as funções que dependem dele.
- O hook utiliza a biblioteca `expo-image-picker` para selecionar imagens e tirar fotos. É necessário configurar as permissões adequadas para o uso da câmera e da galeria no dispositivo.