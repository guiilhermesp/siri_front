import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";
import ordersServices from "../../orders";

interface MaterialOrderState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: MaterialOrderState = {
  data: [],
  loading: false,
  error: false,
};

const MaterialOrderSlice = createSlice({
  name: "materialOrder",
  initialState,
  reducers: {
    postMaterialOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    postMaterialOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    postMaterialOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  postMaterialOrder,
  postMaterialOrderSuccess,
  postMaterialOrderFailure,
} = MaterialOrderSlice.actions;

export default MaterialOrderSlice.reducer;

export const fetchPostMaterialOrder =
  (body: any) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "materialOrder/postMaterialOrder"
        | "materialOrder/postMaterialOrderSuccess"
        | "materialOrder/postMaterialOrderFailure";
    }) => void
  ) => {
    dispatch(postMaterialOrder());
    try {
      const response = await ordersServices.postMaterialOrder(body);
      dispatch(postMaterialOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(postMaterialOrderFailure());
    }
  };
