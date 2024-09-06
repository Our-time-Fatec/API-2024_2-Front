import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    containercima: {
        flex: 0.5
    },
    containerlogo:{
        alignItems: 'center',
    },
    logo: {
        height: 200,
        width: 200,
    },
    title: {
        flexDirection: 'column',
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#223A6A'
    },
    subtitle:{
        flex: 1,
        textAlign: 'center',
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        color: '#407CE2',
    },
    welcome:{
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        marginBottom: 40,
        fontWeight: "bold",
        fontSize: 30,
    },
    containerButton: {
        marginBottom: 10,
        alignSelf: 'center',
        width: "80%"
        
    }
});
export default styles;