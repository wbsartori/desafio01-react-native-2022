import { Entypo, Feather } from '@expo/vector-icons';

import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View} from 'react-native';

import {styles} from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Image style={styles.image} source={require('../../assets/rocket.png')} />
                    <Text style={styles.todo_to}>to</Text>
                    <Text style={styles.todo_do}>do</Text>
                </View>
            </View>
            <View style={styles.formContent}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma Nova tarefa"
                    placeholderTextColor="#808080"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        <Image source={require('../../assets/plus.png')} />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentText}>
                <Text style={styles.textCreate}>
                    Criadas
                </Text>
                <Text style={styles.resultNumber}>0</Text>

                <Text style={styles.textCompleted}>
                    Concluídas
                </Text>
                <Text style={styles.resultNumberTwo}>0</Text>
            </View>
            <ScrollView style={styles.list}>
                <Text style={styles.line}></Text>
                <View style={styles.iconList}>
                    <Image source={require('../../assets/clipboard.png')} />
                </View>
                <Text style={styles.textListNull}>Você inda não tem tarefas cadastradas</Text>
                <Text style={styles.textListCreateNull}>Crie tarefas e organize seus itens a fazer</Text>
            </ScrollView>
        </View>
);
}
