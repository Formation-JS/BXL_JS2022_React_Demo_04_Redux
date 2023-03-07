import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export const addTask = createAction('todo/addTask', (name) => ({
    payload: {
        id: nanoid(),
        name,
        createAt: new Date().toISOString(),
        isDone: false
    }
}));

export const finishTask = createAction('todo/finishTask');

export const removeTask = createAction('todo/removeTask');

export const clearAllTask = createAction('todo/clearAllTask');