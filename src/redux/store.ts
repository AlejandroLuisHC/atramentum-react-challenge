import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./features/api_data/apiSlice";

export const store = configureStore({
    reducer: {
        api: apiReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;