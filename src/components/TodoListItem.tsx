import { MouseEventHandler } from 'react';
import Todo from '../models/Todo';
import store, { actions } from '../store';

const TodoListItem: React.FC<{ todo: Todo }> = (props) => {
  const toggleTodoHandler: MouseEventHandler<HTMLInputElement> = (event) => {
    store.dispatch(
      actions.toggleTodo({
        id: props.todo.id,
        checked: event.currentTarget.checked,
      })
    );
  };

  const removeTodoHandler: MouseEventHandler = () => {
    store.dispatch(actions.removeTodo(props.todo.id));
  };

  const style = props.todo.checked ? { textDecoration: 'line-through' } : {};

  return (
    <li style={style}>
      <input
        type='checkbox'
        name='todo-list-item'
        id='todo-list-item'
        onClick={toggleTodoHandler}
      />
      <label htmlFor='todo-list-item'>{props.todo.text}</label>
      <button onClick={removeTodoHandler}>x</button>
    </li>
  );
};

export default TodoListItem;
