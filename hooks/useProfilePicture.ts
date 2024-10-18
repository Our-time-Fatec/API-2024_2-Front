import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

interface ProfileImages {
  [email: string]: string;
}

const useProfilePicture = (email: string) => {
  const [profileImages, setProfileImages] = useState<ProfileImages>({});
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileImages = async () => {
      try {
        setLoading(true);
        const storedProfileImages = await AsyncStorage.getItem("profileImages");
        if (storedProfileImages) {
          const parsedImages = JSON.parse(storedProfileImages);
          setProfileImages(parsedImages);
          setImage(parsedImages[email] || null); // Carrega a imagem para o email específico
        }
      } catch (error) {
        console.error("Erro ao carregar imagens de perfil:", error);
        setError("Erro ao carregar imagens de perfil."); // Define um erro
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    loadProfileImages();
  }, [email]);

  const saveProfileImage = async (newImage: string, emailToSave?: string) => {
    try {
      const emailToUse = emailToSave || email;

      if (!emailToUse) {
        console.error("Email não fornecido. Não é possível salvar a imagem de perfil.");
        return;
      }

      const updatedProfileImages = { ...profileImages, [emailToUse]: newImage };
      await AsyncStorage.setItem("profileImages", JSON.stringify(updatedProfileImages));
      setProfileImages(updatedProfileImages);
      setImage(newImage); // Atualiza a imagem local imediatamente
    } catch (error) {
      console.error("Erro ao salvar imagem de perfil:", error);
      setError("Erro ao salvar imagem de perfil."); // Define um erro
    }
  };

  const removeProfileImage = async () => {
    try {
      if (profileImages[email]) {
        const updatedProfileImages = { ...profileImages };
        delete updatedProfileImages[email]; // Remove a entrada para o email
        await AsyncStorage.setItem("profileImages", JSON.stringify(updatedProfileImages));
        setProfileImages(updatedProfileImages);
        setImage(null); // Remove a imagem local
        // console.log(`Imagem removida para o email ${email}`);
      }
    } catch (error) {
      console.error("Erro ao remover a imagem de perfil:", error);
      setError("Erro ao remover a imagem de perfil."); // Define um erro
    }
  };

  const pickImage = async () => {
    if (!email) {
      console.error("Email não fornecido. Não é possível selecionar a imagem.");
      return;
    }
    
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;
        await saveProfileImage(selectedImage); // Salva a imagem no AsyncStorage
      }
    } catch (error) {
      console.error("Erro ao selecionar a imagem:", error);
      setError("Erro ao selecionar a imagem."); // Define um erro
    }
  };

  const takePhoto = async () => {
    if (!email) {
      console.error("Email não fornecido. Não é possível tirar a foto.");
      return;
    }
    
    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const selectedImage = result.assets[0].uri;
        await saveProfileImage(selectedImage); // Salva a imagem no AsyncStorage
      }
    } catch (error) {
      console.error("Erro ao tirar a foto:", error);
      setError("Erro ao tirar a foto."); // Define um erro
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
      setError("Erro ao recarregar a imagem."); // Define um erro
    }
  };

  return {
    image,
    pickImage,
    takePhoto,
    removeProfileImage,
    reloadImage,
    saveProfileImage,
    loading,  // Para saber se está carregando
    error,    // Para saber se ocorreu algum erro
  };
};

export default useProfilePicture;
