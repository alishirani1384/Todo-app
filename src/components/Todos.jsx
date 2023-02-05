import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todos() {
  const [newTodo, setNewTodo] = useState()
  console.log(newTodo)
  return (
      <div className='todos'>
          <TodoInput setNewTodo={setNewTodo} />
          <TodoList newTodo={newTodo} />
      </div>
  )
}

export default Todos