import React, { useContext } from 'react';
import './To-do-item.scss';

import { TaskContext } from '../To-do-item/To-do-item';
import { toggleTaskAction } from '../../redux/actions';
import { connect } from 'react-redux';

const ToggleItem = ({ toggle }) => {
  const { task } = useContext(TaskContext);
  return (
    <span 
      className= {`item ${task.isDone ? 'done' : ''}`} 
      onClick={() => toggle(task.id)}>
      { task.title }
    </span>
  )
}

const mapDispatchToProps = id => dispatch => ({
  toggle: id => dispatch(toggleTaskAction(id)),
})

export default connect(null, mapDispatchToProps)(ToggleItem);