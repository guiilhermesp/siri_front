import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";
import productsSlice from "./Slices/productsSlice";
import meSlice from "./Slices/meSlice";
import AllMeasuresSlice from "./Slices/allMeasuresSlice";
import AllCategoriesSlice from "./Slices/allCategoriesSlice";
import AllSectorsSlice from "./Slices/allSectorsSlice";
import AllSuppliersSlice from "./Slices/allSuppliersSlice";

const reducer = combineReducers({
  accountSlice,
  meSlice,
  productsSlice,
  AllMeasuresSlice,
  AllCategoriesSlice,
  AllSectorsSlice,
  AllSuppliersSlice,
});
export const store = configureStore({ reducer });
