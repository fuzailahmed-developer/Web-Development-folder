import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        availableItem : JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        addToCart: (state,action) => {
            state.availableItem.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.availableItem))
        },
        removeToCart:(state,action) => {
            state.availableItem = state.availableItem.filter((item) => item.id != action.payload)
            localStorage.setItem('cart',JSON.stringify(state.availableItem))
        },
        clearItem : (state) => {
            state.availableItem=[]
            localStorage.setItem('cart',JSON.stringify(state.availableItem))
        }
    }
})

export const { addToCart , removeToCart , clearItem} = CartSlice.actions
export default CartSlice.reducer