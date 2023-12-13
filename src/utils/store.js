import { configureStore } from "@reduxjs/toolkit";
import routerReducer from "../features/router/routerSlice";

export const store = configureStore({
    reducer: {
        router: routerReducer
    }
});
