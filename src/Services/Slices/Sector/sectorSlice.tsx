import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../../stocks";

interface SectorState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: SectorState = {
  data: [],
  loading: false,
  error: false,
};

const sectorSlice = createSlice({
  name: "sector",
  initialState,
  reducers: {
    getSector: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getSectorSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getSectorFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getSector, getSectorSuccess, getSectorFailure } =
  sectorSlice.actions;

export default sectorSlice.reducer;

export const fetchSector =
  (page: string) =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "sector/getSector"
        | "sector/getSectorSuccess"
        | "sector/getSectorFailure";
    }) => void
  ) => {
    dispatch(getSector());
    try {
      const response = await stocksServices.getSectors(page);
      dispatch(getSectorSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getSectorFailure());
    }
  };
