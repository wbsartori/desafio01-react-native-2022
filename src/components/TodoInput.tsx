import React, { useState } from 'react';
import {TextInput, View, TouchableOpacity} from 'react-native';
import {Platform, StyleSheet} from "react-native";

interface Props {
    addTask: (task: string) => void;
  }

export function Input({ addTask } : Props) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if(!task)
          return;
        addTask(task);
        setTask('');
      }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder="Adicionar nova tarefa"
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.button}
                onPress={handleAddNewTask}
            >                
            </TouchableOpacity>
            </View>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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