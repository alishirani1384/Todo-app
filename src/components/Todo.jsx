import React, { useCallback } from 'react';


function Todo({ text, completed, id, setTodos, todos }) {
    const handleClick = useCallback((e) => {
        const todoArray = [...todos];
        if (e.target.dataset.completed == "true") {
            todoArray[id].completed = false;
            setTodos(todoArray)
        } else {
            todoArray[id].completed = true;
            setTodos(todoArray)
        }
    },
        [completed])
    return (
        <p className='todo' onClick={handleClick} data-completed={completed}>
            {text}
        </p>
    )
}

export default Todo