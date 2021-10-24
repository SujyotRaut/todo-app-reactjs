import { useSelector } from 'react-redux';
import { State } from '../store';
import Todo from '../models/Todo';
import TodoListItem from './TodoListItem';

const TodoList: React.FC = (props) => {
  const todos = useSelector<State>((state) => state.todos) as Todo[];
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
