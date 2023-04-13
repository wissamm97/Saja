import { configureStore } from "@reduxjs/toolkit";
import caseSlic from "../features/caseSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cases: caseSlic,
    cart:cartSlice
  },
});
