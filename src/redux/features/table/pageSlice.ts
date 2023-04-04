// create redux/toolkit slice to store current page number
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItemsTable } from '../../../helper/interfaces/dashboard';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 0,
        rows: parseInt(localStorage.getItem('rows') || '10'),
        items: JSON.parse(localStorage.getItem('items') || '{"contactName":true,"phone1":true,"phone2":true,"email":true,"createdDate":false,"sectorId":false,"customerCategoryId":false}')
    },
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setRows: (state, action: PayloadAction<number>) => {
            state.rows = action.payload;
            localStorage.setItem('rows', action.payload.toString());
        },
        setItems: (state, action: PayloadAction<IItemsTable>) => {
            state.items = action.payload;
            localStorage.setItem('items', JSON.stringify(action.payload));
        }
    },
});

export const { 
    setPage,
    setRows,
    setItems
} = pageSlice.actions;

export const pageReducer = pageSlice.reducer;