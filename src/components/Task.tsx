import {View, TouchableOpacity, Text, Image} from 'react-native';

import {styles} from './styles.task'

type Props = {
    task: string;
}

export function Task({ task } : Props){

    function teste(){        
        styles.check   
    }

    return (
        <View style={styles.container}>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={teste}
                    >
                    <Image style={styles.check} source={require("../../assets/check.png")} />                    
                </TouchableOpacity>
            
                <Text style={styles.name}>
                    {task}
                </Text>
                
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.trash} source={require("../../assets/trash.png")} />                    
                </TouchableOpacity>
    
            </View>
    );
}