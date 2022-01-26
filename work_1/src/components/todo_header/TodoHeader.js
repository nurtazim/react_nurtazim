import React from "react";
import Todo_StatusFilter from "../todo_status_filter/TodoStatusFilter";
import Todo_Search from "../todo_search";

const Todo_header = () => {
    return (<div>
        <Todo_Search/>
        <Todo_StatusFilter/>
    </div>)
}


export default Todo_header