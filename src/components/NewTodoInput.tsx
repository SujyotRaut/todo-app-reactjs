import { FormEventHandler, useRef } from 'react';
import store, { actions } from '../store';

const NewTodoInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current!.value.trim();
    if (inputValue) {
      inputRef.current!.value = '';
      store.dispatch(actions.addTodo(inputValue));
    }
  };

  return (
    <form>
      <input type="text" onSubmit={submitHandler} ref={inputRef} />
      <button onClick={submitHandler}>Add</button>
    </form>
  );
};

export default NewTodoInput;
