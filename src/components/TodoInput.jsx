import React, { useState } from 'react'

function TodoInput({ setNewTodo }) {
  const [todo, setTodo] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    setNewTodo({ txt: todo, completed: false })
    setTodo("");
  }
  return (
      <form className="todo-input" onSubmit={handleSubmit}>
          <div className='mark'>
          </div>
          <input type="text" placeholder='Create a new todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    </form>
  )
}

export default TodoInput