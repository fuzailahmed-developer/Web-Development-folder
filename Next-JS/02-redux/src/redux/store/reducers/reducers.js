// root reducers 

import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from '@/redux/store/reducers/counterSlice/counterSlice'

const rootReducers = combineReducers({
    counter : counterSlice
})

export default rootReducers