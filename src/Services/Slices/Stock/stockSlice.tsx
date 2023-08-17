import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface StockState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: StockState = {
  data: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    getStock: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getStockSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getStockFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getStock, getStockSuccess, getStockFailure } =
  stockSlice.actions;

export default stockSlice.reducer;

export const fetchStock =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "stock/getStock"
        | "stock/getStockSuccess"
        | "stock/getStockFailure";
    }) => void
  ) => {
    dispatch(getStock());
    try {
      const response = await stocksServices.getStocks(page);
      dispatch(getStockSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getStockFailure());
    }
  };
