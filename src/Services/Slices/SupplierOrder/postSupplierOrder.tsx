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
    postSupplierOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postSupplierOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postSupplierOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  postSupplierOrder,
  postSupplierOrderSuccess,
  postSupplierOrderFailure,
} = supplierOrderSlice.actions;

export default supplierOrderSlice.reducer;

export const fetchPostSupplierOrder =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplierOrder/postSupplierOrder"
        | "supplierOrder/postSupplierOrderSuccess"
        | "supplierOrder/postSupplierOrderFailure";
    }) => void
  ) => {
    dispatch(postSupplierOrder());
    try {
      const response = await ordersServices.postSupplierOrder(body);
      dispatch(postSupplierOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postSupplierOrderFailure());
    }
  };
