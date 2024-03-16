import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "itemsRedux",
  initialState: [],
  reducers: {
    addInitialItem: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
