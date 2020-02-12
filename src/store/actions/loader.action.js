export const setLoaderAction = () => dispatch => {
  return dispatch({type: 'SET_LOADER'});
};

export const removeLoaderAction = () => dispatch => {
  return dispatch({type: 'REMOVE_LOADER'});
};
