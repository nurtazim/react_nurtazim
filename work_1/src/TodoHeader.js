import React from "react";
import Todo_StatusFilter from "./TodoStatusFilter";
import Todo_Search from "./TodoSearch";

const Todo_header = () => {
    return (<div>
        <Todo_Search/>
        <Todo_StatusFilter/>
    </div>)
}


export default Todo_header