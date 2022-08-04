import React from 'react';
import {FlatList, Image, TouchableOpacity, View, Text, StyleSheet, FlatListProps, ScrollView} from 'react-native';

export interface Task {
    id: number;
    title: string;
}

interface TasksListProps {
    tasks: Task[];
    removeTask: (id: number) => void;
}

export function TasksList({ tasks, removeTask }: TasksListProps) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
                return (
                    <ScrollView style={styles.list}>
                        <Text style={styles.line}></Text>
                        <View style={styles.iconList}>
                            <Image source={require('../../assets/clipboard.png')} />
                        </View>
                        <Text style={styles.textListNull}>Você inda não tem tarefas cadastradas</Text>
                        <Text style={styles.textListCreateNull}>Crie tarefas e organize seus itens a fazer</Text>
                    </ScrollView>
                )
            }}
            style={{
                marginTop: 32
            }}
        />
    )
}

const styles = StyleSheet.create({
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
})