import { create } from 'zustand';
import { ShoppingItemFrontend } from '@full-stack-test-task/database';

export const useShoppingListStore = create<{
  items: ShoppingItemFrontend[];
  toggleBought: (id: string) => void;
  addItem: (item: ShoppingItemFrontend) => void;
  deleteItem: (id: string) => void;
  setItems: (items: ShoppingItemFrontend[]) => void;
}>((set) => ({
  items: [] as ShoppingItemFrontend[],
  toggleBought: (id: string) =>
    set((state) => ({
      items: state.items.map((item) =>
        item._id === id ? { ...item, bought: !item.bought } : item,
      ),
    })),
  addItem: (item: ShoppingItemFrontend) =>
    set((state) => ({ items: [...state.items, item] })),
  deleteItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item._id !== id),
    })),
  setItems: (items: ShoppingItemFrontend[]) => set({ items }),
}));
