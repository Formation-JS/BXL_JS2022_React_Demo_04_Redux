// Pour la gestion de la liste de personnes : 
// - Ajouter une personne
// - Retirer une personne (via id)

import { nanoid } from 'nanoid';

// ↓ Les nom des actions
export const PEOPLE_ADD = 'people/add';
export const PEOPLE_REMOVE = 'people/remove';

// ↓ Les actions créators
export const peopleAdd = ({ firstname, lastname }) => ({
    type: PEOPLE_ADD,
    payload: {
        id: nanoid(),
        firstname,
        lastname
    }
});

export const peopleRemove = (personId) => ({
    type: PEOPLE_REMOVE,
    payload: personId
});