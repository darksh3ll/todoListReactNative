import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native'
import {Badge} from 'react-native-elements';
import {Icon} from "react-native-elements"


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
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center",paddingTop:10}}>
                    <Icon
                        size={64}
                        name='add'
                        color='#00aced'
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