/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../Reducer/TodoReducer";

export const TodoContext = createContext();
const INITIAL_TODO_STATE = {
  todos: [],
};
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem("state")) || INITIAL_TODO_STATE
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  const values = { state, dispatch };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
