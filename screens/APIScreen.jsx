import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text, TouchableOpacity, FlatList,
} from 'react-native';
import {Styles, Layout, MainStyle} from "../components/Styles";
import CustomButton from "../components/CustomButton";
import {Task} from "../components/Task";
import todoAPI from "../config/index"
import axios from "axios";

export default function APIScreen({navigation}) {

    const [taskItems, setTaskItems] = useState([]);

    useEffect(() => {
        getTodos()
    }, [])

    function getTodos() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/4')
            .then((response) => {
                setTaskItems([...taskItems, response.data.title])
                console.log(taskItems.title)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    if (!taskItems) {
        return null
    }

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                {/* Today's Tasks */}
                <View style={MainStyle.tasksWrapper}>
                    <Text style={Styles.heading}>Today's tasks :</Text>
                    <View style={MainStyle.items}>
                        {
                            /* Map items from the taskItems and show them as tasks */
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => completeTask(index)}
                                    >
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
