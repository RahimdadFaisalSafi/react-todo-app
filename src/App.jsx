import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (

    
    <div className="flex min-h-screen w-full flex-col bg-gray-200 bg-gradient-to-bl from-[#0093E9] to-[#80D0C7]" >
      <div className="container mx-auto p-4">
        <header className="rounded-lg bg-white shadow-md p-1">
          <h3 className="my-4 bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-center text-3xl font-semibold text-transparent">Todo App</h3>
          <TodoForm onAddTodo={addTodo} />
        </header>

        <main className="bg-white p-4">

      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
        </main>

      
      </div>
    </div>
  );
}

export default App;