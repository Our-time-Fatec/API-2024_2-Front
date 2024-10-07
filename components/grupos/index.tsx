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
  Pressable,
} from "react-native";
import { IGrupo } from "../../interfaces/IDieta"; // Importe a interface correta
import { IAlimentoDieta } from "../../interfaces/IDieta";
import { Ionicons } from "@expo/vector-icons";
import resultChecker from "../../utils/resultChecker";
import { styles } from "./styles";

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
  const [editingAlimentoId, setEditingAlimentoId] = useState<string | null>(
    null
  );
  const [newPortion, setNewPortion] = useState<string>("");
  const [newQuantity, setNewQuantity] = useState<string>("");

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
    if (!resultChecker.checkQuantidade(newQuantity)) {
      return;
    }

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
    if (!resultChecker.checkPorcao(newPortion)) {
      return;
    }

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

  const handleRemoveAlimento = (alimentoId: string) => {
    Alert.alert("Remover Alimento", "Deseja remover este alimento?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => {
          console.log(localGrupo); // Verifique o valor de localGrupo
          if (localGrupo?.nome) {
            onRemoveAlimento(alimentoId, localGrupo.nome);
            const updatedAlimentos = localGrupo.alimentos.filter(
              (alimento) => alimento.alimentoId !== alimentoId
            );
  
            if (updatedAlimentos.length === localGrupo.alimentos.length) {
              Alert.alert("Erro", "Alimento não encontrado no grupo.");
            } else {
              updateAndSendGrupo(updatedAlimentos);
            }
          } else {
            Alert.alert("Erro", "Grupo não encontrado.");
          }
        },
      },
    ]);
  };
  

  const startEditing = (alimentoId: string) => {
    if (editingAlimentoId === alimentoId) {
      setEditingAlimentoId(null); 
    } else {
      setEditingAlimentoId(alimentoId); 
      setNewPortion("");
      setNewQuantity("");
    }
  };

  if (!localGrupo) return null;

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalNome}>{localGrupo.nome}</Text>
            <Text style={styles.modalSubNome}>Alimentos</Text>
            <View style={styles.contentWrapper}>
            {localGrupo.alimentos.map((alimento, alimentoIndex) => (
              <View key={alimento.alimentoId || `alimento-${alimentoIndex}`} style={styles.contentModal}>
                <TouchableOpacity
                  onPress={() => startEditing(alimento.alimentoId)}
                  style={styles.alimentoContainer}
                >
                  <Text style={styles.modalInfo}>
                    {alimento.quantidade}x - {alimento.nome} - {alimento.porcao}
                    g
                  </Text>
                  <Ionicons
                    name={
                      editingAlimentoId === alimento.alimentoId
                        ? "caret-up"
                        : "caret-down"
                    }
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
                    <Pressable style={styles.deleteButton} onPress={() => handleRemoveAlimento(alimento.alimentoId)}>
                      <Text style={styles.deleteButtonText}>Remover alimento</Text>
                    </Pressable>
                  </>
                )}
              </View>
            ))}
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GroupModal;
