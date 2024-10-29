import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { IDietaSemanal } from '../../interfaces/IGrafico'; // Supondo que o arquivo está no mesmo nível
import { DiasSemana } from '../../enums/diasSemana';

interface DietaGraficoProps {
  dietaSemanal: IDietaSemanal;
  isVisible: boolean;
  onClose: () => void;
  meta: number
}

const DietaGrafico: React.FC<DietaGraficoProps> = ({ dietaSemanal, isVisible, onClose, meta }) => {
  // Função para mapear os dados da dieta para o gráfico
  const getBarData = () => {
    const barData = Object.keys(dietaSemanal).map((dia) => {
      const diaAlimentos = dietaSemanal[dia as DiasSemana];
      return {
        label: dia, // Exibe o nome do dia da semana no gráfico
        value: diaAlimentos?.total?.valorEnergetico || 0, // Valor energético de cada dia
      };
    });
    return barData;
  };

  const barData = getBarData();

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Consumo Energético Semanal</Text>
          <BarChart
            frontColor={'#177AD5'}
            barWidth={22}
            data={barData}
            maxValue={meta}
            yAxisTextStyle={{ color: '#777', fontSize: 12 }}
          />
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DietaGrafico;
