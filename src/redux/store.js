import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slicer/cartSlice";
import wishListSlice from "./slicer/wishListSlice";

export const store=configureStore({
    reducer:{
        cartData:cartSlice,
        wishlistData:wishListSlice
    }
})