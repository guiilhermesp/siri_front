import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface MeasureState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: MeasureState = {
  data: [],
  loading: false,
  error: false,
};

const measureSlice = createSlice({
  name: "measure",
  initialState,
  reducers: {
    getMeasure: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getMeasureSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getMeasureFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getMeasure, getMeasureSuccess, getMeasureFailure } =
  measureSlice.actions;

export default measureSlice.reducer;

export const fetchMeasure =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "measure/getMeasure"
        | "measure/getMeasureSuccess"
        | "measure/getMeasureFailure";
    }) => void
  ) => {
    dispatch(getMeasure());
    try {
      const response = await stocksServices.getMeasures(page);
      dispatch(getMeasureSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getMeasureFailure());
    }
  };
