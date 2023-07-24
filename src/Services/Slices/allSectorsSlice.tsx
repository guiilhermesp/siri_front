import { createSlice } from "@reduxjs/toolkit";
import stocksServices from "../stocks";

interface allSectorsState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: allSectorsState = {
  data: [],
  loading: false,
  error: false,
};

const allSectorsSlice = createSlice({
  name: "allSectors",
  initialState,
  reducers: {
    getAllSectors: (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    getAllSectorsSuccess: (state, actions) => {
      state.loading = false;
      state.error = false;
      state.data = actions.payload;
    },
    getAllSectorsFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const { getAllSectors, getAllSectorsSuccess, getAllSectorsFailure } =
  allSectorsSlice.actions;

export default allSectorsSlice.reducer;

export const fetchAllSectors =
  () =>
  async (
    dispatch: (arg0: {
      payload: any;
      type:
        | "allSectors/getAllSectors"
        | "allSectors/getAllSectorsSuccess"
        | "allSectors/getAllSectorsFailure";
    }) => void
  ) => {
    dispatch(getAllSectors());
    try {
      const response = await stocksServices.getAllSectors();
      dispatch(getAllSectorsSuccess(response.data));
    } catch (err) {
      console.log("err: ", err);
      dispatch(getAllSectorsFailure());
    }
  };
