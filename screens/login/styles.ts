
import { StyleSheet } from 'react-native';
import colors from '../../colors/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start', // Alinha os itens no topo
        width: '100%',
        paddingTop: 50, // Adiciona um pouco de espaçamento no topo
        backgroundColor: colors.background
    },
    titulo: {
        fontSize: 24,
        fontFamily: "Poppins_700Bold",
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40, // Reduz o espaço inferior
    },
    containerinput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 25,
        height: 60,
        width: "90%",
        alignSelf: "center"
    },
    textoinput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        padding: 20
    },
    botaocontainer: {
        marginTop: 20,
        marginBottom: 5,
        width: "80%",
        alignSelf: 'center',
    },
    textocadastro:{
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10
    },
    linkcadastro:{
        color: '#007bff',
        fontWeight: 'bold'
    },
    textoesqueceu:{
        alignSelf: 'flex-end',
        color: '#007bff',
        fontWeight: 'bold',
        marginRight: 15
    },
    containerline:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15, // Ajuste para garantir que não fique muito espaço entre os elementos
        marginTop: "5%",   // Reduz o espaçamento superior para evitar sobreposição
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#D3D3D3',  // Cor da linha cinza clara
    },
    ortext: {
        marginHorizontal: 10,
        fontSize: 14,
        color: '#A3A2A3',  // Cor do texto semelhante à cor da linha
    },
    button: {
        flexDirection: 'row',
        textAlign: 'center',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '80%',
        alignSelf: 'center',
        marginTop: 10
    },
    iconContainer: {
        marginRight: 75,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    googleIcon: {
        width: 24,
        height: 24,
    },
});

export default styles;