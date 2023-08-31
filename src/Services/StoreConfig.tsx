import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountSlice from "./Slices/accountSlice";
import productsSlice from "./Slices/Product/productsSlice";
import deleteProduct from "./Slices/Product/deleteProduct";
import meSlice from "./Slices/meSlice";
import allMeasuresSlice from "./Slices/Measure/allMeasuresSlice";
import allCategoriesSlice from "./Slices/allCategoriesSlice";
import allSectorsSlice from "./Slices/Sector/allSectorsSlice";
import allSuppliersSlice from "./Slices/allSuppliersSlice";
import allProducts from "./Slices/Product/allProducts";
import allPublicDefenses from "./Slices/allPublicDefenses";
import stockSlice from "./Slices/Stock/stockSlice";
import warehouseSlice from "./Slices/Warehouse/warehouseSlice";
import measureSlice from "./Slices/Measure/measureSlice";
import sectorSlice from "./Slices/Sector/sectorSlice";
import stockReportSlice from "./Slices/stockReportSlice";
import patchMeasure from "./Slices/Measure/patchMeasure";
import postMeasure from "./Slices/Measure/postMeasure";
import deleteMeasure from "./Slices/Measure/deleteMeasure";
import orderSlice from "./Slices/Order/orderSlice";
import invoiceSlice from "./Slices/Invoice/invoiceSlice";
import postInvoice from "./Slices/Invoice/postInvoice";
import deleteInvoice from "./Slices/Invoice/deleteInvoice";

const reducer = combineReducers({
  accountSlice,
  meSlice,
  productsSlice,
  deleteProduct,
  allMeasuresSlice,
  allCategoriesSlice,
  allSectorsSlice,
  allSuppliersSlice,
  allProducts,
  allPublicDefenses,
  stockSlice,
  warehouseSlice,
  measureSlice,
  sectorSlice,
  stockReportSlice,
  patchMeasure,
  postMeasure,
  deleteMeasure,
  orderSlice,
  invoiceSlice,
  postInvoice,
  deleteInvoice,
});
export const store = configureStore({ reducer });
