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
    deleteInvoice: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteInvoiceSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteInvoiceFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { deleteInvoice, deleteInvoiceSuccess, deleteInvoiceFailure } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;

export const fetchDeleteInvoice =
  (id: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "invoice/deleteInvoice"
        | "invoice/deleteInvoiceSuccess"
        | "invoice/deleteInvoiceFailure";
    }) => void
  ) => {
    dispatch(deleteInvoice());
    try {
      const response = await stocksServices.deleteInvoices(id);
      dispatch(deleteInvoiceSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteInvoiceFailure());
    }
  };
