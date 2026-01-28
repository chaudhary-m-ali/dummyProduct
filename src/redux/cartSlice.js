import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], //final Cart items
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity = 1, size } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      console.log("existingItem", existingItem);
      if (existingItem) {
        existingItem.qunatity += quantity;
      } else {
        state.items.push({
          ...product,
          qunatity: quantity,
          size: size,
        });
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.qunatity,
        0,
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.qunatity,
        0,
      );
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qunatity = action.payload.quantity;
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.qunatity,
        0,
      );
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
