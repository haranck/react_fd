import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem('users'))||[]

const initialState = {
    list:Array.isArray(saved) ? saved : []
}


const listingSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.list.push(action.payload)
            localStorage.setItem("users", JSON.stringify(state.list));
        },
        removeItem:(state,action)=>{
            state.list = state.list.filter((_,i)=>i!==action.payload)
            localStorage.setItem("users", JSON.stringify(state.list));
        }
    }
})


export default listingSlice.reducer
export const {addItem,removeItem} = listingSlice.actions


