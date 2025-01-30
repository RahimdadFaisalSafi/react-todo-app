import { useState } from 'react'
import TodoForm from './components/TodoForms'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <TodoForm />
   </div>
  )
}

export default App
