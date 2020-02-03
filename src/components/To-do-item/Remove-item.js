import React, { useContext } from 'react';
import './To-do-item.scss';

import Context from '../Contex';
import { TaskContext } from '../To-do-item/To-do-item';

const RemoveItem = () => {
  const { removeTask } = useContext(Context);
  const { taskId } = useContext(TaskContext);

  return (
    <button 
    className="close-btn"
    onClick={() => removeTask(taskId)}>
    X
  </button>
  )
}

export default RemoveItem;