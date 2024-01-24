import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchServices = createAsyncThunk("fetchServices", async (url) => {
  const results = await axios.get(url);
  return results.data;
});
export const ProductSlice = createSlice({
  name: "products",
  initialState: { loading: "idle", data: [] },
  reducers: {
    add: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.loading = "done";
      state.data = action.payload;
    });
  },
});
export const { add } = ProductSlice.actions;
export default ProductSlice.reducer;
