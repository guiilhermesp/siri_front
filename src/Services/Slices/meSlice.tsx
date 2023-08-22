import { createSlice } from "@reduxjs/toolkit";
import userServices from "../user";

interface MeState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: MeState = {
  data: [],
  loading: false,
  error: false,
};

const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    getMe: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getMeSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload.data;
    },
    getMeFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getMe, getMeSuccess, getMeFailure } = meSlice.actions;

export default meSlice.reducer;

export const fetchMe =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type: "me/getMe" | "me/getMeSuccess" | "me/getMeFailure";
    }) => void
  ) => {
    dispatch(getMe());
    try {
      const response = await userServices.getUser(body);
      dispatch(getMeSuccess(response));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getMeFailure());
    }
  };
