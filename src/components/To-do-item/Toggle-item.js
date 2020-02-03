import React, { useContext } from 'react';
import './To-do-item.scss';

import Context from '../Contex';
import { TaskContext } from '../To-do-item/To-do-item';

const ToggleItem = () => {
  const { toggleDone } = useContext(Context);
  const { task } = useContext(TaskContext);
  return (
    <span 
      className= {`item ${task.isDone ? 'done' : ''}`} 
      onClick={() => toggleDone(task.id)}>
      { task.title }
    </span>
  )
}

export default ToggleItem;