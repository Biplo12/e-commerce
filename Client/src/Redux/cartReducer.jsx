import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find(
        (product) =>
          product.title === action.payload.title &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      state.quantity += 1;
      state.total += action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
