import { configureStore } from "@reduxjs/toolkit";

import loadingSlice from "./actions/loadingSlice.js";
import itemsSlice from "./actions/itemsSlice.js";
import bagSlice from "./actions/bagSlice.js";

const reduxStore = configureStore({
  reducer: {
    itemsRedux: itemsSlice.reducer,
    bagRedux: bagSlice.reducer,
    loadingRedux: loadingSlice.reducer,
  },
});

export default reduxStore;
