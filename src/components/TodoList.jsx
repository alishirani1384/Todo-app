import React, { useEffect, useState } from 'react'
import Todo from './Todo'

function TodoList({ newTodo }) {
    const [todos, setTodos] = useState(initialTasks)
    useEffect(() => {
        if (newTodo) {
            setTodos(pre => [...pre, newTodo])
        } else {
            setTodos(pre => [...pre])
        }
    }, [newTodo])
    return (
        <div className='todo-list'>
            {
                todos.map((todo, i) => {
                    return <Todo todos={todos} key={i} text={todo.txt} completed={todo.completed} id={todo.id} setTodos={setTodos} />
                })
            }
            <div className="footer">
                <p className="lenght">{todos.filter(todo => todo.completed == false).length} Items left</p>
                <div className="status">
                    <p>All</p>
                    <p>Active</p>
                    <p>Completed</p>
                </div>
                <p className="clear" onClick={() => setTodos(todos.filter(todo => !todo.completed))}>Clear completed</p>
            </div>
        </div>
    )
}
const initialTasks = [
    {
        txt: "Complete online javascript course",
        completed: true,
        id: 0
    },
    {
        txt: "Jog around the park",
        completed: false,
        id: 1
    },
    {
        txt: "10 minutes meditation",
        completed: false,
        id: 2
    },
    {
        txt: "Read for one hour",
        completed: false,
        id: 3
    },
    {
        txt: "Pick up grocceries",
        completed: false,
        id: 4
    },
    {
        txt: "Complete todo app on frontend mentor",
        completed: false,
        id: 5
    },
]

export default TodoList