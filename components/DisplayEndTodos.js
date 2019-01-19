import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Icon} from "react-native-elements"

class DisplayEndTodos extends Component {
    render() {
        return (
            <View style={{flexDirection: "row", alignItems: "center", padding: 10}}>

                <View style={{flex: 2}}>
                    <Text style={{
                        textDecorationLine: 'line-through',
                        textDecorationStyle: 'solid'
                    }}>{this.props.todoEnd}</Text>
                </View>


                <View >
                    <Icon
                        size={30}
                        onPress={(todo) => this.props.revert(todo)}
                        name='undo'
                        color='#00aced'
                    />
                </View>

                <View style={{marginLeft:50}} >
                    <Icon
                        size={30}
                        onPress={(todo) => this.props.deleteTodo(todo)}
                        name='delete'
                        color='#00aced'
                    />
                </View>
            </View>
        );
    }
}

export default DisplayEndTodos;