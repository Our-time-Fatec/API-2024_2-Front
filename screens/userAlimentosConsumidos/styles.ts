import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f8"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    justifyContent: "space-between",
  },
  loadMoreButton: {
    padding: 10,
    alignItems: "center",
  },
  loadMoreText: {
    fontSize: 16,
    color: "#007bff",
  },
  loadingText: {
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
});
