import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(48, 47, 47)',
    },
    title: {
        display: 'flex',
        fontFamily: 'Poppins-SemiBold',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#223A6A'
    },
    subtitle:{
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        color: '#407CE2',
        marginBottom: 20,
    },
    welcome:{
        fontFamily: "Poppins-Bold",
        fontSize: 22,
        color: '#221F1F'
    },
    logo: {
        height: 200,
        width: 200,
    },
});
export default styles;