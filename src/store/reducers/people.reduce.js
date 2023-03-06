// Gestion des données par le store pour la categorie "people"

import { createReducer } from '@reduxjs/toolkit';
import { peopleAdd, peopleRemove, peopleReset } from '../actions/people.action';


// ↓ Etat initial des données
const initialState = {
    data: [],
    count: 0
};

// ↓ Reducer : La fonction qui resoud les actions de la categorie "people"
//             Prend 2 parametres => Le state initial et un builder
const peopleReducer = createReducer(initialState, builder => {
    // Builder pour résoudre les cas possible
    builder
        .addCase(peopleAdd, (state, action) => {
            // Modification du "draft" fourni par "immer"
            state.data.push(action.payload);
            state.count++;
        })
        .addCase(peopleRemove, (state, action) => {
            // Modification du "draft" fourni par "immer"
            const personId = action.payload;
            state.data = state.data.filter(p => p.id !== personId)
            state.count = state.data.length;
        })
        .addCase(peopleReset, (state, action) => {
            state.data = [];
            state.count = 0;
        });
});



export default peopleReducer;
