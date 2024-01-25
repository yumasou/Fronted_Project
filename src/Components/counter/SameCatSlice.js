import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSameCat = createAsyncThunk(
  "sameCat/fetchSameCat",
  async (url) => {
    const result = await axios.get(url);
    return result.data;
  }
);
export const SameCatSlice = createSlice({
  name: "sameCat",
  initialState: {
    loading: "idle",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSameCat.fulfilled, (state, action) => {
      state.loading = "done";
      state.data = action.payload;
    });
  },
});
export const {} = SameCatSlice.actions;
export default SameCatSlice.reducer;
