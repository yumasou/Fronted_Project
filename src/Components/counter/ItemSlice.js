import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchItem=createAsyncThunk("items/fetchItem",async(url)=>{
    
    const result=await axios.get(url)
    return result.data
})

export const ItemSlice=createSlice({
    name:"items",
    initialState:{
        loading:"idle",
        data:{}
    },
    reducers:{},
    extraReducers:(builder)=>
    { builder
        .addCase(fetchItem.fulfilled,(state,action)=>{
            state.loading="done"
            state.data=action.payload
    })
        
    }
})

export const{}=ItemSlice.actions
export default ItemSlice.reducer