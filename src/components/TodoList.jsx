import React, { useState } from 'react'
import Todo from './Todo'

function TodoList() {
    const [todos,setTodos] = useState([
        {
            txt: "Complete online javascript course",
            completed:true
        },
        {
            txt: "Jog around the park",
            completed:false
        },
        {
            txt: "10 minutes meditation",
            completed:false
        },
        {
            txt: "Read for one hour",
            completed:false
        },
        {
            txt: "Pick up grocceries",
            completed:false
        },
        {
            txt: "Complete todo app on frontend mentor",
            completed:false
        },
    ])
  return (
      <div className='todo-list'>
          {
              todos.map(todo => {
                  return <Todo text={todo.txt} completed={todo.completed} />
              })
         } 
    </div>
    )
    
}

export default TodoList