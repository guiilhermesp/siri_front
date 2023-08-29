import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface PatchMeasureState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: PatchMeasureState = {
  data: [],
  loading: false,
  error: false,
};

const patchMeasureSlice = createSlice({
  name: "patchMeasure",
  initialState,
  reducers: {
    patchMeasure: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    patchMeasureSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    patchMeasureFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { patchMeasure, patchMeasureSuccess, patchMeasureFailure } =
  patchMeasureSlice.actions;

export default patchMeasureSlice.reducer;

export const fetchPatchMeasure =
  (id: string, body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "patchMeasure/patchMeasure"
        | "patchMeasure/patchMeasureSuccess"
        | "patchMeasure/patchMeasureFailure";
    }) => void
  ) => {
    dispatch(patchMeasure());
    try {
      const response = await stocksServices.patchMeasure(id, body);
      dispatch(patchMeasureSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(patchMeasureFailure());
    }
  };
