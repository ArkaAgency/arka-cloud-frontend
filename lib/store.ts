import { configureStore } from "@reduxjs/toolkit";
import routerReducer from "../features/router/routerSlice";
import languageReducer from "../src/features/language/languageSlice";

const store = configureStore({
    reducer: {
        router: routerReducer,
        language: languageReducer
    }
});

export default store;
