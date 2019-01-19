import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {Icon} from "react-native-elements";

class DisplayTodos extends Component {

    render() {
        return (
            <View style={{flexDirection:"row",alignItems: "center",padding: 5}}>

                <View style={{flex:2}}>
                    <Text>{this.props.todo}</Text>
                </View>

                <View>
                    <Icon
                        size={30}
                        onPress={(todo) => this.props.delete(todo)}
                        name='delete'
                        color='#00aced'
                    />

                </View>
            </View>
        );
    }
}

export default DisplayTodos;