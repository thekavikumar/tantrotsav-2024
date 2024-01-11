import { create } from "zustand";

export const useCartDetails = create((set) => ({
	cart: [],
	setCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
	removeAll: () => set({ cart: [] }),
	removeSelected: (id) =>
		set((state) => ({ cart: state.cart.filter((item) => item._id !== id) })),
}));
