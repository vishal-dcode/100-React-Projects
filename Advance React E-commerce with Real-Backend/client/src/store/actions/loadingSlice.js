import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadingRedux",
  initialState: true,
  reducers: {
    toggleLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
