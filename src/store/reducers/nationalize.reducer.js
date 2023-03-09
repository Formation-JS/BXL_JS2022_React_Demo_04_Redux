import { createReducer } from '@reduxjs/toolkit';
import { fetchResult, removeResult, saveResult } from '../actions/nationalize.action';

// Initial state for "nationalize"
const initialState = {
    savedResults: [],
    result: null,
    isLoading: false,
    error: null
}

// Reducer pour "nationalize"
const nationalizeReducer = createReducer(initialState, builder => {
    builder
        .addCase(fetchResult.pending, (state, action) => {
            state.isLoading = true;
            state.result = null;
            state.error = null;
        })
        .addCase(fetchResult.fulfilled, (state, action) => {
            const data = {...action.payload};
            data.name = data.name.toUpperCase()

            state.isLoading = false;
            state.result = data;
        })
        .addCase(fetchResult.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
        .addCase(saveResult, (state, action) => {
            // Test de garde pour ne pas ajouter 2 fois le meme nom
            if(!state.result || state.savedResults.find(res => res.name === state.result.name)){
                return;
            }

            state.savedResults.push(state.result);
        })
        .addCase(removeResult, (state, action) => {
            state.savedResults = state.savedResults.filter(res => res.name !== action.payload);
        })
})

export default nationalizeReducer;