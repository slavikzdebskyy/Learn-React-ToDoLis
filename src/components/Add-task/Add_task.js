import React, { useContext, useState } from 'react';
import './Add-task.scss';

import Context from '../Contex';



 const AddTask = () => {
  const { addTask } = useContext(Context);
  const [ value, setValue ] = useState('');

  const submit = (event) => {
    event.preventDefault();
    addTask(value);
    setValue('');
  }

  return (
    <div className="add-task-cont">
      <form onSubmit={event => submit(event)}>
        <input
          className="input"
          value={value}
          onChange={({ target }) => setValue(target.value)}/>
        <button
          type="submit" 
          className="add-btn">
          Add
        </button>
      </form>
    </div>
  )
};

export default AddTask;
