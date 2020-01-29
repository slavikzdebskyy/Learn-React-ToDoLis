import React from 'react';
import './Add-task.scss';


 const AddTask = ({addTask}) => {
   let value ='';

   const removeTask = (event) => {
    addTask(value);
    event.target.value = '';
   }

  return (
    <div className="add-task-cont">
      <input
        className="input"
        onChange={event => value = event.target.value}/>
      <button 
        className="add-btn"
        onClick={event => removeTask(event)}>
        Add
      </button>
    </div>
  )
};

export default AddTask;
