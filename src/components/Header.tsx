import {Image, Text, View} from 'react-native';
import { StyleSheet} from "react-native";

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.title}>
                <Image style={styles.image} source={require('../../assets/rocket.png')} />
                <Text style={styles.todo_to}>to</Text>
                <Text style={styles.todo_do}>do</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
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
    }
});