import { createSlice } from "@reduxjs/toolkit";

export const PageSlice = createSlice({
  name: "pages",
  initialState: {
    loading: "idle",
    first_page: 1,
    last_page: null,
    current_page: null,
  },
  reducers: {
    next_page: (state) => {
      state.current_page = state.current_page + 1;
    },
    rev_page: (state) => {
      state.current_page = state.current_page - 1;
    },
    next_2page: (state) => {
      state.current_page = state.current_page + 2;
    },
    first_page: (state) => {
      state.current_page = 1;
    },
    to_last_page: (state,action) => {
      state.current_page = action.payload;
    },
    set_last_page: (state, action) => {
      state.last_page = action.payload;
    },
    set_first_current_page:(state)=>{
        state.current_page=1
    }
  },
});
export const {
  next_page,
  next_2page,
  rev_page,
  first_page,
  to_last_page,
  set_first_current_page,
  set_last_page,
} = PageSlice.actions;
export default PageSlice.reducer;
