import Todo from '../../models/Todo';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList: React.FC<{ todos: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoListItem todo={todo} onRemoveTodo={props.onRemoveTodo}/>
      ))}
    </ul>
  );
};

export default TodoList;
