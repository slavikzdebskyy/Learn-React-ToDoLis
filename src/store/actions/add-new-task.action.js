import {removeLoaderAction, setLoaderAction} from "./loader.action";

const addNewTaskAction = title => dispatch => {
  dispatch(setLoaderAction());
  fetch('http://localhost:3000/todos/',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        isDone: false,
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'ADD_NEW_TASK', payload: data});
      dispatch(removeLoaderAction());
    })
    .catch(err => console.error(err));
};

export default addNewTaskAction;
