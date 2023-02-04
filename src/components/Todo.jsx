import React, { useRef } from 'react';


function Todo({ text, completed }) {
    const element = useRef(null);
    function handleClick(e) {
        if (e.target.dataset.completed == "true") {
            e.target.dataset.completed = "false";
        } else {
            e.target.dataset.completed = "true";
        }
    }
  return (
      <p className='todo' onClick={handleClick} ref={element} data-completed={completed}>
          {text}
      </p>
  )
}

export default Todo