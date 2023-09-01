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
    patchSupplierOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    patchSupplierOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    patchSupplierOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  patchSupplierOrder,
  patchSupplierOrderSuccess,
  patchSupplierOrderFailure,
} = supplierOrderSlice.actions;

export default supplierOrderSlice.reducer;

export const fetchPatchSupplierOrder =
  (id: string, body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplierOrder/patchSupplierOrder"
        | "supplierOrder/patchSupplierOrderSuccess"
        | "supplierOrder/patchSupplierOrderFailure";
    }) => void
  ) => {
    dispatch(patchSupplierOrder());
    try {
      const response = await ordersServices.patchSupplierOrder(id, body);
      dispatch(patchSupplierOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(patchSupplierOrderFailure());
    }
  };
