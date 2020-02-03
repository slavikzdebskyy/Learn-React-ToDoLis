import React from 'react';
import './To-do-item.scss';

import RemoveItem from './Remove-item';
import ToggleItem from './Toggle-item';

export const TaskContext = React.createContext();

const ToDoItem = ({ task }) => (
  <div className='item-container flex'>
    <TaskContext.Provider value={{ task, taskId: task.id }}>
      <ToggleItem />
      <RemoveItem />
    </TaskContext.Provider>    
  </div>
);

export default ToDoItem;