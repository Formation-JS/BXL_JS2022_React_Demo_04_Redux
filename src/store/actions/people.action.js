// Pour la gestion de la liste de personnes : 
// - Ajouter une personne
// - Retirer une personne (via id)

import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Il n'est plus necessaire de définir le nom des actions 
// sous forme de constante => Les action creators du toolkit
// peuvent directement être utilisé =)


// ↓ Les actions créators

export const peopleAdd = createAction('people/add', (({ firstname, lastname }) => ({
    payload: {
        id: nanoid(),
        firstname,
        lastname
    }
})));


export const peopleRemove = createAction('people/remove');