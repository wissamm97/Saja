import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cases: [],
  value: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};
export const getAllCases = createAsyncThunk("get/cases", async () => {
  const response = await axios.get("../data.json");
  const data = response.data;
  console.log(typeof data);
  console.log(Object.isExtensible(data));
  return data;
});

// replce Amount
export const replceamount = createAsyncThunk(
  "replce/amount",
  async (amount, thunkAPI) => {
    try {
      const response = await axios.post("APIURL", amount);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const caseSlic = createSlice({
  name: "cases",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setValue: (state, action) => {
      state.value = action.payload;
    },
    replce: (state, action) => {
      const findProduct = state.cases.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        console.log(findProduct.amount + state.value, "Hello");
      } else {
        console.log("Sorry");
      }
    },
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

export const { reset, replce , setValue} = caseSlic.actions;
export default caseSlic.reducer;
