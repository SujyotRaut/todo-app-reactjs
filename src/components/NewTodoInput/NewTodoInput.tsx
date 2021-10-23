import React, { MouseEventHandler, useRef } from 'react';
import './NewTodoInput.css';

const NewTodoInput: React.FC<{ addTodoHandler: (text: string) => void }> = (
  props
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const clickHandler: MouseEventHandler = () => {
    const inputValue = inputRef.current!.value.trim();
    if (inputValue) {
      inputRef.current!.value = '';
      props.addTodoHandler(inputValue);
    }
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};

export default NewTodoInput;
