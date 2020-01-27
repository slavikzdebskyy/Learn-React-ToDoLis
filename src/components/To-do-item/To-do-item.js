import React from 'react';
import './To-do-item.scss';

const ToDoItem = ({task}) =>(
  <div className='item-container flex'>
    <span 
      className= {`item ${task.isDone ? 'done' : ''}`} 
      >
      { task.title }
    </span>
    <button className="close-btn">
      X
    </button>
  </div>
);

export default ToDoItem;