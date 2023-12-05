import { useContext } from "react";
import { TodoContext } from "../../Context/TodoProvider";
import SingleTodo from "../SingleTodo/SingleTodo";
import "./Todolist.css";

export default function Todolist() {
  const { state } = useContext(TodoContext);
  return (
    <>
      <div className="todo-container">
        {state.todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}
