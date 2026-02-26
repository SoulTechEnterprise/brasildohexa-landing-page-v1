import { create } from 'zustand'

export interface CartItem {
  id: string
  title: string
  size: string
  color: string
  quantity: number
  price: number
}

interface CartStore {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  
  addToCart: (newItem) => set((state) => {
    const itemExists = state.cart.find((item) => item.id === newItem.id)

    if (itemExists) {
      return {
        cart: state.cart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      }
    }

    return { cart: [...state.cart, newItem] }
  }),

  increaseQuantity: (id) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
    ),
  })),

  decreaseQuantity: (id) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ),
  })),

  removeItem: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
  
  clearCart: () => set({ cart: [] }),
}))