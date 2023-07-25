import { createSlice } from "@reduxjs/toolkit";
import productsServices from "../products";
import stocksServices from "../stocks";

interface ProductsState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getProductsSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getProductsFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailure } =
  productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "products/getProducts"
        | "products/getProductsSuccess"
        | "products/getProductsFailure";
    }) => void
  ) => {
    dispatch(getProducts());
    try {
      const page = "1";
      const response = await stocksServices.getProducts(page);
      dispatch(getProductsSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getProductsFailure());
    }
  };
