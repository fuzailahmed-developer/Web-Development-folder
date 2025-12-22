import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../features/CartSlice.jsx'
import ProductSlice from '../features/ProductSlice.jsx'
export const store = configureStore({
    reducer : {
        'cart' : CartSlice,
        'products' : ProductSlice
    }
})