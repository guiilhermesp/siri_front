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

const AccountantReportSlice = createSlice({
  name: "accountantReport",
  initialState,
  reducers: {
    postAccountantReport: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postAccountantReportSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postAccountantReportFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  postAccountantReport,
  postAccountantReportSuccess,
  postAccountantReportFailure,
} = AccountantReportSlice.actions;

export default AccountantReportSlice.reducer;

export const fetchPostAccountantReport =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "accountantReport/postAccountantReport"
        | "accountantReport/postAccountantReportSuccess"
        | "accountantReport/postAccountantReportFailure";
    }) => void
  ) => {
    dispatch(postAccountantReport());
    try {
      const response = await stocksServices.postAccountantReports(body);
      dispatch(postAccountantReportSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postAccountantReportFailure());
    }
  };
