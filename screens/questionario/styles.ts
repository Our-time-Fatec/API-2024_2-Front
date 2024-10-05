import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
      marginTop: 12,
      justifyContent: "flex-start",
    },
    header: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: "center",
      marginBottom: 10,
    },
    editPhoto: {
      textAlign: "center",
      color: "#00f",
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      padding: 13,
      marginBottom: 15,
      backgroundColor: "#f9f9f9",
      width: "80%",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
    },
    iconButton: {
      alignItems: "center",
    },
    button: {
      backgroundColor: colors.blueButtonCollor,
      paddingVertical: 18,
      paddingHorizontal: "23%",
      borderRadius: 20,
      marginBottom: 10,
      width: "100%",
      maxWidth: 400,
      alignSelf: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    }
  });

  export {styles}