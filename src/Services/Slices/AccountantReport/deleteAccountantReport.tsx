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
    deleteAccountantReport: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteAccountantReportSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteAccountantReportFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  deleteAccountantReport,
  deleteAccountantReportSuccess,
  deleteAccountantReportFailure,
} = AccountantReportSlice.actions;

export default AccountantReportSlice.reducer;

export const fetchDeleteAccountantReport =
  (id: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "accountantReport/deleteAccountantReport"
        | "accountantReport/deleteAccountantReportSuccess"
        | "accountantReport/deleteAccountantReportFailure";
    }) => void
  ) => {
    dispatch(deleteAccountantReport());
    try {
      const response = await stocksServices.deleteAccoutantReports(id);
      dispatch(deleteAccountantReportSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteAccountantReportFailure());
    }
  };
