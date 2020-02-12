const LS_KEY = 'TASKS';

const makeId = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createNeyTask = (title) => {
  return {
    id: makeId(7),
    title,
    isDone: false,
  }
};

const updateLS = todos => localStorage.setItem(LS_KEY, JSON.stringify(todos));

const todosReducer = (todos = [], action) => {
  switch (action.type) {

    case 'ADD_NEW_TASK':
      const newTodos = [...todos, createNeyTask(action.payload)];
      updateLS(newTodos);
      return newTodos;

    case 'REMOVE_TASK':
      const newTodos1 = [...todos.filter(todo => todo.id !== action.payload)];
      updateLS(newTodos1);
      return newTodos1;

    case 'TOGGLE_TASK':
      const index = todos.findIndex(todo => todo.id === action.payload);
      todos[index].isDone = !todos[index].isDone;
      updateLS(todos);
      return [...todos];

    case 'INIT_TODOS':
      updateLS(action.payload);
      return [...action.payload];

    default:
      return todos;
  }
};

export default todosReducer;
