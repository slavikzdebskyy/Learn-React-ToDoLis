import React, { useContext } from 'react';
import {connect} from "react-redux";
import './To-do-item.scss';

import { TaskContext } from '../To-do-item/To-do-item';
import toggleTaskAction from "../../store/actions/toggle-task.action";

const ToggleItem = ({toggleDone}) => {
  const { task } = useContext(TaskContext);
  return (
    <span 
      className= {`item ${task.isDone ? 'done' : ''}`} 
      onClick={() => toggleDone(task.id)}>
      { task.title }
    </span>
  )
};

const mapDispatchToProps = dispatch => ({
  toggleDone: id => dispatch(toggleTaskAction(id))
});

export default connect(null, mapDispatchToProps)(ToggleItem);
