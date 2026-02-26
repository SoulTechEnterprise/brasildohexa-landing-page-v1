"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "../_context/cart";
import { createPayment } from "../actions/mercadopago";
import { MoveRight } from "lucide-react";


export default function Delivery() {
    const cart = useCartStore(el => el.cart)

    const [CEP, setCEP] = useState<string>("")
    const [street, setStreet] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [state, setState] = useState<string>("")

    const getAddress = async (cep: string) => {
        if(cep.length > 7) {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const { logradouro, localidade, estado } = await response.data
            
            setStreet(logradouro)
            setCity(localidade)
            setState(estado)
        }
    }

    const [isLoading, setIsLoading] = useState(false)

    const handlePayment = async () => {
        if (cart.length === 0) return

        setIsLoading(true)
        
        const response = await createPayment(cart)

        if (response.url) {
            window.location.href = response.url
        } else {
            setIsLoading(false)
        }
    }

    return (
        <main className="h-dvh text-white">
            <section className="grid grid-rows-[auto_1fr_auto] gap-8 p-4 h-full max-w-lg m-auto items-center">
                <h1 className="text-4xl font-bold text-center">Endereço de Entrega</h1>

                <div className="flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cep">CEP</label>
                        <input required value={CEP} onChange={(el) => {setCEP(el.target.value); getAddress(el.target.value)}} className="px-4 py-2 rounded outline-none border border-solid border-white/75" id="cep" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="street">Endereço</label>
                        <input required value={street} onChange={(el) => {setStreet(el.target.value)}} className="px-4 py-2 rounded outline-none border border-solid border-white/75" id="street" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="number">Número</label>
                        <input required value={number} onChange={(el) => {setNumber(el.target.value)}} className="px-4 py-2 rounded outline-none border border-solid border-white/75" id="number" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="city">Cidade</label>
                        <input required value={city} onChange={(el) => {setCity(el.target.value)}} className="px-4 py-2 rounded outline-none border border-solid border-white/75" id="city" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="state">Estado</label>
                        <input required value={state} onChange={(el) => {setState(el.target.value)}} className="px-4 py-2 rounded outline-none border border-solid border-white/75" id="state" />
                    </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isLoading || cart.length === 0}
                  className="cursor-pointer flex items-center justify-center gap-4 bg-green-500 text-white uppercase p-4 rounded font-bold text-center"
                  >
                  {isLoading ? 'Redirecionando...' : 'Finalizar no Mercado Pago'}
                  <MoveRight className="size-8" />
              </button>
            </section>
        </main>
    )
}