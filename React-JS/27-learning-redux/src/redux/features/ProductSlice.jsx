import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// api calling in redux using thunk middle ware
export const fetchProducts = createAsyncThunk('products', async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products; 
});

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: undefined,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload; 
                state.status = "success";
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export default ProductSlice.reducer;
