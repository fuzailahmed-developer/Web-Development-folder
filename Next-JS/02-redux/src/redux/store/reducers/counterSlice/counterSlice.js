import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        INCREMENT: (state) => {
            state.value += 1
        },
        DECREMENT: (state) => {
            state.value -= 1
        },
        RESET: (state) => {
            state.value = 0
        },
        INCREMENT_BY_AMOUNT: (state, action) => {
            state.value += Number(action.payload)
        },
    }
})

export default counterSlice.reducer
export const { INCREMENT, DECREMENT, RESET, INCREMENT_BY_AMOUNT } = counterSlice.actions