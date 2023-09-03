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
    getBiddingExemption: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getBiddingExemptionSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getBiddingExemptionFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getBiddingExemption,
  getBiddingExemptionSuccess,
  getBiddingExemptionFailure,
} = biddingExemptionSlice.actions;

export default biddingExemptionSlice.reducer;

export const fetchBiddingExemption =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "biddingExemption/getBiddingExemption"
        | "biddingExemption/getBiddingExemptionSuccess"
        | "biddingExemption/getBiddingExemptionFailure";
    }) => void
  ) => {
    dispatch(getBiddingExemption());
    try {
      const response = await stocksServices.getBiddingExemption(page);
      dispatch(getBiddingExemptionSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getBiddingExemptionFailure());
    }
  };
