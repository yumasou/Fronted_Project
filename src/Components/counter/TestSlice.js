import { createSlice } from "@reduxjs/toolkit";

const TestSlice=createSlice({
    name:"test",
    initialState:{value:0},
    reducers:{
        setvalue:(state)=> state.value=1
    }
})
export const {setvalue}=TestSlice.actions
export default TestSlice.reducer