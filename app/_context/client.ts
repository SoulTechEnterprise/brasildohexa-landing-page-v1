import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface IClient {
  name: string
  email: string
  phone: string
  document: string
}

interface Client {
  data: IClient | null
  setClient: (tax: IClient) => void
  clearClient: () => void
}

export const useClientZustand = create<Client>()(
  persist(
    (set) => ({
      data: null,
      
      setClient: (client) => set({ data: client }),
      
      clearClient: () => set({ data: null })
    }),
    {
      name: "zustand-client"
    }
  )
)