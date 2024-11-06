import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export const styles = StyleSheet.create({
    footer: {
      backgroundColor: "#fafdff",
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderColor: '#eee',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 2, height: -5 },
      shadowRadius: 5,
      elevation: 5,
    },
    menuItem: {
      alignItems: 'center',
    },
    menuText: {
      fontSize: 12,
      marginTop: 4,
      color: 'black',
    },
    focusedMenuText: {

      color: 'black',
  
    },
    focusedMenuItem: {

      backgroundColor: '#e0e0e0',
  
    },
  });
