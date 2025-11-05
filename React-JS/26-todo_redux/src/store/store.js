import { configureStore } from "@reduxjs/toolkit";
import todoApp from "../store/features/todoApp"
export const store = configureStore({
    reducer : {
        todo : todoApp
    }
})