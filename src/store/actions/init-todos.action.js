import {removeLoaderAction, setLoaderAction} from './loader.action';

const initTasksAction = () => dispatch => {
  dispatch(setLoaderAction());
  fetch('http://localhost:3000/todos/')
    .then(response => response.json())
    .then(data => data.length ? data : [])
    .then(todos => {
      dispatch({type: 'INIT_TODOS', payload: todos});
      dispatch(removeLoaderAction());
    }
    );
}

export default initTasksAction;
