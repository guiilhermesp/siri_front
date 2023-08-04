import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../stocks";

interface PatchProductState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: PatchProductState = {
  data: [],
  loading: false,
  error: false,
};

const patchProductSlice = createSlice({
  name: "patchProducts",
  initialState,
  reducers: {
    patchProducts: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    patchProductsSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    patchProductsFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { patchProducts, patchProductsSuccess, patchProductsFailure } =
  patchProductSlice.actions;

export default patchProductSlice.reducer;

export const fetchPatchProduct =
  (id: string, body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "patchProducts/patchProducts"
        | "patchProducts/patchProductsSuccess"
        | "patchProducts/patchProductsFailure";
    }) => void
  ) => {
    dispatch(patchProducts());
    try {
      const response = await stocksServices.patchProduct(id, body);
      dispatch(patchProductsSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(patchProductsFailure());
    }
  };
