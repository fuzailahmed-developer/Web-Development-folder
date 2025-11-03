// Main store file...!

import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./reducers/auth-reducers/reducer"

const store = configureStore({
    reducer : rootReducers
})

export default store