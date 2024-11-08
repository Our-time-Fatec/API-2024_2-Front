import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { IDietaSemanal } from '../../interfaces/IGrafico';
import { DiasSemana } from '../../enums/diasSemana';
import DiaDetalhesModal from '../detalhesAlimentacao'; // Importa o novo componente
import { styles } from './styles';

interface DietaGraficoProps {
  dietaSemanal: IDietaSemanal;
  isVisible: boolean;
  onClose: () => void;
  meta: number;
}

const DietaGrafico: React.FC<DietaGraficoProps> = ({ dietaSemanal, isVisible, onClose, meta }) => {
  const [selectedDay, setSelectedDay] = useState<DiasSemana | null>(null); // Estado para o dia selecionado
  const [dayModalVisible, setDayModalVisible] = useState(false); // Controle do modal de detalhes do dia

  const diasAbreviados: { [key in DiasSemana]: string } = {
    [DiasSemana.Domingo]: "D",
    [DiasSemana.Segunda]: "S",
    [DiasSemana.Terca]: "T",
    [DiasSemana.Quarta]: "Q",
    [DiasSemana.Quinta]: "Q",
    [DiasSemana.Sexta]: "S",
    [DiasSemana.Sabado]: "S",
  };

  const getBarData = () => {
    return Object.keys(dietaSemanal).map((dia) => {
      const diaAlimentos = dietaSemanal[dia as DiasSemana];

      return {
        label: diasAbreviados[dia as DiasSemana],
        value: diaAlimentos?.total?.valorEnergetico || 0,
        onPress: () => handleBarPress(dia as DiasSemana), // Lida com o clique na barra
      };
    });
  };

  const handleBarPress = (dia: DiasSemana) => {
    setSelectedDay(dia);
    setDayModalVisible(true); // Abre o modal com os detalhes do dia
  };

  const closeDayModal = () => {
    setDayModalVisible(false);
    setSelectedDay(null); // Limpa o dia selecionado ao fechar o modal
  };

  const barData = getBarData();

  return (
    <>
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Consumo Energético Semanal</Text>
            <View style={styles.chartContainer}>
            <BarChart
              frontColor={'#177AD5'}
              barWidth={22}
              data={barData}
              maxValue={meta}
              yAxisTextStyle={{ color: '#777', fontSize: 12 }}
              isAnimated
              
            />
          </View>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de detalhes do dia separado */}
      <DiaDetalhesModal
        selectedDay={selectedDay}
        dietaSemanal={dietaSemanal}
        isVisible={dayModalVisible}
        onClose={closeDayModal}
      />
    </>
  );
};

export default DietaGrafico;
