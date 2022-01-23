import React from "react";
import Todo_ListItem from "./TodoListItem";

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
export default TodoList