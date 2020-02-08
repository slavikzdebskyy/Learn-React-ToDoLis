import { combineReducers } from 'redux';

const  makeId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const LS_KEY = 'TASKS';

const getFromLS = () => JSON.parse(localStorage.getItem(LS_KEY));
const setInLS = (data) => localStorage.setItem(LS_KEY, JSON.stringify(data));

const initState = getFromLS() || [];

const toDoListReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_TASK': 
      const addtaskState = [
        ...state,
        {
          id: makeId(7),
          title: action.payload,
          isDone: false,
        }
      ];
      setInLS(addtaskState);
      return addtaskState;
      
    case 'TOGGLE_TASK': 
      const toggleState = state.map(task => 
        task.id === action.payload ? 
        {
          ...task,
          isDone: !task.isDone
        } 
        : task);
      setInLS(toggleState);
      return toggleState;

    case 'REMOVE_TASK':
      const removeTaskState = state.filter(task => task.id !== action.payload);
      setInLS(removeTaskState);
      return removeTaskState;

    default:
      return state;
  }
}

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