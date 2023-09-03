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
    patchSupplier: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    patchSupplierSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    patchSupplierFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { patchSupplier, patchSupplierSuccess, patchSupplierFailure } =
  supplierSlice.actions;

export default supplierSlice.reducer;

export const fetchPatchSupplier =
  (id: string, body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "supplier/patchSupplier"
        | "supplier/patchSupplierSuccess"
        | "supplier/patchSupplierFailure";
    }) => void
  ) => {
    dispatch(patchSupplier());
    try {
      const response = await stocksServices.patchSupplier(id, body);
      dispatch(patchSupplierSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(patchSupplierFailure());
    }
  };
