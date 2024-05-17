import { createSlice } from "@reduxjs/toolkit";

export const ActiveSectionSlice = createSlice({
  name: "Active Section",
  initialState: {
    active:"Home",
  },
  reducers: {
    setAcitveSection:(state,action)=>{
        state.active=action.payload}
  },
});

export const { setAcitveSection }=ActiveSectionSlice.actions
export default ActiveSectionSlice.reducer