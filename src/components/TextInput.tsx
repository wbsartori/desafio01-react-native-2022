import {TextInput} from 'react-native';
import {Platform, StyleSheet} from "react-native";

export function Input() {
    return (
        <TextInput
            style={styles.input}
            placeholder="Adicione uma Nova tarefa"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#262626',
        color: '#808080',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 20: 15,
        flexDirection: "row",
        borderRadius: 7,
        width: '80%'
    }
});