import { createSlice } from "@reduxjs/toolkit";
import Routes, {RouteComponent} from "../../constants/Routes.constants";

// Initial State

const initialState = {
    page: 'home',
    args: []
};

// Feature functions

/**
 * Get the route object reading the window URL
 * @returns {Object} Route
 */
export const getRouteFromURL = () => {
    const windowURL = window.location.href;
    const origin = window.location.origin;

    const parsedURL = windowURL.replace(`${origin}/`, '').replace(origin, '').replace(/[^a-zA-Z0-9/]/g, '');
    const routeArgs = parsedURL.split('/');
    let routeName = routeArgs.shift();

    if (routeName.length === 0)
        routeName = Routes.home;

    return Routes[routeName] ? {
        page: routeName,
        args: routeArgs
    } : {
        page: Routes.notfound,
        args: []
    };
}

/**
 * Update the new page URL with page name
 * @param {String} page the new page string 
 */
export const updateRouteInURL = (route) => {
    window.history.replaceState(route.page, '', `${window.location.origin}/${route.page}/${route.args.join('/')}`)
}

// Slice

export const routerSlice = createSlice({
    name: 'router',
    initialState: getRouteFromURL() || initialState,
    reducers: {
        setRoute: (state, action) => {
            const newRoute = action.payload;
            state = newRoute;
            updateRouteInURL(newRoute);
        },
        setRouteString: (state, action) => {
            const routeString = action.payload;
            const routeArgs = routeString.split('/');
            const routePage = routeArgs.shift();

            const newRoute = {
                page: routePage,
                args: routeArgs
            };
            state = newRoute;

            updateRouteInURL(newRoute);
        }
    }
})

export default routerSlice.reducer;

export const { setRoute, setRouteString } = routerSlice.actions; 

// Selectors

/**
 * Select the route object from store
 * @param {*} state the redux state
 * @returns {String} returns the route object
 */
export const selectRoute = (state) => {
    return state.router;
}

/**
 * Select the page name from store
 * @param {*} state the redux state
 * @returns {String} returns the page name
 */
export const selectPage = (state) => {
    return state.router.page
};

/**
 * Select the page route args from store
 * @param {*} state the redux state
 * @returns {String[]} returns the page route args
 */
export const selectRouteArgs = (state) => {
    return state.router.args
};