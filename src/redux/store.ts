import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./features/api_data/apiSlice";
import { pageReducer } from "./features/pagination/pageSlice";

export const store = configureStore({
    reducer: {
        api: apiReducer,
        page: pageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;