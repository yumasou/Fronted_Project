import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_URL } from "../../Api";

export const fetchCatType = createAsyncThunk(
  "catTypes/fetchCatType",
  async (url) => {
    const result = await axios.get(url);

    try {
      const responses = await Promise.all(
        result.data.map(async (m) => {
          const response = await axios.get(`${Base_URL}/category/${m}?limit=1`);
          return response.data.products[0];
        })
      );
      return responses;
      // console.log(responses); // Array of response data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
);

export const fetchEachItemofCat = createAsyncThunk(
  "catTypes/fetchEachItemofCat",
  async () => {}
);

export const CatTypeSlice = createSlice({
  name: "catTypes",
  initialState: {
    loading: "idle",
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatType.fulfilled, (state, action) => {
      state.loading = "done";
      state.data = action.payload;
    });
  },
});
export const {} = CatTypeSlice.actions;
export default CatTypeSlice.reducer;
