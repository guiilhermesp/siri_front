import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";
import productsSlice from "./Slices/productsSlice";
import deleteProduct from "./Slices/deleteProduct";
import meSlice from "./Slices/meSlice";
import allMeasuresSlice from "./Slices/allMeasuresSlice";
import allCategoriesSlice from "./Slices/allCategoriesSlice";
import allSectorsSlice from "./Slices/allSectorsSlice";
import allSuppliersSlice from "./Slices/allSuppliersSlice";

const reducer = combineReducers({
  accountSlice,
  meSlice,
  productsSlice,
  deleteProduct,
  allMeasuresSlice,
  allCategoriesSlice,
  allSectorsSlice,
  allSuppliersSlice,
});
export const store = configureStore({ reducer });
