import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../stocks";

interface allCategoriesState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: allCategoriesState = {
  data: [],
  loading: false,
  error: false,
};

const allCategoriesSlice = createSlice({
  name: "allCategories",
  initialState,
  reducers: {
    getAllCategories: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAllCategoriesSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAllCategoriesFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getAllCategories,
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
} = allCategoriesSlice.actions;

export default allCategoriesSlice.reducer;

export const fetchAllCategories =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "allCategories/getAllCategories"
        | "allCategories/getAllCategoriesSuccess"
        | "allCategories/getAllCategoriesFailure";
    }) => void
  ) => {
    dispatch(getAllCategories());
    try {
      const response = await stocksServices.getAllCategories();
      dispatch(getAllCategoriesSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAllCategoriesFailure());
    }
  };
