// Tout en un => Action + Reducer
// ******************************

import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Initial state du slice
const initialState = {
    tasks: []
}

// Création du slice, celui-ci défini (via un objet) : 
//  - Les données initiales
//  - Préfixe de "domaine" des actions
//  - La définition des actions avec le traitement
const todoSlice = createSlice({
    name: 'todo',    // action type : "todo/...",
    initialState,
    reducers: {     // les actions + le traitement
        addTask: {
            // ↓ Permet de customisé l'action (pour de la génération aleatoire par exemple)
            prepare: (name) => ({
                payload: {
                    id: nanoid(),
                    name,
                    createAt: new Date().toISOString(),
                    isDone: false
                }
            }),
            // ↓ Définition du comportement du reducer de cette action
            reducer: (state, action) => {
                const task = action.payload;
                state.tasks.push(task);
            }
        },
        finishTask(state, action) {
            const taskId = action.payload;
            const task = state.tasks.find(t => t.id === taskId);
            task.isDone = true;
        },
        removeTask(state, action) {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(t => t.id !== taskId);
        },
        clearAllTask(state) {
            state.tasks = []
        }
    }
})

// Exportation des actions
export const { addTask, finishTask, removeTask, clearAllTask } = todoSlice.actions;

// Exportation par defaut du reducer
export default todoSlice.reducer;