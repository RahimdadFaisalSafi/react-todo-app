const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {

    const handleEdit = () => {
        const newText = prompt('Edit text: ', todo.text)
        if (newText !== null && newText.trim() !== '')
            onEdit(todo.id,newText.trim() )
    }
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
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
      
    </li>
  );
};
export default TodoItem
