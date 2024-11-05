import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  messageContainer: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
    marginLeft: 10,
    color: "#333",
    maxWidth: 300,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center", 
    fontSize: 40
  }
});

export default styles;
