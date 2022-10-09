import create from 'zustand';

import { Product, ProductCart } from '@/types';

interface ProductStore {
  products: ProductCart[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  cleanCart: () => void;
}

export const useCartStore = create<ProductStore>((set) => ({
  products: [],
  cleanCart: () => set({ products: [] }),
  addProduct: (product: Product) =>
    set((state) => {
      if (state.products.some((p) => p.id === product.id)) {
        return {
          products: state.products.map((p) => {
            if (p.id === product.id) {
              return {
                ...p,
                quantity: p.quantity + 1,
              };
            }
            return p;
          }),
        };
      }

      return { products: state.products.concat({ ...product, quantity: 1 }) };
    }),
  removeProduct: (id: number) =>
    set((state) => {
      const hasMultipleSameItems = state.products.some(
        (p) => p.id === id && p.quantity > 1
      );
      if (hasMultipleSameItems) {
        return {
          products: state.products.map((p) => {
            if (p.id === id) {
              return {
                ...p,
                quantity: p.quantity - 1,
              };
            }
            return p;
          }),
        };
      }
      return { products: state.products.filter((p) => p.id !== id) };
    }),
}));
