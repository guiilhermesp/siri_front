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

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    postInvoice: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postInvoiceSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postInvoiceFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { postInvoice, postInvoiceSuccess, postInvoiceFailure } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;

export const fetchCreateInvoice =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "invoice/postInvoice"
        | "invoice/postInvoiceSuccess"
        | "invoice/postInvoiceFailure";
    }) => void
  ) => {
    dispatch(postInvoice());
    try {
      const response = await stocksServices.postInvoice(body);
      dispatch(postInvoiceSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postInvoiceFailure());
    }
  };
