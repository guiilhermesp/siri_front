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

const BiddingExemptionSlice = createSlice({
  name: "biddingExemption",
  initialState,
  reducers: {
    postBiddingExemption: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postBiddingExemptionSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postBiddingExemptionFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  postBiddingExemption,
  postBiddingExemptionSuccess,
  postBiddingExemptionFailure,
} = BiddingExemptionSlice.actions;

export default BiddingExemptionSlice.reducer;

export const fetchPostBiddingExemption =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "biddingExemption/postBiddingExemption"
        | "biddingExemption/postBiddingExemptionSuccess"
        | "biddingExemption/postBiddingExemptionFailure";
    }) => void
  ) => {
    dispatch(postBiddingExemption());
    try {
      const response = await stocksServices.postBiddingExemption(body);
      dispatch(postBiddingExemptionSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postBiddingExemptionFailure());
    }
  };
