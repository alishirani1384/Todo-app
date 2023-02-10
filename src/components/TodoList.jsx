import React, { useEffect, useReducer, useState } from 'react';
import Todo from './Todo'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function TodoList({ newTodo }) {
    const [todos, setTodos] = useState(initialTasks);
    const [filter,setFilter] = useState(todos);
    const reduser = (state, action) => {
        const notcompleted = filter.filter(todo => todo.completed == false);
        const completed = filter.filter(todo => todo.completed == true);
        switch (action.type) {
            case "ALL": return setTodos(filter);
            case "ACTIVE": return setTodos(notcompleted);
            case "COMPLETED": return setTodos(completed);
                
        }
    }
    const [state,dispatch]=useReducer(reduser,todos)
    useEffect(() => {
        if (newTodo) {
            setTodos(pre => [...pre, newTodo])
        } else {
            setTodos(pre => [...pre])
        }
    }, [newTodo])
    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);
    }

    return (
        <div className='todo-list'>
            <DragDropContext onDragEnd={handleOnDragEnd} >
                <Droppable droppableId='char'>
                    {(provided) => (
                        <ul className='char' {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                todos.map((todo, i) => {
                                    return (
                                        <Draggable index={i} key={todo.id} draggableId={todo.id.toString()}>
                                            {
                                                (provided) => (
                                                    <div key={i} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                        <Todo todos={todos} index={i} text={todo.txt} completed={todo.completed} id={todo.id} setTodos={setTodos} />
                                                    </div>
                                                )
                                            }

                                        </Draggable>
                                    )
                                })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>


            <div className="footer">
                <p className="lenght">{todos.filter(todo => todo.completed == false).length} Items left</p>
                <div className="status">
                    <p onClick={()=>dispatch({type:"ALL"})}>All</p>
                    <p onClick={()=>dispatch({type:"ACTIVE"})}>Active</p>
                    <p onClick={() => dispatch({ type: "COMPLETED" })}>Completed</p>
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