import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface DispatchReportState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: DispatchReportState = {
  data: [],
  loading: false,
  error: false,
};

const dispatchReportSlice = createSlice({
  name: "DispatchReport",
  initialState,
  reducers: {
    getDispatchReport: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getDispatchReportSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getDispatchReportFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getDispatchReport,
  getDispatchReportSuccess,
  getDispatchReportFailure,
} = dispatchReportSlice.actions;

export default dispatchReportSlice.reducer;

export const fetchDispatchReport =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "DispatchReport/getDispatchReport"
        | "DispatchReport/getDispatchReportSuccess"
        | "DispatchReport/getDispatchReportFailure";
    }) => void
  ) => {
    dispatch(getDispatchReport());
    try {
      const response = await stocksServices.getdispatchProducts(page);
      dispatch(getDispatchReportSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getDispatchReportFailure());
    }
  };
