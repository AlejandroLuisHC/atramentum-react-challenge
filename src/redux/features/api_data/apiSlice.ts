import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICustomer, IApiResponse } from '../../../helper/interfaces/api';

const API_URL = import.meta.env.VITE_URL_API;
const TOKEN = import.meta.env.VITE_TOKEN;

interface IFetchCustomersArgs {
    pageNumber?: number;
}

export const fetchCustomers = createAsyncThunk<IApiResponse, IFetchCustomersArgs>(
    'api/fetchCustomers',
    async ({ pageNumber = 0 }) => {
        const cachedResponse = sessionStorage.getItem(`customers_${pageNumber}`);
        if (cachedResponse) {
            return JSON.parse(cachedResponse) as IApiResponse;
        }

        const response = await fetch(`${API_URL}/api/customers?pageNumber=${pageNumber}&pageSize=5`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch Customers');
        }

        const data = await response.json();
        sessionStorage.setItem(`customers_${pageNumber}`, JSON.stringify(data));
        return data;
    }
) as any;

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        Customers: [] as ICustomer[],
        totalPages: 0,
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
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(fetchCustomers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? 'Failed to fetch Customers';
        });
    },
});

export const apiReducer = apiSlice.reducer;