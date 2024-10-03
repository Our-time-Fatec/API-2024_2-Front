import React, { useState } from "react";
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

interface GroupModalProps {
  visible: boolean;
  grupo: IGrupo | null; // Tipo da interface de grupo ou null se não houver grupo
  onClose: () => void; // Tipo de função que não retorna nada
  onEditPortion: (alimentoId: string, newPortion: number) => void; // Função para editar a porção
  onEditQuantity: (alimentoId: string, newQuantity: number) => void; // Nova função para editar quantidade
  onRemoveAlimento: (alimentoId: string, _id: string) => void; // Função para remover alimento
}

const GroupModal: React.FC<GroupModalProps> = ({
  visible,
  grupo,
  onClose,
  onEditPortion,
  onEditQuantity,
  onRemoveAlimento,
}) => {
  if (!grupo) return null; // Caso o grupo não exista, retorna null

  const [editingAlimentoId, setEditingAlimentoId] = useState<string | null>(null);
  const [newPortion, setNewPortion] = useState<number | string>("");
  const [newQuantity, setNewQuantity] = useState<number | string>("");

  const handleLongPress = (alimentoId: string) => {
    Alert.alert("Remover Alimento", "Deseja remover este alimento?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => {
          if (grupo?._id) {
            onRemoveAlimento(alimentoId, grupo._id); // Passa o grupoId se existir
          } else {
            Alert.alert("Erro", "Grupo não encontrado.");
          }
        },
      },
    ]);
  };

  const handleEdit = (alimentoId: string) => {
    if (editingAlimentoId === alimentoId) {
      const quantity = Number(newQuantity);
      if (!isNaN(quantity) && quantity > 0) {
        onEditQuantity(alimentoId, quantity); // Chama a função para editar a quantidade
        setEditingAlimentoId(null);
        setNewQuantity(""); // Limpa o campo de entrada
      } else {
        Alert.alert("Erro", "Por favor, insira uma quantidade válida.");
      }
    } else {
      setEditingAlimentoId(alimentoId);
      setNewQuantity(""); // Limpa o campo de entrada ao editar
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.modalNome}>{grupo.nome}</Text>
            <Text style={styles.modalNome}>Alimentos</Text>
            {grupo.alimentos.map((alimento: IAlimentoDieta, alimentoIndex: number) => (
              <View key={alimento.alimentoId || `alimento-${alimentoIndex}`}>
                <TouchableOpacity
                  onPress={() => handleEdit(alimento.alimentoId)}
                  onLongPress={() => handleLongPress(alimento.alimentoId)}
                  style={styles.alimentoContainer}
                >
                  <Text style={styles.modalInfo}>
                    {alimento.quantidade}x - {alimento.nome} - {alimento.porcao}g
                  </Text>
                </TouchableOpacity>
                {editingAlimentoId === alimento.alimentoId && (
                    <>
                  <View style={styles.editContainer}>
                    <TextInput
                      style={styles.input}
                      keyboardType="numeric"
                      placeholder="Nova porcao"
                      value={newPortion.toString()}
                      onChangeText={(text) => setNewPortion(text)}
                    />
                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={() => handleEdit(alimento.alimentoId)}
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
                      onPress={() => handleEdit(alimento.alimentoId)}
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
