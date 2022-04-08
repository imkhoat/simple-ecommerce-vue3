import { defineStore } from "pinia";
import { CartItem } from "../types/category";

export const useCartStore = defineStore("cart", {
  state: () => {
    return { cart: [] as CartItem[] };
  },

  actions: {
    addToCart(payload: CartItem) {
      this.cart.push(payload);
    },
  },
});
