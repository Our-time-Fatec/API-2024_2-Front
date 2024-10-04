import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { IGrupo } from "../../interfaces/IDieta"; // Importe a interface correta
import { IAlimentoDieta } from "../../interfaces/IDieta";
import { Ionicons } from "@expo/vector-icons";

interface GroupModalProps {
  visible: boolean;
  grupo: IGrupo | null;
  onClose: () => void;
  onEditPortion: (alimentoId: string, newPortion: number) => void;
  onEditQuantity: (alimentoId: string, newQuantity: number) => void;
  onRemoveAlimento: (alimentoId: string, _id: string) => void;
  onUpdateGrupo: (updatedGrupo: IGrupo) => void;
}

const GroupModal: React.FC<GroupModalProps> = ({
  visible,
  grupo,
  onClose,
  onEditPortion,
  onEditQuantity,
  onRemoveAlimento,
  onUpdateGrupo,
}) => {
  const [localGrupo, setLocalGrupo] = useState<IGrupo | null>(grupo); // Estado local do grupo
  const [editingAlimentoId, setEditingAlimentoId] = useState<string | null>(null);
  const [newPortion, setNewPortion] = useState<number | string>("");
  const [newQuantity, setNewQuantity] = useState<number | string>("");

  // Sincroniza o grupo recebido via props com o estado local
  useEffect(() => {
    setLocalGrupo(grupo);
  }, [grupo]);

  useEffect(() => {
    if (!visible) {
      setEditingAlimentoId(null);
    }
  }, [visible]);


  // Função que atualiza o grupo local e envia para o pai
  const updateAndSendGrupo = (updatedAlimentos: IAlimentoDieta[]) => {
    if (localGrupo) {
      const updatedGrupo = { ...localGrupo, alimentos: updatedAlimentos };
      setLocalGrupo(updatedGrupo);
      onUpdateGrupo(updatedGrupo); // Envia o grupo atualizado de volta para o pai
    }
  };

  const handleEditQuantity = (alimentoId: string) => {
    const quantity = Number(newQuantity);
    if (!isNaN(quantity) && quantity > 0) {
      onEditQuantity(alimentoId, quantity);
      setNewQuantity("");
      // Atualiza a quantidade no estado local e no pai
      const updatedAlimentos = localGrupo?.alimentos.map((alimento) =>
        alimento.alimentoId === alimentoId
          ? { ...alimento, quantidade: quantity }
          : alimento
      );
      if (updatedAlimentos) updateAndSendGrupo(updatedAlimentos);
    } else {
      Alert.alert("Erro", "Por favor, insira uma quantidade válida.");
    }
  };

  const handleEditPortion = (alimentoId: string) => {
    const portion = Number(newPortion);
    if (!isNaN(portion) && portion > 0) {
      onEditPortion(alimentoId, portion);
      setNewPortion("");
      // Atualiza a porção no estado local e no pai
      const updatedAlimentos = localGrupo?.alimentos.map((alimento) =>
        alimento.alimentoId === alimentoId
          ? { ...alimento, porcao: portion }
          : alimento
      );
      if (updatedAlimentos) updateAndSendGrupo(updatedAlimentos);
    } else {
      Alert.alert("Erro", "Por favor, insira uma porção válida.");
    }
  };

  const handleLongPress = (alimentoId: string) => {
    Alert.alert("Remover Alimento", "Deseja remover este alimento?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => {
          if (localGrupo?._id) {
            onRemoveAlimento(alimentoId, localGrupo._id);
            // Remove o alimento no estado local e no pai
            const updatedAlimentos = localGrupo.alimentos.filter(
              (alimento) => alimento.alimentoId !== alimentoId
            );
            updateAndSendGrupo(updatedAlimentos);
          } else {
            Alert.alert("Erro", "Grupo não encontrado.");
          }
        },
      },
    ]);
  };

  const startEditing = (alimentoId: string) => {
    if (editingAlimentoId === alimentoId) {
      setEditingAlimentoId(null); // Se já está editando, fecha a edição
    } else {
      setEditingAlimentoId(alimentoId); // Caso contrário, inicia a edição
      setNewPortion("");
      setNewQuantity("");
    }
  };


  if (!localGrupo) return null; // Se o grupo não estiver definido

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalNome}>{localGrupo.nome}</Text>
            <Text style={styles.modalSubNome}>Alimentos</Text>
            {localGrupo.alimentos.map((alimento, alimentoIndex) => (
              <View key={alimento.alimentoId || `alimento-${alimentoIndex}`}>
                <TouchableOpacity
                  onPress={() => startEditing(alimento.alimentoId)}
                  onLongPress={() => handleLongPress(alimento.alimentoId)}
                  style={styles.alimentoContainer}
                >
                  
                  <Text style={styles.modalInfo}>
                    {alimento.quantidade}x - {alimento.nome} - {alimento.porcao}g
                  </Text>
                  <Ionicons 
                            name={editingAlimentoId === alimento.alimentoId ? "caret-up" : "caret-down"} 
                            size={24} 
                            color={"#000"} 
                        />
                </TouchableOpacity>
                {editingAlimentoId === alimento.alimentoId && (
                  <>
                    <View style={styles.editContainer}>
                      <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Nova porção"
                        value={newPortion.toString()}
                        onChangeText={(text) => setNewPortion(text)}
                      />
                      <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => handleEditPortion(alimento.alimentoId)}
                      >
                        <Text style={styles.saveButtonText}>Salvar</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.editContainer}>
                      <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Nova quantidade"
                        value={newQuantity.toString()}
                        onChangeText={(text) => setNewQuantity(text)}
                      />
                      <TouchableOpacity
                        style={styles.saveButton}
                        onPress={() => handleEditQuantity(alimento.alimentoId)}
                      >
                        <Text style={styles.saveButtonText}>Salvar</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: "80%",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  modalNome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center"
  },
  modalSubNome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInfo: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#2d74da",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  alimentoContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 5,
    flex: 1,
    marginRight: 5,
  },
  saveButton: {
    backgroundColor: "#2d74da",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default GroupModal;
