import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface PostProductState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: PostProductState = {
  data: [],
  loading: false,
  error: false,
};

const postProductSlice = createSlice({
  name: "postProducts",
  initialState,
  reducers: {
    postProducts: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postProductsSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postProductsFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { postProducts, postProductsSuccess, postProductsFailure } =
  postProductSlice.actions;

export default postProductSlice.reducer;

export const fetchPostProduct =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "postProducts/postProducts"
        | "postProducts/postProductsSuccess"
        | "postProducts/postProductsFailure";
    }) => void
  ) => {
    dispatch(postProducts());
    try {
      const response = await stocksServices.postProduct(body);
      dispatch(postProductsSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postProductsFailure());
    }
  };
