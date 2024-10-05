import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "90%",
      padding: 20,
      backgroundColor: "#fff",
      borderRadius: 10,
      maxHeight: "80%",
    },
    scrollViewContent: {
      paddingBottom: 20,
    },
    modalNome: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      alignSelf: "center",
    },
    modalSubNome: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    modalInfo: {
      fontSize: 16,
      color: "#555",
      marginBottom: 8,
    },
    closeButton: {
      marginTop: 15,
      backgroundColor: "#2d74da",
      paddingVertical: 8,
      borderRadius: 5,
      alignItems: "center",
      width: "100%",
    },
    closeButtonText: {
      color: "#fff",
      fontSize: 16,
    },
    alimentoContainer: {
      paddingVertical: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    editContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 5,
      padding: 5,
      flex: 1,
      marginRight: 5,
    },
    saveButton: {
      backgroundColor: "#2d74da",
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    saveButtonText: {
      color: "#fff",
      fontSize: 16,
    },
  });