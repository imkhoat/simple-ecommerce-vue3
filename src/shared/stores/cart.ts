import { defineStore } from "pinia";
import { CartItem } from "../types/category";

export const useCartStore = defineStore("cart", {
  state: () => {
    return { cart: [] as CartItem[] };
  },
  getters: {
    pickupItems: (state) => state.cart,
    totalAmount: (state) => {
      return state.cart.reduce((previousValue, currentValue) => {
        const quantity = currentValue?.quantity as number;
        const price = currentValue?.product.price as number;
        const total = quantity * price;
        return previousValue + total;
      }, 0);
    },
  },

  actions: {
    addToCart(payload: CartItem) {
      const targetIndex = this.cart.findIndex(
        (item) => item.product.code === payload.product.code
      );
      if (targetIndex != -1) {
        const currentQuantity = this.cart[targetIndex].quantity as number;
        const topupQuantity = payload.quantity as number;
        this.cart[targetIndex].quantity = currentQuantity + topupQuantity;
      } else {
        this.cart.push(payload);
      }
    },
    increaseQuantity(payload: CartItem) {
      const targetIndex = this.cart.findIndex(
        (item) => item.product.code === payload.product.code
      );
      if (targetIndex != -1) {
        const currentQuantity = this.cart[targetIndex].quantity as number;
        this.cart[targetIndex].quantity = currentQuantity + 1;
      } else {
        this.cart.push(payload);
      }
    },
    decreaseQuantity(payload: CartItem) {
      const targetIndex = this.cart.findIndex(
        (item) => item.product.code === payload.product.code
      );
      if (targetIndex != -1) {
        const currentQuantity = this.cart[targetIndex].quantity as number;
        this.cart[targetIndex].quantity = currentQuantity - 1;
      } else {
        this.cart.push(payload);
      }
    },
  },
});
