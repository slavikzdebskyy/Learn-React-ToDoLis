const addNewTaskAction = title => dispatch => {
  return dispatch({type: 'ADD_NEW_TASK', payload: title});
};

export default addNewTaskAction;
