import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    onAddTodo(trimmedInput);
    setInput("");
  };

  return (
    <div className="mt-4 flex justify-between">
      <input
        type="text"
        placeholder="Add new Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mr-3 w-full border p-2 rounded-md "
      />
      <button onClick={handleSubmit} className="bg-[#0093E9] px-4 py-2 font-semibold text-white hover:cursor-pointer rounded-md">Save</button>
    </div>
  );
};

export default TodoForm;