import { create } from "zustand";

export const useUserDetails = create((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
  signOutUser: () => set({ user: null }),
}));
