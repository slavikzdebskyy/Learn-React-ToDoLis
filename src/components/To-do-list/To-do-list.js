import React, {useEffect} from "react";
import { connect } from 'react-redux';

import List from './List';
import AddTask from '../Add-task/Add_task';
import Loader from './Loader';
import './To-do-list.scss';
import {initTasksAction} from "../../redux/actions";

const ToDoList = ({ isLoading, initTodos }) => {
  useEffect(() => initTodos(), [initTodos]);
  return (
      <div className='todo-list'>        
        <AddTask /> 
        <h3>
          Tasks
        </h3>
        
        { isLoading ? <Loader/> : <List/> }   
      </div>
  );
}

const mapStateToProps = ({ toDoList, isLoading }) => {
  return {
    toDoList,
    isLoading,
  }
}

const mapDispatchToProps = () => dispatch => ({
  initTodos: () => dispatch(initTasksAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
