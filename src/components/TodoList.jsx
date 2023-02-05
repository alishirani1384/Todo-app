import React, { useEffect, useState } from 'react'
import Todo from './Todo'

function TodoList({newTodo}) {
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
    useEffect(() => {
        if (newTodo) {
            setTodos(pre =>[...pre,newTodo])
        }
        
    },[newTodo])
  return (
      <div className='todo-list'>
          {
              todos.map((todo,i) => {
                  return <Todo key={i} text={todo.txt} completed={todo.completed} />
              })
          } 
          <div className="footer">
              <p className="lenght">{todos.filter(todo => todo.completed == false).length} Items left</p>
              <div className="status">
                  <p>All</p>
                  <p>Active</p>
                  <p>Completed</p>
              </div>
              <p className="clear">Clear completed</p>
          </div>
    </div>
    )
    
}

export default TodoList