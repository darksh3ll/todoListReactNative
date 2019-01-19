import React from 'react';
import {Button, View} from 'react-native';
import DisplayTodos from "./components/DisplayTodos";
import SearchBar from "./components/SearchBar"
import DisplayEndTodos from "./components/DisplayEndTodos";
import {Badge} from 'react-native-elements';


export default class App extends React.Component {

    state = {
        on: false,
        todo: "",
        todos: [],
        todoEnd: []
    };

    addTodo = () => {
        if (this.state.todo.length > 0) {
            const todo = this.state.todo;
            this.setState({todos: [...this.state.todos, todo]})
        }
        this.setState({todo: ""})
    };
    deleteTodos = (todo) => {
        let endTodo = todo;
        this.setState({todoEnd: [...this.state.todoEnd, endTodo]})
        let currentTodo = this.state.todos
        const indexOfTodo = currentTodo.indexOf(todo);
        currentTodo.splice(indexOfTodo, 1);
        this.setState({todos: currentTodo})
    };

    deleteEndTodos = (todo) => {
        let currentEndTodo = this.state.todoEnd
        const indexOfTodo = currentEndTodo.indexOf(todo)
        currentEndTodo.splice(indexOfTodo,1)
        this.setState({todoEnd:currentEndTodo})
    };

    revertTodo = (todoend) => {
        let todoEnd = todoend
        let currentTodoEnd = this.state.todoEnd
        const indexOfTodoEnd = currentTodoEnd.indexOf(todoEnd)
        currentTodoEnd.splice(indexOfTodoEnd, 1);
        this.setState({todoEnd: currentTodoEnd});
        this.setState({todos: [...this.state.todos, todoend]})
    };


    handleChange = (e) => {
        this.setState({todo: e})
    };


    // Affiche les todos terminés
    displayEndTodos = () => {
        this.setState({on: !this.state.on});
    };


    render() {
        return (
            <View>
                <View>
                    <SearchBar
                        value={this.state.todo}
                        add={this.addTodo}
                        onChange={this.handleChange}
                        lengthArrTodos={this.state.todos.length}
                    />
                </View>

                <View>
                    {
                        this.state.todos.map((todo, key) => {
                            return (
                                <View key={key}>
                                    <DisplayTodos
                                        todo={todo}
                                        delete={() => this.deleteTodos(todo)}
                                    />
                                </View>
                            )
                        })
                    }
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Button
                        onPress={this.displayEndTodos}
                        title={this.state.on ? "Masquer les tâches achevées" : "Afficher les tâches achevées"}
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Badge
                        value={this.state.todoEnd.length}
                        textStyle={{color: 'orange'}}
                    />
                </View>
                <View>

                    {this.state.on &&
                    this.state.todoEnd.map((todo, index) => {

                        return (
                            <DisplayEndTodos
                                key={index}
                                todoEnd={todo}
                                deleteTodo={() =>this.deleteEndTodos(todo)}
                                displayEndTodos={this.displayEndTodos}
                                lengthArrTodos={this.state.todoEnd.length}
                                revert={() => this.revertTodo(todo)}
                            />
                        )
                    })
                    }
                </View>
            </View>
        );
    }
}

