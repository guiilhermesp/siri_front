import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";
import productsSlice from "./Slices/productsSlice";
import meSlice from "./Slices/meSlice";

const reducer = combineReducers({
  accountSlice,
  meSlice,
  productsSlice,
});
export const store = configureStore({ reducer });
