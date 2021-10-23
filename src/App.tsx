import './App.css';
import NewTodoInput from './components/NewTodoInput/NewTodoInput';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import Todo from './models/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <NewTodoInput addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
