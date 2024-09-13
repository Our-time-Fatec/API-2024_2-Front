import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { IAlimento } from '../../interfaces/IAlimento';

interface AlimentoProps {
    alimento: IAlimento;
}

const AlimentoItem: React.FC<AlimentoProps> = ({ alimento }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
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
            <View style={styles.detailsContainer}>
                <Text style={styles.nome}>{alimento.nome}</Text>
                <Text style={styles.info}>{alimento.porcao}g</Text>
                <Text style={styles.info}>Preparo: {alimento.preparo}</Text>
                <Text style={styles.info}>Categoria: {alimento.categoriaNome}</Text>
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
                        <Text style={styles.modalInfo}>Valor Energético: {alimento.detalhes.valorEnergetico} kcal</Text>
                        <Text style={styles.modalInfo}>Proteínas: {alimento.detalhes.proteinas}g</Text>
                        <Text style={styles.modalInfo}>Carboidratos: {alimento.detalhes.carboidratos}g</Text>
                        <Text style={styles.modalInfo}>Fibras: {alimento.detalhes.fibras}g</Text>
                        <Text style={styles.modalInfo}>Lipídios: {alimento.detalhes.lipidios}g</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        overflow: 'hidden',
        margin: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    imageContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    imagePlaceholder: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    imagePlaceholderText: {
        color: '#888',
        fontSize: 14,
    },
    detailsContainer: {
        padding: 8,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    modalImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
    },
    modalNome: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalInfo: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: '#ff5722',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default AlimentoItem;
