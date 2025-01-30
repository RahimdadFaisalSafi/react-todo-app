const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />{" "}
      <span>{todo.text}</span>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      
    </li>
  );
};
export default TodoItem
