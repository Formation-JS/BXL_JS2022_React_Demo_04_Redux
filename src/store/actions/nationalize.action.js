const { createAction, createAsyncThunk } = require('@reduxjs/toolkit');
const { getNationalizeByName } = require('../../api/nationalize.api');

// Action creator async (=> Pour faire une requete AJAX !)
export const fetchResult = createAsyncThunk(
    'nationalize/fetchResult',
    async (firstname) => {
        const result = await getNationalizeByName(firstname);

        if(result.country.length === 0) {
            throw new Error(`Aucun resultat pour ${result.name}`)
        }

        return result;
    }
);

// Action creator "simple" ↓
export const saveResult = createAction('nationalize/saveResult');
export const removeResult = createAction('nationalize/removeResult');