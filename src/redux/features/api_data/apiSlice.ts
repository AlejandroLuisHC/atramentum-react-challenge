import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    ICustomer,
    IApiResponse,
    IFetchCustomersArgs,
    IApiResponseWeb,
    ICustomerWeb,
    IFetchCustomerWebssArgs,
    IEditCustomersArgs
} from '../../../helper/interfaces/api';
import { toast } from "react-hot-toast";
import { API_URL, getToken } from '../../../config/config'

// Function to GET all customers
export const fetchCustomers = createAsyncThunk<IApiResponse, IFetchCustomersArgs>(
    'api/fetchCustomers',
    async ({ pageNumber = 0, rows = 10 }) => {
        const TOKEN = await getToken();

        const cachedResponse = sessionStorage.getItem(`customers_${pageNumber}_rows_${rows}`);
        if (cachedResponse) {
            return JSON.parse(cachedResponse) as IApiResponse;
        }

        const response = await fetch(`${API_URL}/api/customers?pageNumber=${pageNumber}&pageSize=${rows}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch Customers');
        }

        const data = await response.json();
        sessionStorage.setItem(`customers_${pageNumber}_rows_${rows}`, JSON.stringify(data));
        return data;
    }
) as any;

// Function to GET all customer webs
export const fetchCustomerWebs = createAsyncThunk<IApiResponseWeb, IFetchCustomerWebssArgs>(
    'api/fetchCustomerWebs',
    async ({ customerId }) => {
        const TOKEN = await getToken();

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


// Function to edit customer
export const editCustomer = createAsyncThunk<ICustomer, IEditCustomersArgs>(
    'api/editCustomer',
    async ({ id, data, page, rows }) => {
        const TOKEN = await getToken();

        const response = await fetch(`${API_URL}/api/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const responseText = await response.text();
            toast.error(`Failed to edit Customer #${id}`);
            throw new Error(`Failed to edit Customer #${id}: ${responseText}`); 
        }
 
        const editedCustomer = await response.json();
        sessionStorage.removeItem(`customers_${page}_rows_${rows}`);
        toast.success(`Customer #${id} edited successfully`);
        return editedCustomer;
    }
) as any;

// Function to edit a customer web
export const editWeb = createAsyncThunk<ICustomerWeb, { id: string, data: ICustomerWeb }>(
    'api/editWeb',
    async ({ id, data }) => {
        const TOKEN = await getToken();
        
        const response = await fetch(`${API_URL}/api/customers/webs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const responseText = await response.text();
            toast.error(`Failed to edit Web #${id}`);
            throw new Error(`Failed to edit Web #${id}: ${responseText}`); 
        }
        
        const editedWeb = await response.json();
        sessionStorage.removeItem(`customer_webs_${data.customerId}`);
        toast.success(`Web #${id} edited successfully`);
        return editedWeb;
    }
) as any;

// Slice to store all the data from the API
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