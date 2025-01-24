import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [], // مقدار اولیه باید دارای یک کلید tasks باشد
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload); // اضافه کردن تسک به آرایه
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    editTask: (state, action) => {
      const { id, newTitle } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) task.title = newTitle;
    },
  },
});

export const { addTask, removeTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
