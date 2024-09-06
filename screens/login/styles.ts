import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        justifyContent: 'center',
        width: '80%'
    },
    containercima: {
        paddingVertical: 40,
        flex: 0.5
    },
    containerbaixo: {
        flex: 0.5,
        justifyContent: "flex-end",
        paddingVertical: 40,
    },
    titulo: {
        fontSize: 24,
        fontFamily: "Poppins_700Bold",
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    containerinput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 25,
        height: 60,
    },
    textoinput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        padding: 20
    },
    botaocontainer: {
        marginTop: 40
    },
    textocadastro:{
        fontWeight: '500',
        textAlign: 'center',
    },
    linkcadastro:{
        color: '#007bff',
        fontWeight: 'bold'
    },
    textoesqueceu:{
        alignSelf: 'flex-end',
        color: '#007bff',
        fontWeight: 'bold'
    },
    containerline:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginTop: 100
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
    },
    iconContainer: {
        marginRight: 40,
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