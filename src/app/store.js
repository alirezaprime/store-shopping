import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../features/product/productSlice";

const store = configureStore({
  reducer: { products: productreducer },
});

export default store;
