import React, { useState } from 'react';
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodoForm'

const initialTodos: Todo[] = [
  {
    text: 'Practice typescript with React',
    completed: false
  },
  {
    text: 'Complete bootcamp',
    completed: false
  }
]

function App() {

  let [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed 
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo = (text: string) => {
    const newTodo = { text: text, completed: false}
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
