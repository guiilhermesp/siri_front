import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface ProtocolState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: ProtocolState = {
  data: [],
  loading: false,
  error: false,
};

const protocolSlice = createSlice({
  name: "protocol",
  initialState,
  reducers: {
    postProtocol: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postProtocolSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postProtocolFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { postProtocol, postProtocolSuccess, postProtocolFailure } =
  protocolSlice.actions;

export default protocolSlice.reducer;

export const fetchPostProtocol =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "protocol/postProtocol"
        | "protocol/postProtocolSuccess"
        | "protocol/postProtocolFailure";
    }) => void
  ) => {
    dispatch(postProtocol());
    try {
      // const response = await stocksServices.postProtocol(body);
      // dispatch(postProtocolSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postProtocolFailure());
    }
  };
