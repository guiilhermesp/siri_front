import { createSlice } from "@reduxjs/toolkit";
import services from "./services";

interface AccountState {
  data: any[];
  loading: boolean;
  error: boolean;
}

const initialState: AccountState = {
  data: [],
  loading: false,
  error: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getAccount: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAccountSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload.data;
    },
    getAccountFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getAccount, getAccountSuccess, getAccountFailure } =
  accountSlice.actions;

export default accountSlice.reducer;

export const fetchAccount =
  (user: string, password: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "account/getAccount"
        | "account/getAccountSuccess"
        | "account/getAccountFailure";
    }) => void
  ) => {
    dispatch(getAccount());
    try {
      const response = await services.account(user, password);
      dispatch(getAccountSuccess(response));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAccountFailure());
    }
  };
