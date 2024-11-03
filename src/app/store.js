import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: { products: productreducer, cart: cartReducer },
});

export default store;
