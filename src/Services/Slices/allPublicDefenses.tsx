import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../stocks";

interface AllPublicDefensesState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: AllPublicDefensesState = {
  data: [],
  loading: false,
  error: false,
};

const allPublicDefensesSlice = createSlice({
  name: "allPublicDefenses",
  initialState,
  reducers: {
    getAllPublicDefenses: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAllPublicDefensesSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAllPublicDefensesFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getAllPublicDefenses, getAllPublicDefensesSuccess, getAllPublicDefensesFailure } =
  allPublicDefensesSlice.actions;

export default allPublicDefensesSlice.reducer;

export const fetchAllPublicDefenses =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "allPublicDefenses/getAllPublicDefenses"
        | "allPublicDefenses/getAllPublicDefensesSuccess"
        | "allPublicDefenses/getAllPublicDefensesFailure";
    }) => void
  ) => {
    dispatch(getAllPublicDefenses());
    try {
      const response = await stocksServices.getAllPublicDefenses();
      dispatch(getAllPublicDefensesSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAllPublicDefensesFailure());
    }
  };
