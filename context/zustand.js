import { create } from "zustand";
import { auth } from "../firebase";

export const useCartDetails = create((set) => ({
  cart: [],
  setCart: (item) => set((state) => ({ cart: item })),
  removeAll: () => set({ cart: [] }),
}));

export const useUserDetails = create((set) => ({
  user: null || auth.currentUser,
  setUser: (user) => set((state) => ({ user: user })),
  signOutUser: () => set({ user: null }),
}));

export const useUserTier = create((set) => ({
  userTier: false,
  setUserTier: (userTier) => set((state) => ({ userTier: userTier })),
}));

export const useUserDetailsStore = create((set) => ({
  userDetails: null,
  setUserDetails: (newDetails) =>
    set((state) => ({
      userDetails: {
        ...state.userDetails,
        ...newDetails,
      },
    })),
}));
