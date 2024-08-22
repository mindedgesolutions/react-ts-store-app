import { toast } from "@/components/ui/use-toast";
import { type CartItem, type CartState } from "@/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 10000,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    // Add item ------
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newCartItem = action.payload;
      const item = state.cartItems.find((i) => i.cartId === newCartItem.cartId);
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;

      cartSlice.caseReducers.calculateTotals(state);
      toast({ title: "Added", description: "Item added in cart" });
    },
    // Clear cart ------
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    // Remove item from cart ------
    removeItem: (state, action: PayloadAction<string>) => {
      const cartId = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartId === cartId);
      if (!cartItem) return;
      state.cartItems = state.cartItems.filter((i) => i.cartId !== cartId);
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= Number(cartItem.price) * cartItem.amount;

      cartSlice.caseReducers.calculateTotals(state);
      toast({ title: "Removed", description: "Item removed from cart" });
    },
    // Edit item ------
    editItem: (
      state,
      action: PayloadAction<{ cartId: string; amount: number }>
    ) => {
      const { cartId, amount } = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartId === cartId);
      if (!cartItem) return;
      state.numItemsInCart += amount - cartItem.amount;
      state.cartTotal += Number(cartItem.price) * (amount - cartItem.amount);
      cartItem.amount = amount;

      cartSlice.caseReducers.calculateTotals(state);
      toast({ title: "Updated", description: "Cart updated" });
    },
    // Calculate total ------
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
