import { useContext } from "react";
import Todo from "./Components/AddTodo/Todo";
import Todolist from "./Components/Todolist/Todolist";
import { TodoContext } from "./Context/TodoProvider";
import "./App.css";

function App() {
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoValues = {
      title: event.target.title.value,
      description: event.target.description.value,
      id: Date.now(),
      isComplete: false,
    };

    if (todoValues.title.trim() === "" || todoValues.description.trim() === "")
      return alert("Input fields can not be empty!");

    dispatch({ type: "add", payload: todoValues });
  };

  return (
    <>
      <div className="app">
        <Todo handleSubmit={handleSubmit} key={Date.now()} />
        <Todolist />
      </div>
    </>
  );
}

export default App;
