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

const deleteSupplierOrderSlice = createSlice({
  name: "supplierOrder",
  initialState,
  reducers: {
    deleteSupplierOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteSupplierOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteSupplierOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  deleteSupplierOrder,
  deleteSupplierOrderSuccess,
  deleteSupplierOrderFailure,
} = deleteSupplierOrderSlice.actions;

export default deleteSupplierOrderSlice.reducer;

export const fetchDeleteSupplierOrder =
  (id: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplierOrder/deleteSupplierOrder"
        | "supplierOrder/deleteSupplierOrderSuccess"
        | "supplierOrder/deleteSupplierOrderFailure";
    }) => void
  ) => {
    dispatch(deleteSupplierOrder());
    try {
      const response = await ordersServices.deleteGeneralSupplierOrder(id);
      dispatch(deleteSupplierOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteSupplierOrderFailure());
    }
  };
