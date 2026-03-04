import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ICart {
  id: string
  title: string
  size: string
  color: string
  quantity: number
  price: number
}

interface Cart {
  cart: ICart[]
  addToCart: (item: ICart) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
  clearCart: () => void

  total: () => number
}

export const useCartZustand = create<Cart>()(
  persist(
    (set, get) => ({
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

      total: () => {
        const { cart } = get()
        
        return cart.reduce((acumulador, item) => {
          return acumulador + (item.price * item.quantity)
        }, 0)
      }
    }),
    {
      name: "zustand-cart"
    }
  )
)