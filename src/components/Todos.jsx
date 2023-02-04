import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function Todos() {
  return (
      <div className='todos'>
          <TodoInput />
          <TodoList/>
      </div>
  )
}

export default Todos