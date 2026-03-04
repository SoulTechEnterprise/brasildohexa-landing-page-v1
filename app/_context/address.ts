import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IAddress {
    zip_code: string,
    street: string,
    number: string,
    district: string,
    city: string,
    state: string,
}

interface Address {
  data: IAddress | null
  setAddress: (tax: IAddress) => void
  clearAddress: () => void
}

export const useAddressZustand = create<Address>()(
  persist(
    (set) => ({
      data: null,
      
      setAddress: (tax) => set({ data: tax }),
      
      clearAddress: () => set({ data: null })
    }),
    {
      name: "zustand-address"
    }
  )
)