const toggleTaskAction = id => dispatch => {
  return dispatch({type: 'TOGGLE_TASK', payload: id});
};

export default  toggleTaskAction;
