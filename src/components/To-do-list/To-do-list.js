import React, { Component } from "react";
import ToDoItem from '../To-do-item/To-do-item';
import './To-do-list.scss';

const LS_KEY = 'TASKS';

export default class ToDoList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
  }

  tasks = JSON.parse(localStorage.getItem(LS_KEY)) || [];

  render() {
    return(
      <div className='todo-list'>
        <h3>
          Tasks
        </h3>
        <ul>
          {this.tasks.map((task, index) => {
            return (
              <li key={index} className="list-item">
                <ToDoItem task={task}/>
              </li>            
            )
        })}
        </ul>
       
      </div>
    );
  }
}
