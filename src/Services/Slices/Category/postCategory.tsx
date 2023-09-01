import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface CategoryState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: CategoryState = {
  data: [],
  loading: false,
  error: false,
};

const postCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    postCategory: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postCategorySuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postCategoryFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { postCategory, postCategorySuccess, postCategoryFailure } =
  postCategorySlice.actions;

export default postCategorySlice.reducer;

export const fetchPostCategory =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "category/postCategory"
        | "category/postCategorySuccess"
        | "category/postCategoryFailure";
    }) => void
  ) => {
    dispatch(postCategory());
    try {
      const response = await stocksServices.postCategory(body);
      dispatch(postCategorySuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postCategoryFailure());
    }
  };
