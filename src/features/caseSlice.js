import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cases: [],
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};
export const getAllCases = createAsyncThunk("get/cases", async () => {
  const response = await axios.get("../data.json");
  const data = response.data;
  return data;
});


export const caseSlic = createSlice({
  name: "cases",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCases.pending, (state) => {
        state.isLodaing = true;
      })
      .addCase(getAllCases.fulfilled, (state, action) => {
        state.isLodaing = false;
        state.isSuccess = true;
        state.cases = action.payload;
      })
      .addCase(getAllCases.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, replce, setAmount } = caseSlic.actions;
export default caseSlic.reducer;
