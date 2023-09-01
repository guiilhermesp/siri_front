import { createSlice } from "@reduxjs/toolkit";
import ordersServices from "../../orders";

interface SupplierOrderState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: SupplierOrderState = {
  data: [],
  loading: false,
  error: false,
};

const supplierOrderSlice = createSlice({
  name: "supplierOrder",
  initialState,
  reducers: {
    getSupplierOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getSupplierOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getSupplierOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getSupplierOrder,
  getSupplierOrderSuccess,
  getSupplierOrderFailure,
} = supplierOrderSlice.actions;

export default supplierOrderSlice.reducer;

export const fetchSupplierOrder =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplierOrder/getSupplierOrder"
        | "supplierOrder/getSupplierOrderSuccess"
        | "supplierOrder/getSupplierOrderFailure";
    }) => void
  ) => {
    dispatch(getSupplierOrder());
    try {
      const response = await ordersServices.getSupplierOrders();
      dispatch(getSupplierOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getSupplierOrderFailure());
    }
  };
