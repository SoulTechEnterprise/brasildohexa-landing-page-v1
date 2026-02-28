'use client';

import { useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { useCartStore } from '@/app/_context/cart';
import { Color, Size } from './enum';

import { toast } from "sonner"

initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!);

export default function Cart() {
  const addToCart = useCartStore((state) => state.addToCart)

  const [color, setColor] = useState<Color>(Color.AMARELO)
  const [size, setSize] = useState<Size>(Size.M)

  const handleCart = () => {
    console.log(color)
    console.log(size)

    const item = {
      id: `${color}-${size}-camiseta-do-brasil`,
      title: "Camiseta",
      color,
      size,
      quantity: 1,
      price: 120.00,
    }

    toast.success("Adicionado com sucesso!", {position: "top-center"})

    addToCart(item)
  }

  return (
    <div className="h-dvh w-full snap-start">
        <section className="max-w-7xl m-auto p-4 h-full grid items-center lg:justify-center text-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 bg-zinc-100 rounded p-4 lg:p-8">
            <div 
              className="aspect-square bg-black rounded bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(/t-shirt/${color}.jpeg)` }}
            />

            <div className="flex flex-col gap-4 lg:gap-8 justify-between">
              <div className='flex gap-4 lg:flex-col lg:gap-8'>
                <h4 className="font-bold text-sm lg:text-4xl self-center lg:self-start">Camisa Seleção Pro 2026</h4>
                <p className="text-2xl lg:text-4xl font-bold text-green-500">R$120,00</p>
              </div>

              <span className="w-full h-px bg-black/25 rounded-full" />

              <div className="flex lg:flex-col gap-4">
                <span className="font-bold text-lg lg:text-2xl">Cor</span>

                <div className="flex gap-4">
                  <div className="relative">
                    <input onClick={() => {setColor(Color.AMARELO)}} value="AMARELO" name="color" id="yellow" type="radio" className="peer hidden" defaultChecked />
                    <label 
                      htmlFor="yellow" 
                      className="block size-8 bg-yellow-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2" 
                    />
                  </div>

                  <div className="relative">
                    <input onClick={() => {setColor(Color.PRETO)}} value="PRETO" name="color" id="black" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="black" 
                      className="block size-8 bg-black border border-black rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2" 
                    />
                  </div>

                  <div className="relative">
                    <input onClick={() => {setColor(Color.AZUL)}} value="AZUL" name="color" id="blue" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="blue" 
                      className="block size-8 bg-blue-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-offset-2" 
                    />
                  </div>
                  
                  <div className="relative">
                    <input onClick={() => {setColor(Color.BRANCO)}} value="BRANCO" name="color" id="white" type="radio" className="peer hidden" />
                    <label 
                      htmlFor="white" 
                      className="block size-8 bg-white-500 rounded-full cursor-pointer transition-all peer-checked:ring-2 peer-checked:ring-green-500 outline peer-checked:ring-offset-2" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col gap-4">
                <span className="font-bold text-lg lg:text-2xl">Tamanho</span>

                <div className="grid grid-cols-5 gap-2 lg:gap-4 text-white w-full">
                  <div>
                    <input onClick={() => {setSize(Size.P)}} value="P" type="radio" name="size" id="size-p" className="peer hidden" disabled />
                    <label 
                      htmlFor="size-p" 
                      className="flex w-full items-center justify-center size-8 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black peer-disabled:opacity-10"
                    >
                      <span className="uppercase font-bold">P</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.M)}} value="M" type="radio" name="size" id="size-m" className="peer hidden" defaultChecked />
                    <label 
                      htmlFor="size-m" 
                      className="flex w-full items-center justify-center size-8 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black peer-disabled:opacity-10"
                    >
                      <span className="uppercase font-bold">M</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.G)}} value="G" type="radio" name="size" id="size-g" className="peer hidden" />
                    <label 
                      htmlFor="size-g" 
                      className="flex w-full items-center justify-center size-8 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black peer-disabled:opacity-10"
                    >
                      <span className="uppercase font-bold">G</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.GG)}} value="GG" type="radio" name="size" id="size-gg" className="peer hidden" disabled />
                    <label 
                      htmlFor="size-gg" 
                      className="flex w-full items-center justify-center size-8 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black peer-disabled:opacity-10"
                    >
                      <span className="uppercase font-bold">GG</span>
                    </label>
                  </div>

                  <div>
                    <input onClick={() => {setSize(Size.XG)}} type="radio" name="size" id="size-xg" className="peer hidden" disabled />
                    <label 
                      htmlFor="size-xg" 
                      className="flex w-full items-center justify-center size-8 border border-solid border-black rounded text-center cursor-pointer transition-all peer-checked:border-green-200 peer-checked:bg-green-500 peer-checked:text-white text-black peer-disabled:opacity-10"
                    >
                      <span className="uppercase font-bold">XG</span>
                    </label>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleCart} 
                className="w-full cursor-pointer uppercase font-bold text-center bg-green-500 text-white px-4 py-4 rounded hover:bg-green-600 transition-colors"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </section>
      </div>
  );
}