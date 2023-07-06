import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";

const reducer = combineReducers({
  accountSlice,
});
export const store = configureStore({ reducer });
