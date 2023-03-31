import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    ICustomer,
    IApiResponse,
    IFetchCustomersArgs,
    IApiResponseWeb,
    ICustomerWeb,
    IFetchCustomerWebssArgs
} from '../../../helper/interfaces/api';
import { toast } from "react-hot-toast";

const API_URL = import.meta.env.VITE_URL_API;
const TOKEN = import.meta.env.VITE_TOKEN;

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

export const fetchCustomerWebs = createAsyncThunk<IApiResponseWeb, IFetchCustomerWebssArgs>(
    'api/fetchCustomerWebs',
    async ({ customerId }) => {
        const cachedResponse = sessionStorage.getItem(`customer_webs_${customerId}`);
        if (cachedResponse) {
            return JSON.parse(cachedResponse) as IApiResponseWeb;
        }

        const response = await fetch(`${API_URL}/api/customers/${customerId}/webs`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch Customer Webs');
        }

        const data = await response.json();
        sessionStorage.setItem(`customer_webs_${customerId}`, JSON.stringify(data));
        return data;
    }
) as any;

export const editCustomer = createAsyncThunk<ICustomer, { id: number, data: ICustomer }>(
    'api/editCustomer',
    async ({ id, data }) => {
        console.log("DATA", data)
        console.log("ID", id)
        const response = await fetch(`${API_URL}/api/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            console.log(`Failed to edit Customer #${id}: ${response.body}`);
            toast.error(`Failed to edit Customer #${id}`);
            throw new Error(`Failed to edit Customer #${id}`); 
        }
 
        const editedCustomer = await response.json();
        sessionStorage.removeItem(`customers_${id}`);
        toast.success(`Customer #${id} edited successfully`);
        return editedCustomer;
    }
) as any;

export const editWeb = createAsyncThunk<ICustomerWeb, { id: string, data: ICustomerWeb }>(
    'api/editWeb',
    async ({ id, data }) => {
        const response = await fetch(`${API_URL}/api/customers/webs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Failed to edit Web');
        }

        const editedWeb = await response.json();
        sessionStorage.removeItem(`customer_webs_${id}`);
        return editedWeb;
    }
) as any;

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        Customers: [] as ICustomer[],
        CustomerWebs: [] as ICustomerWeb[],
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
            state.error = action.error.message ?? 'Failed to fetch the information';
        });
        builder.addCase(fetchCustomerWebs.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchCustomerWebs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.CustomerWebs = action.payload.content;
        });
        builder.addCase(fetchCustomerWebs.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message ?? 'Failed to fetch the information';
        });
    },
});

export const apiReducer = apiSlice.reducer;