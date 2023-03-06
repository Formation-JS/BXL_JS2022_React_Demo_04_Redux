// Gestion des données par le store pour la categorie "people"

import { createReducer } from '@reduxjs/toolkit';
import { peopleAdd, peopleRemove } from '../actions/people.action';


// ↓ Etat initial des données
const initialState = {
    data: []
};

// ↓ Reducer : La fonction qui resoud les actions de la categorie "people"
//             Prend 2 parametres => Le state initial et un builder
const peopleReducer = createReducer(initialState, builder => {
    // Builder pour résoudre les cas possible
    builder
        .addCase(peopleAdd, (state, action) => {
            // Modification du "draft" fourni par "immer"
            state.data.push(action.payload);
        })
        .addCase(peopleRemove, (state, action) => {
            // Modification du "draft" fourni par "immer"
            const personId = action.payload;
            state.data = state.data.filter(p => p.id !== personId)
        });
});



export default peopleReducer;
