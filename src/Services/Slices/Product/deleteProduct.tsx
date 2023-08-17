import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface DeleteProductState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: DeleteProductState = {
  data: [],
  loading: false,
  error: false,
};

const postProductSlice = createSlice({
  name: "deleteProduct",
  initialState,
  reducers: {
    deleteProducts: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteProductsSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteProductsFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { deleteProducts, deleteProductsSuccess, deleteProductsFailure } =
  postProductSlice.actions;

export default postProductSlice.reducer;

export const fetchDeleteProduct =
  (id: string | number) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "deleteProduct/deleteProducts"
        | "deleteProduct/deleteProductsSuccess"
        | "deleteProduct/deleteProductsFailure";
    }) => void
  ) => {
    dispatch(deleteProducts());
    try {
      const response = await stocksServices.deleteProduct(id);
      dispatch(deleteProductsSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteProductsFailure());
    }
  };
