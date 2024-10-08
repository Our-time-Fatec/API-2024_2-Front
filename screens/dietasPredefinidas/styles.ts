import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.background,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
      alignSelf: 'center',
    },
    card: {
      flexDirection: 'row',
      backgroundColor: '#F9F9F9',
      borderRadius: 8,
      padding: 16,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 2,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 8,
    },
    textContainer: {
      flex: 1,
      marginLeft: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 14,
      color: '#888',
      marginTop: 4,
    },
    description: {
      fontSize: 12,
      color: '#888',
      marginTop: 8,
    },
    largeImage: {
      width: '100%',
      height: 200,
      borderRadius: 8,
      marginTop: 20,
      alignSelf: 'center',
    },
  });
  
export default styles