import { StyleSheet } from "react-native";

export 
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
        justifyContent: 'space-between',
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
        marginTop: 5,
        backgroundColor: '#e13f2f',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 1,
        marginBottom: 10,
        gap: 3
    },
    editButton: {
        marginTop: 5,
        backgroundColor: '#2d74da',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        flex: 0.5
    },
    deleteButton: {
        marginTop: 5,
        backgroundColor: '#e13f2f',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        flex: 0.5
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center',
    },
    confirmButton: {
        backgroundColor: '#2d74da',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
    },
    contentWrapper: {
        flex: 1,  // Garante que o conteúdo ocupe o espaço restante no container
        justifyContent: "flex-start",  // Mantém o conteúdo no topo
    },
});