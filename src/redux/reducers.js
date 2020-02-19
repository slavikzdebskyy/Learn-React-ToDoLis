import { combineReducers } from 'redux';






const initState = [];

const toDoListReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return [ ...state, action.payload ];
      
    case 'TOGGLE_TASK': 
      return state.map(task =>
        task.id === action.payload.id ?
        {
          ...task,
          isDone: !task.isDone
        } 
        : task);

    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);

    case 'INIT_TASKS':
      return action.payload;

    default:
      return state;
  }
};

const isLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case 'SET_LOADER':
      return true;

    case 'REMOVE_LOADER':
      return false;

    default: 
      return false;
  }
}

export default combineReducers ({
  toDoList: toDoListReducer,
  isLoading: isLoadingReducer,
})
