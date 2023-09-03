import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface AccountantReportState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: AccountantReportState = {
  data: [],
  loading: false,
  error: false,
};

const accountantReportSlice = createSlice({
  name: "accountantReport",
  initialState,
  reducers: {
    getAccountantReport: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAccountantReportSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAccountantReportFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getAccountantReport,
  getAccountantReportSuccess,
  getAccountantReportFailure,
} = accountantReportSlice.actions;

export default accountantReportSlice.reducer;

export const fetchAccountantReport =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "accountantReport/getAccountantReport"
        | "accountantReport/getAccountantReportSuccess"
        | "accountantReport/getAccountantReportFailure";
    }) => void
  ) => {
    dispatch(getAccountantReport());
    try {
      const response = await stocksServices.getAccountantReports();
      dispatch(getAccountantReportSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAccountantReportFailure());
    }
  };
