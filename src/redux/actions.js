export const totosApi = () => {
  return {
    get: () => fetch('http://localhost:3000/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(data => data.json()),

    post: (data = {}) => fetch('http://localhost:3000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(data => data.json()),

    put: (id) => fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(data => data.json()),

    remove: (id) => fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(data => data.json()),
  }
};

export const initTasksAction = () => dispatch => {
  dispatch(setLoader());
  totosApi().get()
    .then(tasks => dispatch({type: 'INIT_TASKS', payload: tasks}))
    .then(() => dispatch(removeLoader()))
    .catch(error => console.error(error));
};


export const addNewTaskAction = task => dispatch => {
    dispatch(setLoader());
  totosApi().post(task)
      .then(task => dispatch({type: 'ADD_TASK', payload: task}))
      .then(() => dispatch(removeLoader()))
      .catch(error => console.error(error));
};

export const toggleTaskAction = id => dispatch => {
  dispatch(setLoader());
  totosApi().put(id)
    .then(task => dispatch({type: 'TOGGLE_TASK', payload: task}))
    .then(() => dispatch(removeLoader()))
    .catch(error => console.error(error));
};

export const removeTaskAction = id => dispatch => {
  dispatch(setLoader());
  totosApi().remove(id)
    .then(() => dispatch({type: 'REMOVE_TASK', payload: id}))
    .then(() => dispatch(removeLoader()))
    .catch(error => console.error(error));
};

export const setLoader = () => dispatch => {
  return dispatch({type: 'SET_LOADER'})
};

export const removeLoader = () => dispatch => {
  return dispatch({type: 'REMOVE_LOADER'})
};
