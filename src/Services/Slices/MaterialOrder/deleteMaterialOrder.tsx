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

const materialOrderSlice = createSlice({
  name: "materialOrder",
  initialState,
  reducers: {
    deleteMaterialOrder: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    deleteMaterialOrderSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    deleteMaterialOrderFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  deleteMaterialOrder,
  deleteMaterialOrderSuccess,
  deleteMaterialOrderFailure,
} = materialOrderSlice.actions;

export default materialOrderSlice.reducer;

export const fetchDeleteMaterialOrder =
  (id: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "materialOrder/deleteMaterialOrder"
        | "materialOrder/deleteMaterialOrderSuccess"
        | "materialOrder/deleteMaterialOrderFailure";
    }) => void
  ) => {
    dispatch(deleteMaterialOrder());
    try {
      const response = await ordersServices.deleteMaterialOrder(id);
      dispatch(deleteMaterialOrderSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(deleteMaterialOrderFailure());
    }
  };
