import { create } from "zustand";
import { auth } from "../firebase";

export const useCartDetails = create((set) => ({
  cart: [],
  setCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeAll: () => set({ cart: [] }),
  removeSelected: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item._id !== id) })),
}));

export const useUserDetails = create((set) => ({
  user: null || auth.currentUser,
  setUser: (user) => set((state) => ({ user: user })),
  signOutUser: () => set({ user: null }),
}));
