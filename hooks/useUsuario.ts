import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUsuario } from "../interfaces/IUsuario";
import { requestWithRefresh } from "../services/api"; // Ajuste o caminho conforme necessário

const useUsuario = (forcedRefresh?: any) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsuario = useCallback(
    async (forcedRefresh?: any) => {
      setLoading(true);
      setError(null);

      try {
        // Primeiro, tente obter os dados do usuário do cache
        if (!forcedRefresh) {
          const cachedUsuario = await AsyncStorage.getItem("usuario");
          if (cachedUsuario) {
            setUsuario(JSON.parse(cachedUsuario));
            setLoading(false);
            return;
          }
        }

        // Se não houver dados no cache, faça a requisição à API
        const response = await requestWithRefresh({
          method: "GET",
          url: "/usuario/mydetails",
        });
        setUsuario(response.data);

        // Armazene os dados no cache
        await AsyncStorage.setItem("usuario", JSON.stringify(response.data));
      } catch (err: any) {
        setError(err.message || "Erro ao buscar informações do usuário");
      } finally {
        setLoading(false);
      }
    },
    [forcedRefresh]
  );

  useEffect(() => {
    fetchUsuario();
  }, [fetchUsuario]);

  return { usuario, loading, error, refreshUser: fetchUsuario };
};

export default useUsuario;
