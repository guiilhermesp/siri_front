import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface PostMeasureState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: PostMeasureState = {
  data: [],
  loading: false,
  error: false,
};

const postMeasureSlice = createSlice({
  name: "postMeasure",
  initialState,
  reducers: {
    postMeasure: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postMeasureSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postMeasureFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { postMeasure, postMeasureSuccess, postMeasureFailure } =
  postMeasureSlice.actions;

export default postMeasureSlice.reducer;

export const fetchPostMeasure =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "postMeasure/postMeasure"
        | "postMeasure/postMeasureSuccess"
        | "postMeasure/postMeasureFailure";
    }) => void
  ) => {
    dispatch(postMeasure());
    try {
      const response = await stocksServices.postMeasure(body);
      dispatch(postMeasureSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postMeasureFailure());
    }
  };
