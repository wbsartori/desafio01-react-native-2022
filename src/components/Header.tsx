import {Image, Text, TextInput, View} from 'react-native';
import {Platform, StyleSheet} from "react-native";

export function Header() {
    return (
        <View style={styles.title}>
            <Image style={styles.image} source={require('../../assets/rocket.png')} />
            <Text style={styles.todo_to}>to</Text>
            <Text style={styles.todo_do}>do</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    title: {
        flexDirection: "row",
        color: '#fff',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0D0D0D',
        paddingVertical: 75
    },
    image: {
        marginRight: 10,
        marginTop: 10
    },
    todo_to: {
        flexDirection: "row",
        color: '#4EA8DE',
        fontSize: 32
    },
    todo_do: {
        flexDirection: "row",
        color: '#5E60CE',
        fontSize: 32
    }
});