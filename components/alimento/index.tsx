import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { IAlimento } from '../../interfaces/IAlimento';
import { requestWithRefresh } from '../../services/api';
import { styles } from './styles';

interface AlimentoProps {
    alimento: IAlimento;
    isUserAlimento: boolean;
    isAlimentoConsumido?: boolean;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

const AlimentoItem: React.FC<AlimentoProps> = ({ alimento, isUserAlimento, isAlimentoConsumido, onEdit, onDelete }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleConsumo, setModalVisibleConsumo] = useState(false);
    const [porcaoInput, setPorcaoInput] = useState('');
    const [quantidadeInput, setQuantidadeInput] = useState('');

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('pt-BR');
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
                method: 'POST',
                url: `/alimentoConsumido/`,
                data: {
                    _id: alimento._id || '',
                    porcao: parseFloat(porcaoInput),
                    quantidade: parseInt(quantidadeInput),
                },
            });
            alert('Alimento adicionado como consumido com sucesso!');
            toggleModalConsumo();
        } catch (error) {
            console.log(error)
            alert('Erro ao adicionar alimento consumido.');
        }
    };

    const handleConfirmarConsumo = () => {
        handleConsumir();
    };

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={toggleModal} style={styles.imageContainer}>
                {alimento.categoriaUrl ? (
                    <Image
                        source={{ uri: alimento.categoriaUrl }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={styles.imagePlaceholder}>
                        <Text style={styles.imagePlaceholderText}>Imagem não disponível</Text>
                    </View>
                )}
            </TouchableOpacity>
            <View style={styles.contentWrapper}>
            <View style={styles.detailsContainer}>
                <Text style={styles.nome}>{alimento.nome}</Text>
                <Text style={styles.info}>{alimento.porcao}g</Text>
                <Text style={styles.info}>Preparo: {alimento.preparo}</Text>
                <Text style={styles.info}>Categoria: {alimento.categoriaNome}</Text>
                {
                    isAlimentoConsumido && (
                        <>
                            <Text style={styles.info}>Quantidade: {alimento.quantidade}</Text>
                            <Text style={styles.info}>Data de consumo: {formatDate(alimento.criadoEm ? alimento.criadoEm : new Date())}</Text>
                        </>
                    )
                }
            </View>
            <View>
            {isUserAlimento && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.editButton} onPress={() => onEdit(alimento._id ? alimento._id : '')}>
                        <Text style={styles.closeButtonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(alimento._id ? alimento._id : '')} >
                        <Text style={styles.closeButtonText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            )}
            {isAlimentoConsumido && (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(alimento._id ? alimento._id : '')} >
                        <Text style={styles.closeButtonText}>Remover</Text>
                    </TouchableOpacity>
                </View>
            )}
            {
                !isAlimentoConsumido && (
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.editButton} onPress={toggleModalConsumo} >
                            <Text style={styles.closeButtonText}>Consumir</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {alimento.categoriaUrl ? (
                            <Image
                                source={{ uri: alimento.categoriaUrl }}
                                style={styles.modalImage}
                                resizeMode="cover"
                            />
                        ) : (
                            <View style={styles.imagePlaceholder}>
                                <Text style={styles.imagePlaceholderText}>Imagem não disponível</Text>
                            </View>
                        )}
                        <Text style={styles.modalNome}>{alimento.nome}</Text>
                        <Text style={styles.modalInfo}>Categoria: {alimento.categoriaNome}</Text>
                        <Text style={styles.modalInfo}>Preparo: {alimento.preparo}</Text>
                        <Text style={styles.modalInfo}>Porção: {alimento.porcao}g</Text>
                        {
                            isAlimentoConsumido && (
                                <>
                                    <Text style={styles.modalInfo}>Quantidade: {alimento.quantidade}</Text>
                                    <Text style={styles.modalInfo}>Data de consumo: {formatDate(alimento.criadoEm ? alimento.criadoEm : new Date())}</Text>
                                </>
                            )
                        }
                        <Text style={styles.modalInfo}>Valor Energético: {alimento.detalhes.valorEnergetico.toFixed(2)} kcal</Text>
                        <Text style={styles.modalInfo}>Proteínas: {alimento.detalhes.proteinas.toFixed(2)}g</Text>
                        <Text style={styles.modalInfo}>Carboidratos: {alimento.detalhes.carboidratos.toFixed(2)}g</Text>
                        <Text style={styles.modalInfo}>Fibras: {alimento.detalhes.fibras.toFixed(2)}g</Text>
                        <Text style={styles.modalInfo}>Lipídios: {alimento.detalhes.lipidios.toFixed(2)}g</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
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
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalNome}>Consumir {alimento.nome}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Porção (g)"
                            value={porcaoInput}
                            keyboardType="numeric"
                            onChangeText={(text) => setPorcaoInput(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantidade"
                            value={quantidadeInput}
                            keyboardType="numeric"
                            onChangeText={(text) => setQuantidadeInput(text)}
                        />
                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarConsumo}>
                            <Text style={styles.closeButtonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModalConsumo}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default AlimentoItem;
