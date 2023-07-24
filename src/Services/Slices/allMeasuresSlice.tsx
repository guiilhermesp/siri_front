import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../stocks";

interface allMeasuresState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: allMeasuresState = {
  data: [],
  loading: false,
  error: false,
};

const allMeasuresSlice = createSlice({
  name: "allMeasures",
  initialState,
  reducers: {
    getAllMeasures: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAllMeasuresSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAllMeasuresFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getAllMeasures, getAllMeasuresSuccess, getAllMeasuresFailure } =
  allMeasuresSlice.actions;

export default allMeasuresSlice.reducer;

export const fetchAllMeasures =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "allMeasures/getAllMeasures"
        | "allMeasures/getAllMeasuresSuccess"
        | "allMeasures/getAllMeasuresFailure";
    }) => void
  ) => {
    dispatch(getAllMeasures());
    try {
      const response = await stocksServices.getAllMeasures();
      dispatch(getAllMeasuresSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAllMeasuresFailure());
    }
  };
