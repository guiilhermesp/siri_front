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

const patchCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    patchCategory: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    patchCategorySuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    patchCategoryFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { patchCategory, patchCategorySuccess, patchCategoryFailure } =
  patchCategorySlice.actions;

export default patchCategorySlice.reducer;

export const fetchPatchCategory =
  (id: string, body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "category/patchCategory"
        | "category/patchCategorySuccess"
        | "category/patchCategoryFailure";
    }) => void
  ) => {
    dispatch(patchCategory());
    try {
      const response = await stocksServices.patchCategory(id, body);
      dispatch(patchCategorySuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(patchCategoryFailure());
    }
  };
