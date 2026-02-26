"use client"

import { Minus, Plus, Trash } from "lucide-react"
import { useCartStore } from "../_context/cart"

import Link from "next/link"

export default function Cart() {
  const cart = useCartStore(el => el.cart)
  const { increaseQuantity, decreaseQuantity, removeItem } = useCartStore();

    return (
        <main className="h-dvh text-white">
            <section className="grid grid-rows-[auto_1fr_auto] gap-8 p-4 h-full max-w-xl m-auto">
              <h1 className="text-4xl font-bold text-center">Pedidos</h1>

              <div className="flex flex-col gap-8 overflow-y-scroll">
                {
                  cart.map(el => {
                    return (
                      <div key={el.id} className="grid grid-cols-[auto_1fr] gap-4">

                        <picture 
                          className="aspect-square bg-black rounded bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(/t-shirt/${el.color.toLocaleLowerCase()}.jpeg)` }}
                        />

                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between">
                            <p className="font-bold">{el.title}</p>

                            <p className="font-bold text-green-500">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(el.price * el.quantity)}</p>
                          </div>

                          <p>Tamanho: {el.size} | Cor: {el.color}</p>
                          <div className="flex justify-between">
                            
                            <div className="flex gap-2 items-center bg-white text-black rounded">
                              <button onClick={() => decreaseQuantity(el.id)} className="px-4 cursor-pointer">
                                <Minus className="size-4" />
                              </button>
                              <span className="font-bold">{el.quantity}</span>
                              <button onClick={() => increaseQuantity(el.id)} className="px-4 cursor-pointer">
                                <Plus className="size-4" />
                              </button>
                            </div>

                            <button onClick={() => removeItem(el.id)} className="flex items-center justify-center border border-solid border-white rounded size-8 cursor-pointer"><Trash className="size-4 text-white" /></button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <Link className="uppercase font-bold text-center bg-green-500 px-2 py-4 rounded text-white cursor-pointer" href="/entrega">Adicionar Endereço</Link>
            </section>
        </main>
    )
}