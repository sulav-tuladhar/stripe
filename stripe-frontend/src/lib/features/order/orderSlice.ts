// import { httpClient } from "@/utils/httpClient";
import { products } from "@/utils/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
// import { fetchImages } from "./apis";

export interface ProductsInterface {
    id: number;
    title: string;
    rating: number;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

export interface orderState {
    products: ProductsInterface[],
}

const initialState: orderState = {
    products: [],
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            var productId = action.payload.id;
            let productIndex = state.products.findIndex(product => product.id === productId);
            console.log(productIndex)

            if (productIndex !== -1) {
                // Product already exists, update the quantity
                state.products[productIndex].quantity += 1 as any;
            } else {
                // Product doesn't exist, add it to the cart
                const product = { ...action.payload, quantity: 1 }
                state.products.push(product);
            }
            // state.products.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
    }
});

export const { addItem, deleteItem } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;