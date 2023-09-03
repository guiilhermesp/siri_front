import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface BiddingExemptionState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: BiddingExemptionState = {
  data: [],
  loading: false,
  error: false,
};

const biddingExemptionSlice = createSlice({
  name: "biddingExemption",
  initialState,
  reducers: {
    deleteBiddingExemption: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteBiddingExemptionSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteBiddingExemptionFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  deleteBiddingExemption,
  deleteBiddingExemptionSuccess,
  deleteBiddingExemptionFailure,
} = biddingExemptionSlice.actions;

export default biddingExemptionSlice.reducer;

export const fetchDeleteBiddingExemption =
  (id: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "biddingExemption/deleteBiddingExemption"
        | "biddingExemption/deleteBiddingExemptionSuccess"
        | "biddingExemption/deleteBiddingExemptionFailure";
    }) => void
  ) => {
    dispatch(deleteBiddingExemption());
    try {
      const response = await stocksServices.deleteBiddingExemption(id);
      dispatch(deleteBiddingExemptionSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteBiddingExemptionFailure());
    }
  };
