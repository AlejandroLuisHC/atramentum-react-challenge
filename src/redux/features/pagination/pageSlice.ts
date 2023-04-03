// create redux/toolkit slice to store current page number
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 0,
        rows: parseInt(localStorage.getItem('rows') || '10'),
    },
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setRows: (state, action: PayloadAction<number>) => {
            state.rows = action.payload;
            localStorage.setItem('rows', action.payload.toString());
        }
    },
});

export const { 
    setPage,
    setRows,
} = pageSlice.actions;

export const pageReducer = pageSlice.reducer;