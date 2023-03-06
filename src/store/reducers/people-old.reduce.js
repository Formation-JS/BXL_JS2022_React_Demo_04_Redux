// Gestion des données par le store pour la categorie "people"

import { PEOPLE_ADD, PEOPLE_REMOVE } from '../actions/people-old.action';

// ↓ Etat initial des données
const initialState = {
    data: []
};

// ↓ Reducer : La fonction qui resoud les actions de la categorie "people"
//             Prend 2 parametres => Le state et l'action
const peopleReducer = (state = initialState, action) => {

    // Résolution des actions
    switch(action.type) {
        case PEOPLE_ADD: 
            // Envoi d'un copie des données modifié
            return {
                ...state, // ← Evite de perde des données
                data: [...state.data, action.payload]
            };
        case PEOPLE_REMOVE:
            const personId = action.payload;
            // Envoi d'un copie des données modifié
            return {
                ...state,
                data: state.data.filter(p => p.id !== personId)
            };
        default: 
            return state;
    }
}

export default peopleReducer;
