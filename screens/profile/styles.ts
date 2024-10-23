import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: "#f0f4f8"
    },
    content: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 16,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 16,
    },
    profileImage: {
        borderRadius: 100,
        marginBottom: 8,
        marginTop: 15,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    infoItem: {
        alignItems: 'center',
        width: '30%',
    },
    infoLabel: {
        fontSize: 12,
              color: "rgba(64, 124, 226, 0.74)",
        marginTop: 4,
        textAlign: 'center',
    },
    infoValue: {
        fontSize: 14,
        textAlign: 'center',
  
        color: '#407BFF',
    },
    menuSection: {
        marginTop: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuText: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    circle:{
        backgroundColor: "rgba(64, 124, 226, 0.13)",
        borderRadius: 20,
        // height: 35,
        // width: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    }
});