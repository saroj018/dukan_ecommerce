import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartData',
    initialState: {
        item: [],
        count: 0
    },
    reducers: {
        addtocart: (state, action) => {
            let data=action.payload
            let repetedIndex=state.item.findIndex((ele)=>ele.id===data.id) 
            
            if(repetedIndex===-1){
                state.item.push(data)
            }
            state.count = state.item.length;
        },
        removeItem:(state,action)=>{
            // let filterItem=state.item.filter((ele,index)=>ele.id!==action.payload)
            // state.item=filterItem
            state.item.splice(action.payload,1)
            state.count=state.item.length
        }
    }
});

export const { addtocart,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
