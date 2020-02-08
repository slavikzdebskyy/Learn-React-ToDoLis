import React from "react";
import { connect } from 'react-redux';

import List from './List';
import AddTask from '../Add-task/Add_task';
import Loader from './Loader';
import './To-do-list.scss';  

const ToDoList = ({ toDoList, isLoading }) => {

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

export default connect(mapStateToProps)(ToDoList);
