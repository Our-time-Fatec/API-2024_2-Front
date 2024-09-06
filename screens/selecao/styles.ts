import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      header: {
        backgroundColor: '#ADD8E6',
        justifyContent: 'flex-start',
        paddingTop: 80,
        paddingLeft: 10,
        paddingBottom: 80,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      textContainer: {
        marginLeft: 10,
      },
      welcomeText: {
        color: 'white',
        fontSize: 20,
      },
      usernameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
      },
      questionText: {
        color: 'white',
        fontSize: 18,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 25,
        marginTop: 30,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
      },
      searchInput: {
        marginLeft: 10,
        flex: 1,
        fontSize: 16,
      },
      content: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
      },
      selectText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      optionContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 5 },
        elevation: 5,
      },
      optionImage: {
        width: 50,
        height: 50,
        marginRight: 15,
      },
      optionTextContainer: {
        flex: 1,
      },
      optionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      optionSubtitle: {
        fontSize: 14,
        color: '#888',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#eee',
      },
    });
  
  export default styles;