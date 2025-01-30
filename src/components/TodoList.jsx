import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul className="">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
