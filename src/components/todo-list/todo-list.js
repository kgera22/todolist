import React from "react"
import TodoListItem from "../todo-list-item"
import "./todo-list.css"

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone }) => {
    
    
    const elements = todos.map(todo => {
        return <li className="list-group todo-list-item" key={todo.id}><TodoListItem {...todo} 
        onDeleted={()=> onDeleted(todo.id)}  onToggleImportant={()=>onToggleImportant(todo.id)} 
        onToggleDone={()=>onToggleDone(todo.id)}/></li>
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default TodoList