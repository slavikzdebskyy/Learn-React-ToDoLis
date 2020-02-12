const removeTaskAction = id => dispatch => {
  return dispatch({type: 'REMOVE_TASK', payload: id});
};

export default  removeTaskAction;
