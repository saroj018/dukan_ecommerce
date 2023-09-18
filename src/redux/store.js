import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slicer/cartSlice";

export const store=configureStore({
    reducer:{
        cartData:cartSlice
    }
})