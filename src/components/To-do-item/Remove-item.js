import React, { useContext } from 'react';
import {connect} from "react-redux";

import './To-do-item.scss';
import { TaskContext } from '../To-do-item/To-do-item';
import removeTaskAction from "../../store/actions/remove-task.action";

const RemoveItem = ({removeTask}) => {
  const { taskId } = useContext(TaskContext);

  return (
    <button 
    className="close-btn"
    onClick={() => removeTask(taskId)}>
    X
  </button>
  )
};

const mapDispatchToProps = dispatch => ({
  removeTask: id => dispatch(removeTaskAction(id))
});

export default connect(null, mapDispatchToProps)(RemoveItem);
