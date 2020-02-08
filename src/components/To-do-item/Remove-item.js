import React, { useContext } from 'react';
import './To-do-item.scss';

import { TaskContext } from '../To-do-item/To-do-item';
import { removeTaskAction } from '../../redux/actions';
import { connect } from 'react-redux';

const RemoveItem = ({ remove }) => {
  const { taskId } = useContext(TaskContext);

  return (
    <button 
    className="close-btn"
    onClick={() => remove(taskId)}>
    X
  </button>
  )
}

const mapDispatchToProps = id => dispatch => ({
  remove: id => dispatch(removeTaskAction(id)),
})

export default connect(null, mapDispatchToProps)(RemoveItem);