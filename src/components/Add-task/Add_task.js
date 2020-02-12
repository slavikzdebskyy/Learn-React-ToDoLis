import React, {useState} from 'react';
import {connect} from "react-redux";

import './Add-task.scss';
import addNewTaskAction from "../../store/actions/add-new-task.action";

const AddTask = ({add}) => {
  const [value, setValue] = useState('');

  const submit = (event) => {
    event.preventDefault();
    add(value);
    setValue('');
  };

  return (
    <div className="add-task-cont">
      <form onSubmit={event => submit(event)}>
        <input
          className="input"
          value={value}
          onChange={({target}) => setValue(target.value)}/>
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
  add: title => dispatch(addNewTaskAction(title)),
  //...
});

export default connect(null, mapDispatchToProps)(AddTask);
