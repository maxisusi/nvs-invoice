import { createSlice } from "@reduxjs/toolkit";
import configureStore from "store/configureStore";

export const clientSlice = createSlice({
  name: "client",
  initialState: {
    value: 10,
  },
  reducers: {
    addClient: (state) => {
      state.value = 20;
    },
  },
});

export const { addClient } = clientSlice.actions;

export default clientSlice.reducer;
