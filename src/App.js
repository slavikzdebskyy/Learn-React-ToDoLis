import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import ToDoList from './components/To-do-list/To-do-list';
import {Provider} from "react-redux";
import store from "./store/create.store";

export default class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  } 
  
  render() {
    return (
        <Provider store={store}>
          <div className="container">
            <Header />
            <ToDoList />
          </div>
        </Provider>
    );
  }
}

