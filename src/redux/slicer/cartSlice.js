import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cartData',
    initialState:{
        item:[],
        count:0
    },
    reducers:{
        'addtocart':(state,action)=>{
            state.item.push(action.payload)
            state.count+=1
        }
    }
})
export const {addtocart}=cartSlice.actions
export default cartSlice.reducer