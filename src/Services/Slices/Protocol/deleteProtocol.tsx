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
    deleteProtocol: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteProtocolSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteProtocolFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { deleteProtocol, deleteProtocolSuccess, deleteProtocolFailure } =
  protocolSlice.actions;

export default protocolSlice.reducer;

export const fetchDeleteProtocol =
  (id: string | number) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "protocol/deleteProtocol"
        | "protocol/deleteProtocolSuccess"
        | "protocol/deleteProtocolFailure";
    }) => void
  ) => {
    dispatch(deleteProtocol());
    try {
      // const response = await stocksServices.deleteProtocol(id);
      // dispatch(deleteProtocolSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteProtocolFailure());
    }
  };
