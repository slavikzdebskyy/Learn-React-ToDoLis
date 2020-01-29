import React, { Component } from "react";
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

// const ToDoList = () => {
//   // const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(LS_KEY)) || []);  
//   const state = {
//     tasks: JSON.parse(localStorage.getItem(LS_KEY)) || [],
//   }

//   const addTask = (title) => {
//     const newTask = {
//       id: makeId(7),
//       title,
//       idDone: false,
//     };
//     state.tasks.push(newTask);
//     localStorage.setItem(LS_KEY, JSON.stringify(state.tasks));
//     setState(prevState => )
//   }

//   return(
//     <div className='todo-list'>
      
//       <AddTask addTask={addTask}/> 
//       <h3>
//         Tasks
//       </h3>
//       <ul>
//         {state.tasks.map((task, index) => {
//           return (
//             <li key={index} className="list-item">
//               <ToDoItem task={task}/>
//             </li>            
//           )
//       })}
//       </ul>
      
//     </div>
//   );
// }

// export default ToDoList;


export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: JSON.parse(localStorage.getItem(LS_KEY)) || [],
      isLoading: true,
    }

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => data.slice(0,5))      
      .then(data => data.map(item => {
        return {
          id: item.id,
          title: item.title,
          isDone: item.comleted,
        }
      }))
      .then(data => data.length ? data : null)
      .then(data => setTimeout( () => {
        this.setState({
          tasks: data || this.state.tasks,
          isLoading: false,
        })
        }, 3000)
      )
      
    
  }

  updateState = tasks => {
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
    this.setState({
      tasks,
    })
  }

  addTask = title => {
    const newTask = {
      id: makeId(7),
      title,
      idDone: false,
    };
    this.state.tasks.push(newTask);
    this.updateState(this.state.tasks);
  }

  removeTask = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);    
    this.updateState(tasks);
  }

  toggleDone = id => { 
    const index = this.state.tasks.findIndex(task => task.id === id);
    if(index < 0 ) {
      return;
    }
    const tasks = this.state.tasks;
    tasks[index].isDone = !tasks[index].isDone;
    this.updateState(tasks);
  }

  render(){
    return (
      <div className='todo-list'>
        
        <AddTask addTask={this.addTask}/> 
        <h3>
          Tasks
        </h3>
        {this.state.isLoading ?
        <div style={styles.loading}>
          <div className="lds-dual-ring"></div> 
        </div>
          :
        (this.state.tasks.length ? 
          <ul>
            {this.state.tasks.map((task, index) => {
              return (
                <li key={index} className="list-item">
                  <ToDoItem task={task} vydalennja={this.removeTask} toggleDone={this.toggleDone}/>
                </li>            
              )
            })}
          </ul>  
        : 
        <h3 style={styles.info}>No Tasks</h3>)
        }
             
      </div>
    )
  }; 

}
