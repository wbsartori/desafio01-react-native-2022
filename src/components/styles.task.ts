import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {        
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 8,
        backgroundColor: '#1F1E25',
        height: 64,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",        
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        textAlign: "center"
    },
    buttonText:{
        color: '#FFFFFF',
        fontSize: 24
    },
    button: {
        height: 32,
        width: 32,            
        alignItems: "center",
        justifyContent: "center"
    },
    check: {
        marginLeft: 15
    },
    trash: {
        marginRight: 15
    }
});