import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";
import productsSlice from "./Slices/Product/productsSlice";
import deleteProduct from "./Slices/Product/deleteProduct";
import meSlice from "./Slices/meSlice";
import allMeasuresSlice from "./Slices/Measure/allMeasuresSlice";
import allCategoriesSlice from "./Slices/allCategoriesSlice";
import allSectorsSlice from "./Slices/Sector/allSectorsSlice";
import allSuppliersSlice from "./Slices/allSuppliersSlice";
import stockSlice from "./Slices/Stock/stockSlice";
import warehouseSlice from "./Slices/Warehouse/warehouseSlice";
import measureSlice from "./Slices/Measure/measureSlice";
import sectorSlice from "./Slices/Sector/sectorSlice";

const reducer = combineReducers({
  accountSlice,
  meSlice,
  productsSlice,
  deleteProduct,
  allMeasuresSlice,
  allCategoriesSlice,
  allSectorsSlice,
  allSuppliersSlice,
  stockSlice,
  warehouseSlice,
  measureSlice,
  sectorSlice,
});
export const store = configureStore({ reducer });
