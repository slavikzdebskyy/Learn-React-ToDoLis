import React, { useState, useEffect } from "react";

import Context from '../Contex';
import ToDoItem from '../To-do-item/To-do-item';
import AddTask from '../Add-task/Add_task';
import './To-do-list.scss';

const LS_KEY = 'TASKS';

const styles = {
  info: {
    textAlign: 'center'
  },
  loading: {
    with: '100%',
    textAlign: 'center'
  }
}

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
      isDone: item.comleted,
    }
  }))
  .then(data => data.length ? data : null);
     
      

const ToDoList = () => {
  const [ tasksInState, setTasks ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);  

  useEffect(() => {
    const  getTasks = async () => {
      const data = await getData();
      setTimeout(() => {
        setTasks(data);
        setIsLoading(false);
      }, 1000)
      
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
        {isLoading ?
          <div style={styles.loading}>
            <div className="lds-dual-ring"></div> 
          </div>
        :
          (tasksInState.length ? 
            <ul>            
              {tasksInState.map((task, index) => {
                return (
                  <li 
                    key={index} 
                    className="list-item">
                      <ToDoItem task={task} />
                  </li>            
                )
              })}
            </ul>  
          : 
            <h3 style={styles.info}>No Tasks</h3>
          )
          }          
      </div>

    </Context.Provider>
  );
}

export default ToDoList;
