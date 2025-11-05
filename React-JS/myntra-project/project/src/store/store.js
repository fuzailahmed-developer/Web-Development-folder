import { configureStore } from "@reduxjs/toolkit";
import  productsData  from "./reducers/dataSlice/dataSlice";

export const store = configureStore({
    reducer : {
        products : productsData
    }
})