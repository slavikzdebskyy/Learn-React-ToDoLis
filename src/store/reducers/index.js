import { combineReducers } from "redux";
import todosReducer from "./todos.reducer";
import loaderReducer from "./loader.reducer";

export default combineReducers({
  todos: todosReducer,
  isLoading: loaderReducer,
});
