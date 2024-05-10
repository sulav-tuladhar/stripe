// import { httpClient } from "@/utils/httpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
// import { fetchImages } from "./apis";

export interface navigationState {
    isOpen: boolean,
}

const initialState: navigationState = {
    isOpen: false,
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        toggleSideBar: (state) => {
            state.isOpen = !state.isOpen
        }
    },
    extraReducers: (builder) => {
    }
});

export const { toggleSideBar } = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;