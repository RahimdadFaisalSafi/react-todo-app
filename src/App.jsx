import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((todo) => todo.id === id? {...todo, text: newText}: todo))
  }
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((id) => 
    todo.id === id ? {...todo, done: !todo.done}: todo))
  }



  return (
    <div>
     <TodoForm onAddTodo={addTodo}/>
     
    </div>
  );
}

export default App;
