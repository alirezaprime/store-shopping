import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/config";

const initialState = {
  loading: false,
  products: [],
  erroe: "",
};

const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return api.get("/products");
});

const productsSlice = createSlice({
  name: "",
  initialState: initialState,
  extraReducers: (bildder) => {
    bildder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    bildder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.erroe = "";
    });
    bildder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.erroe = action.error.message;
    });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
