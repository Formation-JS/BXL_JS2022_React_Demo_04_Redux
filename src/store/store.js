import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './reducers/people.reduce';
import todoReducer from './actions/todo.action';

const store = configureStore({
    reducer: {
        people: peopleReducer,
        todo: todoReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;