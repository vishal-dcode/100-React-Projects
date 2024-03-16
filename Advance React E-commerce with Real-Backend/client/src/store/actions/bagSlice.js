import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagRedux",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemID) => itemID !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;
export default bagSlice;
