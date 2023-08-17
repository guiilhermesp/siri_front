import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface WarehouseState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: WarehouseState = {
  data: [],
  loading: false,
  error: false,
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    getWarehouse: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getWarehouseSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getWarehouseFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getWarehouse, getWarehouseSuccess, getWarehouseFailure } =
  warehouseSlice.actions;

export default warehouseSlice.reducer;

export const fetchWarehouse =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "warehouse/getWarehouse"
        | "warehouse/getWarehouseSuccess"
        | "warehouse/getWarehouseFailure";
    }) => void
  ) => {
    dispatch(getWarehouse());
    try {
      const response = await stocksServices.getWarehouseReports();
      dispatch(getWarehouseSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getWarehouseFailure());
    }
  };
