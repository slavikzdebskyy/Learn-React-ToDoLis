import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import List from './List';
import AddTask from '../Add-task/Add_task';
import Loader from './Loader';
import './To-do-list.scss';
import initTasksAction from "../../store/actions/init-todos.action";






const ToDoList = ({todos, initTodos, isLoading}) => {
  useEffect(() => initTodos(), []);

  return (
      <div className='todo-list'>        
        <AddTask /> 
        <h3>
          Tasks
        </h3>

        { isLoading ? <Loader/> : <List tasks={todos}/> }
      </div>
  );
};

const mapStateToProps = ({todos, isLoading}) => {
  return {
    todos,
    isLoading,
  }
};

const mapDispatchToProps = dispatch => ({
  initTodos: () => dispatch(initTasksAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
