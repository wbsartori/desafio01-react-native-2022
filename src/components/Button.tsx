import {Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from "react-native";


export function Button({ pathImg, onAddTask}) {    

    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onAddTask}
            >
            <Text style={styles.buttonText}>
                <Image source={pathImg} />
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
});