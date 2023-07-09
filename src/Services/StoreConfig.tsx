import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";
import meSlice from "./Slices/meSlice";

const reducer = combineReducers({
  accountSlice,
  meSlice,
});
export const store = configureStore({ reducer });
