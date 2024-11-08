import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      margin: 20,
      padding: 25,
      borderRadius: 10,
      alignItems: 'center',
      gap: 10,
      justifyContent: "center"
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    closeButton: {
        marginTop: 5,
        backgroundColor: '#407CE2',
        paddingVertical: 8,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    chartContainer: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bar:{
      borderColor: "#6EBD"
    }
  });