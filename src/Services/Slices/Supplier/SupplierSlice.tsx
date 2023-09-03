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
    getSupplier: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getSupplierSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getSupplierFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getSupplier, getSupplierSuccess, getSupplierFailure } =
  supplierSlice.actions;

export default supplierSlice.reducer;

export const fetchSupplier =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplier/getSupplier"
        | "supplier/getSupplierSuccess"
        | "supplier/getSupplierFailure";
    }) => void
  ) => {
    dispatch(getSupplier());
    try {
      const response = await stocksServices.getSupplier(page);
      dispatch(getSupplierSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getSupplierFailure());
    }
  };
