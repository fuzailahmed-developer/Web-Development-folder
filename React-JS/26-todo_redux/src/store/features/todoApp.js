import { createSlice } from "@reduxjs/toolkit";

const todoApp = createSlice({
    name : "todo",
    initialState  : [],
    reducers : {
        addItem : (state,action) => {
            const value = action.payload.trim().toLowerCase();
            if (value && !state.includes(value)) state.push(value) 
        },
        removeUser : (state,action) => {
            state.splice(action,1)
        }
    }
})

export default todoApp.reducer

export const {addItem , removeUser} = todoApp.actions