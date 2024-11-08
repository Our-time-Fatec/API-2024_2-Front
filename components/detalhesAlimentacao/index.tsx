import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { IDietaSemanal } from '../../interfaces/IGrafico'; // Supondo que o arquivo está no mesmo nível
import { DiasSemana } from '../../enums/diasSemana';
import { styles } from './styles';

interface DiaDetalhesModalProps {
  selectedDay: DiasSemana | null;
  dietaSemanal: IDietaSemanal;
  isVisible: boolean;
  onClose: () => void;
}

const DiaDetalhesModal: React.FC<DiaDetalhesModalProps> = ({ selectedDay, dietaSemanal, isVisible, onClose }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Detalhes do Dia: {selectedDay}</Text>
          <Text style={styles.modalText}>
            Valor Energético: {selectedDay && dietaSemanal[selectedDay]?.total?.valorEnergetico.toFixed(2) || 0} kcal
          </Text>
          <Text style={styles.modalText}>
            Proteínas: {selectedDay && dietaSemanal[selectedDay]?.total?.proteinas.toFixed(2) || 0} g
          </Text>
          <Text style={styles.modalText}>
            Carboidratos: {selectedDay && dietaSemanal[selectedDay]?.total?.carboidratos.toFixed(2) || 0} g
          </Text>
          <Text style={styles.modalText}>
            Fibras: {selectedDay && dietaSemanal[selectedDay]?.total?.fibras.toFixed(2) || 0} g
          </Text>
          <Text style={styles.modalText}>
            Lipídios: {selectedDay && dietaSemanal[selectedDay]?.total?.lipidios.toFixed(2) || 0} g
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DiaDetalhesModal;
