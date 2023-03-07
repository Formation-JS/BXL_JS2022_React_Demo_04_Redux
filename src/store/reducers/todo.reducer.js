import { createReducer } from '@reduxjs/toolkit';
import { addTask, clearAllTask, finishTask, removeTask } from '../actions/todo.action';

const initialState = {
    tasks: []
};

const todoReducer = createReducer(initialState, builder => {
    builder
        .addCase(addTask, (state, action) => {
            const task = action.payload;

            state.tasks.push(task);
        })
        .addCase(finishTask, (state, action) => {
            const taskId = action.payload;

            const task = state.tasks.find(t => t.id === taskId);
            task.isDone = true;
        })
        .addCase(removeTask, (state, action) => {
            const taskId = action.payload;

            state.tasks = state.tasks.filter(t => t.id !== taskId);
        })
        .addCase(clearAllTask, (state) => {
            state.tasks = [];
        }); 
});

export default todoReducer;