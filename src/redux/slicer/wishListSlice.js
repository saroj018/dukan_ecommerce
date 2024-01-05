import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({
    name:'wishData',
    initialState:{
        count:0,
        item:[]
    },
    reducers:{
        addonwishlist:(state,action)=>{
            let filterItemIndex=state.item.findIndex((ele)=>ele.id===action.payload.id)
            if(filterItemIndex===-1){

                state.item.push(action.payload)
            }
            state.count=state.item.length
        },
        removeWishList:(state,action)=>{
            console.log('correct');
            state.item.splice(action.payload,1)
            state.count=state.item.length
        }
    }
})

export const {addonwishlist,removeWishList}=wishListSlice.actions
export default wishListSlice.reducer
