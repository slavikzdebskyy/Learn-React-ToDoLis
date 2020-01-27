import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/Header';
import ToDoList from './components/To-do-list/To-do-list';
import AddTask from './components/Add-task/Add_task';

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="container">
         <Header />
         <AddTask />
         <ToDoList />
      </div>     
    );
  }
}

