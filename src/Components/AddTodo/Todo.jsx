import "./Todo.css";

export default function Todo({ handleSubmit }) {
  return (
    <div className="form-wrap">
      <form action="" onSubmit={handleSubmit}>
        <h2>Personalised Task Manager</h2>
        <input
          type="text"
          placeholder="Please enter task title"
          name="title"
          maxLength={30}
        />

        <input
          type="text"
          placeholder="Please enter task description"
          name="description"
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
