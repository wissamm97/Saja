import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  cases: [],
  donation: 0,
};
export const CartSlice = createSlice({
  initialState,

  name: "cart",
  reducers: {
    setDonation: (state, action) => {
      state.donation = action.payload;
    },
    addToCart: (state, action) => {
      const findProduct = state.cases.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.amount += state.donation;
        state.donation = 0;
      } else {
        const productClone = { ...action.payload, amount: state.donation };
        state.cases.push(productClone);
        state.donation = 0;
      }
    },
    deleteFromCart: (state, action) => {
      const itemId = action.payload;
      state.cases = state.cases.filter((item) => item.id !== itemId);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear, setDonation } =
  CartSlice.actions;
export default CartSlice.reducer;
