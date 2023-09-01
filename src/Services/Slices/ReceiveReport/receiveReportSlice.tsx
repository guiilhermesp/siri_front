import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface ReceiveReportState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: ReceiveReportState = {
  data: [],
  loading: false,
  error: false,
};

const receiveReportSlice = createSlice({
  name: "ReceiveReport",
  initialState,
  reducers: {
    getReceiveReport: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getReceiveReportSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getReceiveReportFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getReceiveReport,
  getReceiveReportSuccess,
  getReceiveReportFailure,
} = receiveReportSlice.actions;

export default receiveReportSlice.reducer;

export const fetchReceiveReport =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "ReceiveReport/getReceiveReport"
        | "ReceiveReport/getReceiveReportSuccess"
        | "ReceiveReport/getReceiveReportFailure";
    }) => void
  ) => {
    dispatch(getReceiveReport());
    try {
      const response = await stocksServices.getReceivingReports(page);
      dispatch(getReceiveReportSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getReceiveReportFailure());
    }
  };
