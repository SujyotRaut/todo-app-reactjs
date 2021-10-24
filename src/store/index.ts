import { configureStore, createSlice } from '@reduxjs/toolkit';
import Todo from '../models/Todo';

const initialState = {
  todos: Array<Todo>(),
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift({
        id: Date.now().toString(),
        text: action.payload,
        checked: false,
      });
    },
    removeTodo: (state, action) => {
      const i = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos.splice(i, 1);
    },
    toggleTodo: (state, action) => {
      const i = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[i].checked = action.payload.checked;
      if (action.payload.checked) {
        state.todos.push(state.todos.splice(i, 1)[0]);
      } else {
        state.todos.unshift(state.todos.splice(i, 1)[0]);
      }
    },
  },
});

const store = configureStore({ reducer: todoSlice.reducer });

export type State = typeof initialState;

export const actions = todoSlice.actions;

export default store;
