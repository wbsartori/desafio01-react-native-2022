import {Text, Button, TouchableOpacity} from 'react-native';
import {Platform, StyleSheet} from "react-native";

export function Btn() {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text>+</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#262626',
        color: '#808080',
        padding: Platform.OS === 'ios' ? 20: 20,
        borderRadius: 5,
}
});