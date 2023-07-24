import { createSlice } from "@reduxjs/toolkit";
import suppliersServices from "../suppliers";

interface allSuppliersState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: allSuppliersState = {
  data: [],
  loading: false,
  error: false,
};

const allSuppliersSlice = createSlice({
  name: "allSuppliers",
  initialState,
  reducers: {
    getAllSuppliers: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAllSuppliersSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAllSuppliersFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getAllSuppliers,
  getAllSuppliersSuccess,
  getAllSuppliersFailure,
} = allSuppliersSlice.actions;

export default allSuppliersSlice.reducer;

export const fetchAllSuppliers =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "allSuppliers/getAllSuppliers"
        | "allSuppliers/getAllSuppliersSuccess"
        | "allSuppliers/getAllSuppliersFailure";
    }) => void
  ) => {
    dispatch(getAllSuppliers());
    try {
      const response = await suppliersServices.getAllSuppliers();
      dispatch(getAllSuppliersSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAllSuppliersFailure());
    }
  };
