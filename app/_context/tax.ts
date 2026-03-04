import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ITax {
  id: string
  delivery_time: number
  price: number
}

interface Tax {
  data: ITax | null
  setTax: (tax: ITax) => void
  clearTax: () => void
}

export const useTaxZustand = create<Tax>()(
  persist(
    (set) => ({
      data: null,
      
      setTax: (tax) => set({ data: tax }),
      
      clearTax: () => set({ data: null })
    }),
    {
      name: "zustand-tax"
    }
  )
)