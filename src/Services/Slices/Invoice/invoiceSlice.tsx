import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface InvoiceState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: InvoiceState = {
  data: [],
  loading: false,
  error: false,
};

const requestSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    getInvoice: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getInvoiceSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getInvoiceFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getInvoice, getInvoiceSuccess, getInvoiceFailure } =
  requestSlice.actions;

export default requestSlice.reducer;

export const fetchInvoice =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "invoice/getInvoice"
        | "invoice/getInvoiceSuccess"
        | "invoice/getInvoiceFailure";
    }) => void
  ) => {
    dispatch(getInvoice());
    try {
      const response = await stocksServices.getInvoices(page);
      dispatch(getInvoiceSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getInvoiceFailure());
    }
  };
