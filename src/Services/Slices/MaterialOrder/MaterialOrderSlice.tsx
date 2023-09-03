import { createSlice } from "@reduxjs/toolkit";
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

const materialOrderSlice = createSlice({
  name: "materialOrder",
  initialState,
  reducers: {
    getMaterialOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getMaterialOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getMaterialOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  getMaterialOrder,
  getMaterialOrderSuccess,
  getMaterialOrderFailure,
} = materialOrderSlice.actions;

export default materialOrderSlice.reducer;

export const fetchMaterialOrder =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "materialOrder/getMaterialOrder"
        | "materialOrder/getMaterialOrderSuccess"
        | "materialOrder/getMaterialOrderFailure";
    }) => void
  ) => {
    dispatch(getMaterialOrder());
    try {
      const response = await ordersServices.getMaterialOrder(page);
      dispatch(getMaterialOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getMaterialOrderFailure());
    }
  };
