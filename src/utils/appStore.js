import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
//configuring store is redux job
//providing store to the react application is react js

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
