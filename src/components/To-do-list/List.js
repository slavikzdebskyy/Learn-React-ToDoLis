import React from "react";

import ToDoItem from '../To-do-item/To-do-item';
import './To-do-list.scss';

const styles = {
  textAlign: 'center'
};

const List = ({tasks}) => (
  tasks.length ?
    <ul>
      {tasks.map((task, index) => {
        return (
          <li
            key={index}
            className="list-item">
            <ToDoItem task={task}/>
          </li>
        )
      })}
    </ul>
    :
    <h3 style={styles}>No Tasks</h3>
);

export default List;
