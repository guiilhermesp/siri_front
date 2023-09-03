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
    getProtocol: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getProtocolSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getProtocolFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getProtocol, getProtocolSuccess, getProtocolFailure } =
  protocolSlice.actions;

export default protocolSlice.reducer;

export const fetchProtocol =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "protocol/getProtocol"
        | "protocol/getProtocolSuccess"
        | "protocol/getProtocolFailure";
    }) => void
  ) => {
    dispatch(getProtocol());
    try {
      const response = await stocksServices.getProtocols(page);
      dispatch(getProtocolSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getProtocolFailure());
    }
  };
