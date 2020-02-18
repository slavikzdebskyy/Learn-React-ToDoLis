const todosReducer = (todos = [], action) => {
  switch (action.type) {

    case 'ADD_NEW_TASK':
      return [...todos, action.payload];

    case 'REMOVE_TASK':
      return [...todos.filter(todo => todo.id !== action.payload)];

    case 'TOGGLE_TASK':
      const index = todos.findIndex(todo => todo.id === action.payload.id);
      todos[index] = action.payload;
      return [...todos];

    case 'INIT_TODOS':
      return [...action.payload];

    default:
      return todos;
  }
};

export default todosReducer;
