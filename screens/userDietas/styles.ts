import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f0f4f8"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        backgroundColor: colors.background,
        borderRadius: 10,
        elevation: 1,
        shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    },
    row: {
        justifyContent: 'space-between',
    },
    loadMoreButton: {
        padding: 10,
        alignItems: 'center',
    },
    loadMoreText: {
        fontSize: 16,
        color: '#007bff',
    },
    button: {
        backgroundColor: colors.blueButtonCollor,
        paddingVertical: 9,
        paddingHorizontal: "25%",
        borderRadius: 30,
        marginBottom: 10,
        width: "100%",
        maxWidth: 400,
        marginTop: 15,
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    icon: {
        marginRight: 10,
    },
});

export default styles