import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isMenuOpen: false,
  isCartOpen: false,
  
  toggleMenu: () => set((state) => ({ 
    isMenuOpen: !state.isMenuOpen,
    isCartOpen: false
  })),
  
  toggleCart: () => set((state) => ({ 
    isCartOpen: !state.isCartOpen,
    isMenuOpen: false
  })),
}));