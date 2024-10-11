import { StyleSheet } from "react-native";

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
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
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