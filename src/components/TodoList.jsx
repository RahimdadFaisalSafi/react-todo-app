import TodoItem from "./TodoItem"
const TodoList = ({todos, onToggle, onDelete, onEdite}) => {
    return (
        <ul>
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdite}
                    />
                ))
            }
        </ul>
    )
}
export default TodoList;