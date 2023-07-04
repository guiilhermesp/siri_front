import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";

const reducer = combineReducers({
  accountSlice,
});
export const store = configureStore({ reducer });
