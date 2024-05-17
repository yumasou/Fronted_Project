import { createSlice } from "@reduxjs/toolkit";

const modeSlice=createSlice({
name:"mode",
initialState:{data:"light"},
reducers:{
    changeMode:(state)=>{
        
        state.data=(state.data==="light")?"dark" :"light"}
}
})
export const{changeMode}=modeSlice.actions
export default modeSlice.reducer