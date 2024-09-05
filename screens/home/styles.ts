import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
    },
    title: {
        flex: 1,
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
        marginBottom: 50,
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        color: '#407CE2',
    },
    welcome:{
        flex: 1,
        textAlign: 'center',
        marginBottom: 50,
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
        fontSize: 30,
        color: '#221F1F'
    },
    logo: {
        marginLeft: 15,
        marginTop: 175,
        flexDirection: 'column',
        height: 200,
        width: 200,
    },
    containerButton: {
        justifyContent: 'center',
        marginBottom: 10,
    }
});
export default styles;