import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

interface ProfileImages {
  [email: string]: string;
}

const useProfilePicture = (email: string) => {
  const [profileImages, setProfileImages] = useState<ProfileImages>({});
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileImages = async () => {
      try {
        const storedProfileImages = await AsyncStorage.getItem("profileImages");
        if (storedProfileImages) {
          const parsedImages = JSON.parse(storedProfileImages);
          setProfileImages(parsedImages);
          if (parsedImages[email]) {
            setImage(parsedImages[email]); // Carrega a imagem para o email específico
          }
        }
      } catch (error) {
        console.error("Erro ao carregar imagens de perfil:", error);
      }
    };

    loadProfileImages();
  }, [email]);

  const saveProfileImage = async (imageUri: string) => {
    try {
      const updatedProfileImages = { ...profileImages, [email]: imageUri };
      setProfileImages(updatedProfileImages);
      setImage(imageUri); // Atualiza a imagem localmente
      await AsyncStorage.setItem("profileImages", JSON.stringify(updatedProfileImages));
      console.log(`Imagem salva para o email ${email}`);
    } catch (error) {
      console.error("Erro ao salvar a imagem de perfil:", error);
    }
  };

  const removeProfileImage = async () => {
    try {
      if (profileImages[email]) {
        const updatedProfileImages = { ...profileImages };
        delete updatedProfileImages[email]; // Remove a entrada para o email
        setProfileImages(updatedProfileImages);
        setImage(null); // Remove a imagem local
        await AsyncStorage.setItem("profileImages", JSON.stringify(updatedProfileImages));
        console.log(`Imagem removida para o email ${email}`);
      }
    } catch (error) {
      console.error("Erro ao remover a imagem de perfil:", error);
    }
  };

  // Função para abrir a galeria e selecionar uma imagem
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;
        saveProfileImage(selectedImage); // Salva a imagem no AsyncStorage
      }
    } catch (error) {
      console.error("Erro ao selecionar a imagem:", error);
    }
  };

  // Função para abrir a câmera e tirar uma foto
  const takePhoto = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;
        saveProfileImage(selectedImage); // Salva a imagem no AsyncStorage
      }
    } catch (error) {
      console.error("Erro ao tirar a foto:", error);
    }
  };

  const reloadImage = async () => {
    try {
      const storedProfileImages = await AsyncStorage.getItem("profileImages");
      if (storedProfileImages) {
        const parsedImages = JSON.parse(storedProfileImages);
        setProfileImages(parsedImages);
        setImage(parsedImages[email] || null); // Atualiza a imagem para o email específico ou null se não houver
      }
    } catch (error) {
      console.error("Erro ao recarregar a imagem:", error);
    }
  };


  return {
    image,
    pickImage,
    takePhoto,
    removeProfileImage,
    reloadImage
  };
};

export default useProfilePicture;
