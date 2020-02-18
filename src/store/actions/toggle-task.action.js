import {removeLoaderAction, setLoaderAction} from "./loader.action";

const toggleTaskAction = task => dispatch => {
  dispatch(setLoaderAction());
  fetch(`http://localhost:3000/todos/${task.id}`,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: task.title,
        isDone: !task.isDone,
        id: task.id,
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'TOGGLE_TASK', payload: data});
      dispatch(removeLoaderAction());
    })
    .catch(err => console.error(err));
};

export default  toggleTaskAction;
