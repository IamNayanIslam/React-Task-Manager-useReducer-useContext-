export const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "edit":
      return {
        todos: [],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    default:
      return state;
  }
};
