import React, { useState } from 'react';
import './Add-task.scss';

import { addNewTaskAction } from '../../redux/actions';
import { connect } from 'react-redux';



 const AddTask = ({addTaskRedux}) => {
  const [ value, setValue ] = useState('');

  const submit = (event) => {
    event.preventDefault();
    setValue('');
    addTaskRedux(value);
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

const mapDispatchToProps = dispatch => ({
  addTaskRedux: title => dispatch(addNewTaskAction(title))
})

export default connect(null, mapDispatchToProps)(AddTask);
