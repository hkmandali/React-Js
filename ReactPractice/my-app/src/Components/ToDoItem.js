import React from "react"

function ToDoItem(props){
    return(
        <div className="todo-item">
            <input type ="checkbox" onChange ={() => props.handleChange(props.item.id)}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem