import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface AllProductsState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: AllProductsState = {
  data: [],
  loading: false,
  error: false,
};

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    getAllProducts: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAllProductsSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAllProductsFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getAllProducts, getAllProductsSuccess, getAllProductsFailure } =
  allProductsSlice.actions;

export default allProductsSlice.reducer;

export const fetchAllProducts =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "allProducts/getAllProducts"
        | "allProducts/getAllProductsSuccess"
        | "allProducts/getAllProductsFailure";
    }) => void
  ) => {
    dispatch(getAllProducts());
    try {
      const response = await stocksServices.getAllProducts();
      dispatch(getAllProductsSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAllProductsFailure());
    }
  };
