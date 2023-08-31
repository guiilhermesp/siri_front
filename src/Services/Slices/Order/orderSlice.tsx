import { createSlice } from "@reduxjs/toolkit";
import ordersServices from "../../orders";

interface RequestState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: RequestState = {
  data: [],
  loading: false,
  error: false,
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getRequestSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getRequestFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getRequest, getRequestSuccess, getRequestFailure } =
  requestSlice.actions;

export default requestSlice.reducer;

export const fetchRequest =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "request/getRequest"
        | "request/getRequestSuccess"
        | "request/getRequestFailure";
    }) => void
  ) => {
    dispatch(getRequest());
    try {
      const response = await ordersServices.getOrders(page);
      dispatch(getRequestSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getRequestFailure());
    }
  };
