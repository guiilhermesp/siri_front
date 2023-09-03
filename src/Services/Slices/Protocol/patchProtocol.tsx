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
    patchProtocol: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    patchProtocolSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    patchProtocolFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { patchProtocol, patchProtocolSuccess, patchProtocolFailure } =
  protocolSlice.actions;

export default protocolSlice.reducer;

export const fetchPatchProtocol =
  (id: string, body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "protocol/patchProtocol"
        | "protocol/patchProtocolSuccess"
        | "protocol/patchProtocolFailure";
    }) => void
  ) => {
    dispatch(patchProtocol());
    try {
      // const response = await stocksServices.patchProtocol(id, body);
      // dispatch(patchProtocolSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(patchProtocolFailure());
    }
  };
