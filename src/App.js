import React from 'react';
import './App.scss';

import Context from './components/Contex';
import Header from './components/header/Header';
import ToDoList from './components/To-do-list/To-do-list';

export default class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  } 
  
  render() {
    return ( 
      <Context.Provider>
        <div className="container">
          <Header />
          <ToDoList />
        </div> 
      </Context.Provider>            
    );
  }
}

