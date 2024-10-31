import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { IAlimento } from "../../interfaces/IAlimento";
import { requestWithRefresh } from "../../services/api";
import { styles } from "./styles";
import { Picker } from "@react-native-picker/picker";
import { GruposEnum } from "../../screens/cadastrarDieta";

interface AlimentoProps {
  alimento: IAlimento;
  isUserAlimento: boolean;
  isAlimentoConsumido?: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const AlimentoItem: React.FC<AlimentoProps> = ({
  alimento,
  isUserAlimento,
  isAlimentoConsumido,
  onEdit,
  onDelete,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleConsumo, setModalVisibleConsumo] = useState(false);
  const [porcaoInput, setPorcaoInput] = useState("");
  const [quantidadeInput, setQuantidadeInput] = useState("");
  const [nomeGrupo, setNomeGrupo] = useState<string>("");

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModalConsumo = () => {
    setModalVisibleConsumo(!modalVisibleConsumo);
  };

  const handleConsumir = async () => {
    try {
      await requestWithRefresh({
        method: "POST",
        url: `/alimentoConsumido/`,
        data: {
          _id: alimento._id || "",
          porcao: parseFloat(porcaoInput),
          quantidade: parseInt(quantidadeInput),
          nomeGrupo,
        },
      });
      alert("Alimento adicionado como consumido com sucesso!");
      toggleModalConsumo();
    } catch (error) {
      console.log(error);
      alert("Erro ao adicionar alimento consumido.");
    }
  };

  const handleConfirmarConsumo = () => {
    handleConsumir();
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleModal} style={styles.imageContainer} testID="imageTouchable">
        {alimento.categoriaUrl ? (
          <Image
            source={{ uri: alimento.categoriaUrl }}
            style={styles.image}
            resizeMode="cover"
            testID="alimentoImage"
          />
        ) : (
          <View style={styles.imagePlaceholder} testID="imagePlaceholder">
            <Text style={styles.imagePlaceholderText}>
              Imagem não disponível
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.contentWrapper}>
        <View style={styles.detailsContainer}>
          <Text style={styles.nome} testID="alimentoNome">{alimento.nome}</Text>
          <Text style={styles.info} testID="alimentoPorcao">{`${alimento.porcao}g`}</Text>
          {isAlimentoConsumido && (
            <Text style={styles.info} testID="alimentoGrupo">Refeição: {alimento.nomeGrupo}</Text>
          )}
          <Text style={styles.info} testID="alimentoPreparo">Preparo: {alimento.preparo}</Text>
          <Text style={styles.info} testID="alimentoCategoria">Categoria: {alimento.categoriaNome}</Text>
          {isAlimentoConsumido && (
            <>
              <Text style={styles.info} testID="alimentoQuantidade">Quantidade: {alimento.quantidade}</Text>
              <Text style={styles.info} testID="alimentoDataConsumo">
                Data de consumo:{" "}
                {formatDate(alimento.criadoEm ? alimento.criadoEm : new Date())}
              </Text>
            </>
          )}
        </View>
        <View>
          {isUserAlimento && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => onEdit(alimento._id ? alimento._id : "")}
                testID="editButton"
              >
                <Text style={styles.closeButtonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onDelete(alimento._id ? alimento._id : "")}
                testID="deleteButton"
              >
                <Text style={styles.closeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
          {isAlimentoConsumido && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => onDelete(alimento._id ? alimento._id : "")}
                testID="deleteButton"
              >
                <Text style={styles.closeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
          {!isAlimentoConsumido && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={toggleModalConsumo}
                testID="consumirButton"
                disabled={isAlimentoConsumido}
              >
                <Text style={styles.closeButtonText}>Consumir</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
        testID="modal"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {alimento.categoriaUrl ? (
              <Image
                source={{ uri: alimento.categoriaUrl }}
                style={styles.modalImage}
                resizeMode="cover"
                testID="modalAlimentoImage"
              />
            ) : (
              <View style={styles.imagePlaceholder} testID="modalImagePlaceholder">
                <Text style={styles.imagePlaceholderText}>
                  Imagem não disponível
                </Text>
              </View>
            )}
            <Text style={styles.modalNome} testID="modalAlimentoNome">{alimento.nome}</Text>
            <Text style={styles.modalInfo} testID="modalAlimentoCategoria">
              Categoria: {alimento.categoriaNome}
            </Text>
            <Text style={styles.modalInfo} testID="modalAlimentoPreparo">Preparo: {alimento.preparo}</Text>
            <Text style={styles.modalInfo} testID="modalAlimentoPorcao">Porção: {alimento.porcao}g</Text>
            {isAlimentoConsumido && (
              <>
                <Text style={styles.modalInfo} testID="modalAlimentoQuantidade">
                  Quantidade: {alimento.quantidade}
                </Text>
                <Text style={styles.modalInfo} testID="modalAlimentoDataConsumo">
                  Data de consumo:{" "}
                  {formatDate(alimento.criadoEm ? alimento.criadoEm : new Date())}
                </Text>
              </>
            )}
            <Text style={styles.modalInfo} testID="modalAlimentoValorEnergetico">
              Valor Energético: {alimento.detalhes.valorEnergetico.toFixed(2)} kcal
            </Text>
            <Text style={styles.modalInfo} testID="modalAlimentoProteinas">
              Proteínas: {alimento.detalhes.proteinas.toFixed(2)}g
            </Text>
            <Text style={styles.modalInfo} testID="modalAlimentoCarboidratos">
              Carboidratos: {alimento.detalhes.carboidratos.toFixed(2)}g
            </Text>
            <Text style={styles.modalInfo} testID="modalAlimentoFibras">
              Fibras: {alimento.detalhes.fibras.toFixed(2)}g
            </Text>
            <Text style={styles.modalInfo} testID="modalAlimentoLipidios">
              Lipídios: {alimento.detalhes.lipidios.toFixed(2)}g
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal} testID="closeModalButton">
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleConsumo}
        onRequestClose={toggleModalConsumo}
        testID="modalConsumo"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalNome} testID="modalConsumirNome">Consumir {alimento.nome}</Text>
            <View style={styles.pickerContainer} testID="pickerContainer">
              <Picker
                selectedValue={nomeGrupo}
                onValueChange={(itemValue) => {
                  setNomeGrupo(itemValue);
                }}
                testID="grupoPicker"
              >
                <Picker.Item label="Selecione o grupo" value={null} testID="selectGroup" />
                {Object.keys(GruposEnum).map((grupo) => (
                  <Picker.Item
                    key={grupo}
                    label={GruposEnum[grupo as keyof typeof GruposEnum]}
                    value={GruposEnum[grupo as keyof typeof GruposEnum]}
                    testID={`grupoPickerItem_${grupo}`}
                  />
                ))}
              </Picker>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Porção"
              value={porcaoInput}
              onChangeText={setPorcaoInput}
              keyboardType="numeric"
              testID="porcaoInput"
            />
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              value={quantidadeInput}
              onChangeText={setQuantidadeInput}
              keyboardType="numeric"
              testID="quantidadeInput"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirmarConsumo}
                testID="confirmButton"
              >
                <Text style={styles.closeButtonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleModalConsumo}
                testID="closeModalConsumoButton"
              >
                <Text style={styles.closeButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AlimentoItem;
