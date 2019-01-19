import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

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

                <View style={{flex: 1}}>
                    <Button
                        onPress={(todo) => this.props.revert(todo)}
                        title="Revenir"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}

export default DisplayEndTodos;