/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { todoReducer } from "../Reducer/TodoReducer";

export const TodoContext = createContext();
const INITIAL_TODO_STATE = {
  todos: [],
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_TODO_STATE);
  const values = { state, dispatch };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
