export const addNewTaskAction = title => dispatch => {
  return dispatch({type: 'ADD_TASK', payload: title})
};

export const toggleTaskAction = id => dispatch => {
  return dispatch({type: 'TOGGLE_TASK', payload: id})
};

export const removeTaskAction = id => dispatch => {
  return dispatch({type: 'REMOVE_TASK', payload: id})
};

export const setLoader = () => dispatch => {
  return dispatch({type: 'SET_LOADER'})
};

export const removeLoader = () => dispatch => {
  return dispatch({type: 'REMOVE_LOADER'})
};