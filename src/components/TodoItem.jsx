const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
    const handleEdit = () => {
      const newText = prompt("Edit text: ", todo.text);
      if (newText !== null && newText.trim() !== "")
        onEdit(todo.id, newText.trim());
    };
    return (
      <li className="flex items-center justify-start border-t border-gray-300 py-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="size-4 cursor-pointer rounded border-slate-300  border-b-gray-500 transition-all checked:border-blue-600 checked:bg-blue-400 hover:shadow-md "
        />{" "}
        <span className="mx-4">{todo.text}</span>
        <div className="ml-auto flex space-x-2">
          <button onClick={handleEdit} className="bg-[#29B83A] px-4 py-2 text-white rounded-md hover:cursor-pointer">Edit</button>
          <button onClick={() => onDelete(todo.id)} className="bg-[#C850C0] rounded-md hover:cursor-pointer px-4 py-2 text-white">Delete</button>
        </div>
      </li>
    );
  };
  
  export default TodoItem;