import { createSlice } from "@reduxjs/toolkit";
import loginServices from "../login";

interface AccountState {
  data: any;
  loading: boolean;
  error: boolean;
}

interface Body {
  username: string;
  password: string;
  remember: boolean;
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
  (body: Body) =>
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
      const response = await loginServices.login(body);
      dispatch(getAccountSuccess(response));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAccountFailure());
    }
  };
