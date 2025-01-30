import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    onAddTodo(trimmedInput);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};
export default TodoForm;
