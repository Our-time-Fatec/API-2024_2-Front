import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
        width: 100,
        height: 100,
        borderRadius: 50,
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
        fontSize: 14,
        color: '#2d74da',
        marginTop: 4,
        textAlign: 'center',
    },
    infoValue: {
        fontSize: 12,
        textAlign: 'center',
    },
    menuSection: {
        marginTop: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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
});