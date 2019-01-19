import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native'
import {Badge} from 'react-native-elements';

class SearchBar extends Component {

    render() {
        return (
            <View style={{paddingTop: 40}}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(e) => this.props.onChange(e)}
                    value={this.props.value}
                    placeholder="Ajouter une tâche
"

                />
                <View/>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Button
                        title="Ajouter une tâche"
                        accessibilityLabel="Learn more about this purple button"
                        onPress={this.props.add}
                    />

                    <Badge
                        value={this.props.lengthArrTodos}
                        textStyle={{color: 'orange'}}
                    />
                </View>
            </View>
        );
    }
}

export default SearchBar;