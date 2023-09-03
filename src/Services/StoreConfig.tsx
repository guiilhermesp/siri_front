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
import receiveReportSlice from "./Slices/ReceiveReport/receiveReportSlice";
import dispatchReportSlice from "./Slices/DispatchReport/dispatchReportSlice";
import categorySlice from "./Slices/Category/categorySlice";
import deleteCategory from "./Slices/Category/deleteCategory";
import patchCategory from "./Slices/Category/patchCategory";
import postCategory from "./Slices/Category/postCategory";
import supplierOrderSlice from "./Slices/SupplierOrder/supplierOrderSlice";
import patchSupplierOrder from "./Slices/SupplierOrder/patchSupplierOrder";
import postSupplierOrder from "./Slices/SupplierOrder/postSupplierOrder";
import deleteSupplierOrder from "./Slices/SupplierOrder/deleteSupplierOrder";
import ProtocolSlice from "./Slices/Protocol/ProtocolSlice";
import patchProtocol from "./Slices/Protocol/patchProtocol";
import postProtocol from "./Slices/Protocol/postProtocol";
import deleteProtocol from "./Slices/Protocol/deleteProtocol";
import SupplierSlice from "./Slices/Supplier/SupplierSlice";
import patchSupplier from "./Slices/Supplier/patchSupplier";
import postSupplier from "./Slices/Supplier/postSupplier";
import deleteSupplier from "./Slices/Supplier/deleteSupplier";
import MaterialOrderSlice from "./Slices/MaterialOrder/MaterialOrderSlice";
import postMaterialOrder from "./Slices/MaterialOrder/postMaterialOrder";
import deleteMaterialOrder from "./Slices/MaterialOrder/deleteMaterialOrder";
import BiddingExemptionSlice from "./Slices/BiddingExemption/BiddingExemptionSlice";
import postBiddingExemption from "./Slices/BiddingExemption/postBiddingExemption";
import deleteBiddingExemption from "./Slices/BiddingExemption/deleteBiddingExemption";
import AccountantReportSlice from "./Slices/AccountantReport/AccountantReportSlice";
import postAccountantReport from "./Slices/AccountantReport/postAccountantReport";
import deleteAccountantReport from "./Slices/AccountantReport/deleteAccountantReport";

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
  receiveReportSlice,
  dispatchReportSlice,
  categorySlice,
  deleteCategory,
  patchCategory,
  postCategory,
  supplierOrderSlice,
  patchSupplierOrder,
  postSupplierOrder,
  deleteSupplierOrder,
  ProtocolSlice,
  patchProtocol,
  postProtocol,
  deleteProtocol,
  SupplierSlice,
  patchSupplier,
  postSupplier,
  deleteSupplier,
  MaterialOrderSlice,
  postMaterialOrder,
  deleteMaterialOrder,
  BiddingExemptionSlice,
  postBiddingExemption,
  deleteBiddingExemption,
  AccountantReportSlice,
  postAccountantReport,
  deleteAccountantReport,
});
export const store = configureStore({ reducer });
