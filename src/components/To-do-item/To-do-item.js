import React from 'react';
import './To-do-item.scss';

const ToDoItem = ({task, vydalennja, toggleDone}) =>(
  <div className='item-container flex'>
    <span 
      className= {`item ${task.isDone ? 'done' : ''}`} 
      onClick={() => toggleDone(task.id)}>
      { task.title }
    </span>
    <button 
      className="close-btn"
      onClick={() => vydalennja(task.id)}>
      X
    </button>
  </div>
);

export default ToDoItem;