import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface SupplierState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: SupplierState = {
  data: [],
  loading: false,
  error: false,
};

const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    postSupplier: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postSupplierSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postSupplierFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { postSupplier, postSupplierSuccess, postSupplierFailure } =
  supplierSlice.actions;

export default supplierSlice.reducer;

export const fetchPostSupplier =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplier/postSupplier"
        | "supplier/postSupplierSuccess"
        | "supplier/postSupplierFailure";
    }) => void
  ) => {
    dispatch(postSupplier());
    try {
      const response = await stocksServices.postSupplier(body);
      dispatch(postSupplierSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postSupplierFailure());
    }
  };
