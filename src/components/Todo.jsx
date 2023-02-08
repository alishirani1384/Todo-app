import React, { useCallback } from 'react';


function Todo({ text, completed, index, setTodos, todos }) {
    const handleClick = (e) => {
        const todoArray = [...todos];
        if (e.target.dataset.completed == "true") {
            todoArray[index].completed = false;
            setTodos(todoArray)
        } else {
            todoArray[index].completed = true;
            setTodos(todoArray)
        }
    }

    return (
        <li className='todo' data-completed={completed}>
            <p onClick={handleClick}>
                {text}
            </p>
        </li>
    )
}

export default Todo