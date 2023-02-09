import React from 'react';
import DeleteIcon from "../assets/images/icon-cross.svg"


function Todo({ text, completed, index,id, setTodos, todos }) {
    const handleClick = (e) => {
        const todoArray = [...todos];
        if (e.target.parentElement.dataset.completed == "true") {
            todoArray[index].completed = false;
            setTodos(todoArray)
        } else {
            todoArray[index].completed = true;
            setTodos(todoArray)
        }
    }
    const handleDelete = () => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    return (
        <li className='todo' data-completed={completed}>
            <p onClick={handleClick}>
                {text}
            </p>
            <div className='delete' onClick={handleDelete}>
                <img src={DeleteIcon} alt="delete" />
            </div>
            
        </li>
    )
}

export default Todo