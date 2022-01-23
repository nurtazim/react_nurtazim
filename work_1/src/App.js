import React from "react";
import Todo_header from "./TodoHeader";
import TodoList from "./TodoList";
const App = () => {
    const todos = [
        {id: 1, label: "Drink tea", done: false, import: false},
        {id: 2, label: "Drink vodka", done: false, import: false},
        {id: 3, label: "Drink coffe", done: false, import: false},
        {id: 4, label: "Drink milk", done: false, import: false}
    ]
    return (<div>
        <Todo_header/>
        <TodoList todos={todos}/>
    </div>)
}

export default App