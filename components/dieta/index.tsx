import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { IDietaFixa } from "../../interfaces/IDieta";
import { styles } from "./styles";

interface DietaProps {
  dieta: IDietaFixa;
  isUserDieta: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const DietaItem: React.FC<DietaProps> = ({
  dieta,
  isUserDieta,
  onEdit,
  onDelete,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const formatDate = (date: Date | undefined) => {
    return date
      ? new Date(date).toLocaleDateString("pt-BR")
      : "Data não disponível";
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.detailsContainer}>
          <Text style={styles.nome}>Dia: {dieta.diaSemana}</Text>
          <Text style={styles.info}>
            Calorias:{" "}
            {dieta.detalhes?.valorEnergetico
              ? dieta.detalhes.valorEnergetico.toFixed(2)
              : "N/A"}{" "}
            kcal
          </Text>
          <Text style={styles.info}>
            Data de criação:{" "}
            {dieta.criadoEm
              ? formatDate(dieta.criadoEm)
              : "Data não disponível"}
          </Text>
        </View>
      </TouchableOpacity>
      {isUserDieta && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.editButton}
            disabled={!dieta._id}
            onPress={() => onEdit(dieta._id ? dieta._id : "")}
          >
            <Text style={styles.closeButtonText}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDelete(dieta._id ? dieta._id : "")}
          >
            <Text style={styles.closeButtonText}>Remover</Text>
          </TouchableOpacity>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Text style={styles.modalNome}>Dia: {dieta.diaSemana}</Text>
              <Text style={styles.modalInfo}>
                Data de criação: {formatDate(dieta.criadoEm)}
              </Text>
              <Text style={styles.modalNome}>Detalhes</Text>
              <Text style={styles.modalInfo}>
                Valor energético: {dieta.detalhes?.valorEnergetico.toFixed(2)}{" "}
                Kcal
              </Text>
              <Text style={styles.modalInfo}>
                Proteínas: {dieta.detalhes?.proteinas.toFixed(2)} g
              </Text>
              <Text style={styles.modalInfo}>
                Carboidratos: {dieta.detalhes?.carboidratos.toFixed(2)} g
              </Text>
              <Text style={styles.modalInfo}>
                Fibras: {dieta.detalhes?.fibras.toFixed(2)} g
              </Text>
              <Text style={styles.modalInfo}>
                Lipídios: {dieta.detalhes?.lipidios.toFixed(2)} g
              </Text>
              <Text style={styles.modalNome}>Grupos</Text>

              {dieta.grupos.map((grupo, index) => (
                <View
                  style={styles.minimodalContent}
                  key={grupo._id ? grupo._id : `grupo-${index}`}
                >
                  <Text style={styles.minimodalNome}>{grupo.nome}</Text>
                  {grupo.alimentos.map((alimento, alimentoIndex) => (
                    <Text
                      key={
                        alimento.alimentoId
                          ? alimento.alimentoId
                          : `alimento-${alimentoIndex}`
                      }
                      style={styles.minimodalInfo}
                    >
                      {alimento.quantidade}x - {alimento.nome} -{" "}
                      {alimento.porcao.toString()}g - Total:{" "}
                      {alimento.detalhes?.valorEnergetico.toFixed(2)} Kcal
                    </Text>
                  ))}
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DietaItem;