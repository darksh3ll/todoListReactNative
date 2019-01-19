import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class DisplayTodos extends Component {

    render() {
        return (
            <View style={{flexDirection:"row",alignItems: "center",padding: 5}}>

                <View style={{flex:2}}>
                    <Text>{this.props.todo}</Text>
                </View>

                <View style={{flex:1}}>
                    <Button
                        onPress={(todo) => this.props.delete(todo)}
                        title="Supprimer"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}

export default DisplayTodos;