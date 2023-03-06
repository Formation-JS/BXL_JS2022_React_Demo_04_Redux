import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './reducers/people.reduce';

const store = configureStore({
    reducer: {
        people: peopleReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;