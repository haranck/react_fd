import { configureStore } from "@reduxjs/toolkit";

import userReducer from '../slice/Userslice'

export const store = configureStore({
    reducer:{
        users:userReducer
    }
})
