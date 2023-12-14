import {createSlice} from "@reduxjs/toolkit";

// Initial State

const initialState = 'english';

// Feature functions

// Slice

export const routerSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state = action.payload;
            return action.payload;
        }
    }
});

export default routerSlice.reducer;

export const {setLanguage} = routerSlice.actions;

// Selectors

export const selectLanguage = (state) => state.language;