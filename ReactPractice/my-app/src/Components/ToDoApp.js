import React from "react"

import ReactDOM from "react-dom"
import ToDoItem from "./ToDoItem"
import todosData from "./todosData"
function ToDoApp(){
    const todoComponents = todosData.map((item) => <ToDoItem key={item.id} item={item}/>)
    return(
        <div className="todo-list">
            {todoComponents}
        </div>
    );

}

export default ToDoApp