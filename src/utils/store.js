import { configureStore } from "@reduxjs/toolkit";
import routerReducer from "../features/router/routerSlice";

const store = configureStore({
    reducer: {
        router: routerReducer
    }
});

export default store;
