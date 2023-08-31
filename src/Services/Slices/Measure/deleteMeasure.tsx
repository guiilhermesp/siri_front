import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface DeleteMeasureState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: DeleteMeasureState = {
  data: [],
  loading: false,
  error: false,
};

const deleteMeasureSlice = createSlice({
  name: "deleteMeasure",
  initialState,
  reducers: {
    deleteMeasure: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteMeasureSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteMeasureFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { deleteMeasure, deleteMeasureSuccess, deleteMeasureFailure } =
  deleteMeasureSlice.actions;

export default deleteMeasureSlice.reducer;

export const fetchDeleteMeasure =
  (id: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "deleteMeasure/deleteMeasure"
        | "deleteMeasure/deleteMeasureSuccess"
        | "deleteMeasure/deleteMeasureFailure";
    }) => void
  ) => {
    dispatch(deleteMeasure());
    try {
      const response = await stocksServices.deleteMeasure(id);
      dispatch(deleteMeasureSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteMeasureFailure());
    }
  };
