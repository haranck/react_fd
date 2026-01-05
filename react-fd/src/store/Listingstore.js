import { configureStore } from "@reduxjs/toolkit";

import ListingReducer from  '../slice/Listingslice'

export const store = configureStore({
    reducer:{
        list:ListingReducer
    }
})

