import './App.css';
import NewTodoInput from './components/NewTodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <NewTodoInput />
      <TodoList />
    </div>
  );
}

export default App;
