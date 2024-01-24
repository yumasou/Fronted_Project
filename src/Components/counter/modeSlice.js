import { createSlice } from "@reduxjs/toolkit";

const modeSlice=createSlice({name:"mode",
initialState:"light",
reducers:{
    changeMode:(state)=>state="dark"
}
})
export const{changeMode}=modeSlice.actions
export default modeSlice.reducer