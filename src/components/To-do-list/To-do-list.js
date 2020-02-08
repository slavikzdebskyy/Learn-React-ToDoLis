import React, { useState, useEffect } from "react";

import Context from '../Contex';
import List from './List';
import AddTask from '../Add-task/Add_task';
import Loader from './Loader';
import './To-do-list.scss';

const LS_KEY = 'TASKS';

const  makeId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const getData = () => fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => data.slice(0,5))      
  .then(data => data.map(item => {
    return {
      id: item.id,
      title: item.title,
      isDone: item.completed,
    }
  }))
  .then(data => data.length ? data : null);
     
      

const ToDoList = () => {
  const [ tasksInState, setTasks ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);  

  useEffect(() => {
    const  getTasks = async () => {
      const data = await getData();
      console.log(data);
      setTasks(data);
      setIsLoading(false);      
    }
    getTasks();
  }, []);

  const updateState = tasks => {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
    setTasks([...tasks])
  }

  const addTask = (title) => {
    const newTask = {
      id: makeId(7),
      title,
      isDone: false,
    };
    updateState([...tasksInState, newTask])

    // *
    // const newTasks = tasksInState.map(el => el);
    // newTasks.push(newTask);
    // updateState(newTasks);
    // *
  }

  
  const removeTask = id => {
    updateState(tasksInState.filter(task => task.id !== id));
  }

  const toggleDone = id => { 
    const index = tasksInState.findIndex(task => task.id === id);
    if(index < 0 ) {
      return;
    }

    const cloneTasks = [...tasksInState];
    cloneTasks[index].isDone = !cloneTasks[index].isDone;
    updateState(cloneTasks);    
  }


  return (
    <Context.Provider value={{ removeTask, toggleDone, addTask }}>
      <div className='todo-list'>        
        <AddTask /> 
        <h3>
          Tasks
        </h3>
        
        { isLoading ? <Loader/> : <List tasks={tasksInState}/> }          
      </div>
    </Context.Provider>
  );
}

export default ToDoList;
