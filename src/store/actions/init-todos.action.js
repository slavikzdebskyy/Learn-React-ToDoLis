import {removeLoaderAction, setLoaderAction} from './loader.action';

const initTasksAction = () => dispatch => {
  dispatch(setLoaderAction());
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => data.slice(0, 5))
    .then(data => data.map(item => {
      return {
        id: item.id,
        title: item.title,
        isDone: item.completed,
      }
    }))
    .then(data => data.length ? data : [])
    .then(todos => {
      dispatch({type: 'INIT_TODOS', payload: todos});
      dispatch(removeLoaderAction());
    }
    );
}

export default initTasksAction;
