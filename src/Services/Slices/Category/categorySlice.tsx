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

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getCategorySuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getCategoryFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getCategory, getCategorySuccess, getCategoryFailure } =
  categorySlice.actions;

export default categorySlice.reducer;

export const fetchCategory =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "category/getCategory"
        | "category/getCategorySuccess"
        | "category/getCategoryFailure";
    }) => void
  ) => {
    dispatch(getCategory());
    try {
      const response = await stocksServices.getCategories(page);
      dispatch(getCategorySuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getCategoryFailure());
    }
  };
