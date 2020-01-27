import React, { Component } from 'react';
import './Add-task.scss';

const  makeid = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const LS_KEY = 'TASKS';

export default class AddTask extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  add = () => {
    const tasks = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    const newTask = {
      id: makeid(7),
      title: this.refs.newTask.value,
      idDone: false,
    };
    tasks.push(newTask);
    localStorage.setItem(LS_KEY, JSON.stringify(tasks));
    this.refs.newTask.value = '';
  }

  render() {
    return(
      <div className="add-task-cont">
        <input 
          ref="newTask"
          className="input"/>
        <button 
          className="add-btn"
          onClick={() => this.add()}>
          Add
        </button>
      </div>
    );
  }
}
