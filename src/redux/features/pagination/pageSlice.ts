// create redux/toolkit slice to store current page number
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 0,
    },
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        }
    },
});

export const { setPage } = pageSlice.actions;

export const pageReducer = pageSlice.reducer;