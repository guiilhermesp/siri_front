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
    deleteCategory: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteCategorySuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteCategoryFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { deleteCategory, deleteCategorySuccess, deleteCategoryFailure } =
  categorySlice.actions;

export default categorySlice.reducer;

export const fetchDeleteCategory =
  (id: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "category/deleteCategory"
        | "category/deleteCategorySuccess"
        | "category/deleteCategoryFailure";
    }) => void
  ) => {
    dispatch(deleteCategory());
    try {
      const response = await stocksServices.deleteCategory(id);
      dispatch(deleteCategorySuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteCategoryFailure());
    }
  };
