import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../../data/items";

const dataSlice = createSlice({
    name: "products",
    initialState: {
        data: items
    },
    reducers: {
        productsData: (state, action) => state
    }
})

export default dataSlice.reducer

export const { productsData } = dataSlice.actions;