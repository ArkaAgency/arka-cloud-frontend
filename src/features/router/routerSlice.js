import { createSlice } from "@reduxjs/toolkit";

// Feature functions

/**
 * Get the page name string reading the window URL
 * @returns {String} pageName
 */
export const getPageNameFromURL = () => {
    const windowURL = window.location.href;
    const origin = window.location.origin;
    const pageName = windowURL.replace(`${origin}/`, '').replace(origin, '');
    return pageName.length === 0 ? 'Home' : pageName;
}

/**
 * Update the new page URL with page name
 * @param {String} page the new page string 
 */
export const updatePageInURL = (page) => {
    window.history.replaceState(page, '', `${window.location.origin}/${page}`)
}

// Initial State

const initialState = getPageNameFromURL() || 'Home';

// Slice

export const routerSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            const newPage = action.payload;
            state = newPage;
            updatePageInURL(newPage);
        }
    }
})

export default routerSlice.reducer;

// Selectors

/**
 * Select the page from store
 * @param {*} state the redux state
 * @returns {String} returns the page name
 */
export const selectPage = (state) => {
    return state.router
};