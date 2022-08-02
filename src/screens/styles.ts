import {Platform, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        width: "100%",
        height: 210,
        backgroundColor: "#0D0D0D",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    title: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        marginRight: 10
    },
    todo_to: {
        flexDirection: "row",
        color: '#4EA8DE',
        fontSize: 32,
        height: 50
    },
    todo_do: {
        flexDirection: "row",
        color: '#5E60CE',
        fontSize: 32,
        height: 50
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FFF',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 20: 16,
        marginRight: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: "center",
        justifyContent: "center"
    },
    formContent: {
        flexDirection: "row",
        position: "absolute",
        marginTop: "40%",
        padding: 25
    },
    list: {
        height: 50,
        borderTopColor: '#808080',
    },
    contentText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 30
    },
    textCreate: {
        color: '#4EA8DE',
        fontSize: 17,
        fontWeight: "bold"
    },
    textCompleted: {
        color: '#8284FA',
        fontSize: 17,
        fontWeight: "bold"
    },
    textListNull: {
        color: '#FFF',
        textAlign: "center",
    },
    resultNumber: {
        marginRight: '30%',
        width: 25,
        height: 20,
        backgroundColor: '#333333',
        borderRadius: 10,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: '#fff'
    },
    resultNumberTwo: {
        width: 25,
        height: 20,
        backgroundColor: '#333333',
        borderRadius: 10,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: '#fff'
    },
    textListCreateNull: {
        color: '#808080',
        textAlign: "center",
        fontSize: 13
    },
    iconList: {
        alignItems: "center",
        marginTop: 48,
        marginBottom: 48
    },
    textColumns: {
        flexDirection: "column",
        alignContent: "space-between"
    },
    line: {
        borderTopWidth: 1,
        borderColor: '#808080',
        margin: 15
    }
});