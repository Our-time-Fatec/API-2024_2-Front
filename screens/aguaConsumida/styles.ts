import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

export 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
    marginBottom: 30,
  },
  percentageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    alignSelf: "center",
    textAlign: "center"
  },
  metaBox: {
    borderWidth: 2,
    borderColor: "#f1f1f1",
    borderRadius: 8,
    width: "70%",
    alignSelf: "center",
    padding: 6,
    backgroundColor: colors.background,
    
    // Propriedades de sombra para iOS
    shadowColor: "#000",          
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.15,          
    shadowRadius: 3.84,           
    
    // Propriedade de sombra para Android
    elevation: 2          
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: "flex-start",
    gap: 6,
     // Propriedades de sombra para iOS
     shadowColor: "#000",          
     shadowOffset: { width: 0, height: 2 },  
     shadowOpacity: 0.15,          
     shadowRadius: 3.84,           
     
     // Propriedade de sombra para Android
     elevation: 3,
     overflow: 'hidden',  
  },
  image: {
    width: 180,
    maxWidth: 160,
    height: 42,
    marginRight: 15,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    backgroundColor: '#FDFDFD',
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