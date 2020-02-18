import {removeLoaderAction, setLoaderAction} from "./loader.action";

const removeTaskAction = id => dispatch => {
  dispatch(setLoaderAction());
  fetch(`http://localhost:3000/todos/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch({type: 'REMOVE_TASK', payload: id});
      dispatch(removeLoaderAction());
    })
    .catch(err => console.error(err));
};

export default  removeTaskAction;
