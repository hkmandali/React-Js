import React from "react"

import ReactDOM from "react-dom"
import ToDoItem from "./ToDoItem"
function ToDoApp(){
    return(
        <div className="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    );

}

export default ToDoApp