import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice;