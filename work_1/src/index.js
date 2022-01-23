import React from 'react';
import ReactDOM from 'react-dom';


const Todo_StatusFilter = () => {
    return (
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Dote</button>
        </div>
    )
}
const Todo_Search = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}
const Todo_ListItem = ({label}) => {
    return (
        <span>{label}</span>
    )
}
const TodoList = ({todos}) => {
    const elements = todos.map((item) => {
        return <li key={item.id}><Todo_ListItem {...item}/></li>
    })
    return (
        <div>
            <ul>
                {elements}
            </ul>
        </div>
    )
}
const Todo_header = () => {
    return (<div>
        <Todo_Search/>
        <Todo_StatusFilter/>
    </div>)
}

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

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
