import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    grupoContainer: {
      marginBottom: 16,
    },
    grupoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
      padding: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
    },
    itemText: {
      fontSize: 15,
      flex: 1,
      marginLeft: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    circleButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
    },
    counterText: {
      fontSize: 16,
      color: '#333',
    },
})