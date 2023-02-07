import React, { useState } from 'react'

function TodoInput({ setNewTodo }) {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(6);
  function handleSubmit(e) {
    e.preventDefault();
    setId(pre => pre + 1)
    if (todo) {
      setNewTodo({ txt: todo, completed: false, id })
    }
    setTodo("");
  }
  return (
    <form className="todo-input" onSubmit={handleSubmit}>
      <div className='mark'>
      </div>
      <input type="text" placeholder='Create a new todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
    </form>
  )
}

export default TodoInput