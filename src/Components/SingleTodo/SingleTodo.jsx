import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import "./SingleTodo.css";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoProvider";

export default function SingleTodo({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const handleToggleComplete = () => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id });
  };

  return (
    <div className="singleTodo">
      <div className="title">
        <IoCheckmarkDoneCircleSharp
          onClick={handleToggleComplete}
          className={todo.isComplete ? "complete" : "done"}
        />
        <h4>{todo.title}</h4>
      </div>
      <div className="description">
        <p>{todo.description}</p>
      </div>

      <div className="du">
        <FaEdit className="update" />
        <MdDeleteForever
          className="delete"
          onClick={() => {
            dispatch({ type: "DELETE_TODO", payload: todo.id });
          }}
        />
      </div>
    </div>
  );
}
