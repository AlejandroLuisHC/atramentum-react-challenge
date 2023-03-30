import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICustomer, IApiResponse } from '../../../helper/interfaces/api';

const API_URL = import.meta.env.VITE_URL_API;
const TOKEN = import.meta.env.VITE_TOKEN;

export const fetchCustomers = createAsyncThunk<IApiResponse>(
    'api/fetchCustomers',
    async () => {
        const cachedResponse = sessionStorage.getItem('customers');
        if (cachedResponse) {
            return JSON.parse(cachedResponse) as IApiResponse;
        }

        const response = await fetch(`${API_URL}/api/customers`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch Customers');
        }

        const data = await response.json();
        sessionStorage.setItem('customers', JSON.stringify(data));
        return data;
    }
) as any;

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        Customers: [] as ICustomer[],
        isLoading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCustomers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchCustomers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.Customers = action.payload.content;
        });
        builder.addCase(fetchCustomers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? 'Failed to fetch Customers';
        });
    },
});

export const apiReducer = apiSlice.reducer;