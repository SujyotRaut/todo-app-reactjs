import Todo from '../../models/Todo';
import './TodoListItem.css';

const TodoListItem: React.FC<{
  todo: Todo;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        name="todo-list-item"
        checked={props.todo.checked}
      />
      <label htmlFor="todo-list-item">{props.todo.text}</label>
      <button onClick={() => props.onRemoveTodo(props.todo.id)}>x</button>
    </div>
  );
};

export default TodoListItem;
