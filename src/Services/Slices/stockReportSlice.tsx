import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../stocks";

interface StockReportState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: StockReportState = {
  data: [],
  loading: false,
  error: false,
};

const stockReportSlice = createSlice({
  name: "stockReport",
  initialState,
  reducers: {
    getStockReport: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getStockReportSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getStockReportFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getStockReport, getStockReportSuccess, getStockReportFailure } =
  stockReportSlice.actions;

export default stockReportSlice.reducer;

export const fetchStockReport =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "stockReport/getStockReport"
        | "stockReport/getStockReportSuccess"
        | "stockReport/getStockReportFailure";
    }) => void
  ) => {
    console.log("body slice:", body);
    dispatch(getStockReport());
    try {
      const response = await stocksServices.getStockReports(body);
      console.log("response: ", response);
      dispatch(getStockReportSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getStockReportFailure());
    }
  };
